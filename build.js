import { readFile, writeFile, readdir } from 'mz/fs'
import path from 'path'
import mkdir from 'mkdirp-then'
import SVGO from 'svgo'
import * as babel from 'babel-core'
import transformJSX from 'babel-plugin-transform-react-jsx'

/**
 * Entrypoint.
 */

async function main () {
  await mkdir('./build/deku')
  await mkdir('./build/react')

  const files = await readdir('./svgs')
  const svgs = files
    .filter(f => path.extname(f) === '.svg')
    .map(f => path.join(__dirname, 'svgs', f))

  const names = []

  for (const file of svgs) {
    const name = path.basename(file, '.svg')
    const source = await readFile(file, 'utf8')
    const jsx = await toJSX(source)
    const deku = createDekuComponent(jsx)
    const react = createReactComponent(jsx)

    console.log(`svgs/${name}.svg -> build/deku/${name}.js`)
    await writeFile(`./build/deku/${name}.js`, deku)
    console.log(`svgs/${name}.svg -> build/react/${name}.js`)
    await writeFile(`./build/react/${name}.js`, react)

    names.push(name)
  }

  const index = names.map(name => `exports["${name}"] = require('./${name}')`)
  const final = transform('', index.join('\n'))
  await writeFile('./build/deku/index.js', final)
  await writeFile('./build/react/index.js', final)

  await writeFile('./build/index.js', `
    exports.react = require('./react')
    exports.deku = require('./deku')
  `)
}

/**
 * Run.
 */

main().catch(e => {
  console.error(e.stack)
  process.exit(1)
})

/**
 * Create a Deku component with `jsx`.
 */

function createDekuComponent (jsx) {
  return transform('element', `
    import element from 'virtual-element'

    export default { render }

    function render ({ props }) {
      return (${jsx})
    }
  `)
}

/**
 * Create a React component with `jsx`.
 */

function createReactComponent (jsx) {
  return transform('React.createElement', `
    import React from 'react'

    export default props => (${jsx})
  `)
}

/**
 * Transform `source` using the given JSX `pragma`.
 */

function transform (pragma, source) {
  return babel.transform(source, {
    presets: [ 'es2015', 'stage-0' ],
    plugins: [
      [ transformJSX, { pragma } ]
    ]
  }).code
}

/**
 * Convert `svg` to JSX.
 */

function toJSX (svg) {
  return new Promise(function (resolve, reject) {
    const svgo = new SVGO()
    svgo.optimize(svg, function (res) {
      const jsx = res.data.replace(/("__COLOR__")/g, '{props.color}')
      resolve(jsx)
    })
  })
}
