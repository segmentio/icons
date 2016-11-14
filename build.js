import path from 'path'
import { readFileSync } from 'fs'
import { readFile, writeFile, readdir } from 'mz/fs'
import mkdir from 'mkdirp-then'
import toPascalCase from 'pascal-case'
import SVGO from 'svgo'
import * as babel from 'babel-core'
import transformJSX from 'babel-plugin-transform-react-jsx'
import addModuleExports from 'babel-plugin-add-module-exports'

/**
 * Compnent templates.
 */

const DEKU_TEMPLATE = readFileSync('./templates/deku.js', 'utf8')
const REACT_TEMPLATE = readFileSync('./templates/react.js', 'utf8')

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

  const components = []

  for (const file of svgs) {
    const name = path.basename(file, '.svg')
    const component = toPascalCase(name)
    const source = await readFile(file, 'utf8')
    const jsx = await toJSX(source)
    const deku = createDekuComponent(jsx, component)
    const react = createReactComponent(jsx, component)

    console.log(`svgs/${name}.svg -> build/deku/${component}.js`)
    await writeFile(`./build/deku/${component}.js`, deku)
    console.log(`svgs/${name}.svg -> build/react/${component}.js`)
    await writeFile(`./build/react/${component}.js`, react)

    components.push(component)
  }

  const index = components.map(component => `exports["${component}"] = require('./${component}')`)
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
 * Create a Deku component with `jsx` and `name`.
 */

function createDekuComponent (jsx, name) {
  const source = DEKU_TEMPLATE.replace('__SOURCE__', jsx).replace('__NAME__', name)
  return transform('element', source)
}

/**
 * Create a React component with `jsx` and `name`.
 */

function createReactComponent (jsx, name) {
  const source = REACT_TEMPLATE.replace('__SOURCE__', jsx).replace('__NAME__', name)
  return transform('React.createElement', source)
}

/**
 * Transform `source` using the given JSX `pragma`.
 */

function transform (pragma, source) {
  return babel.transform(source, {
    presets: [ 'es2015', 'stage-0' ],
    plugins: [
      [ transformJSX, { pragma } ],
      addModuleExports
    ]
  }).code
}

/**
 * Convert `svg` to JSX.
 */

function toJSX (svg) {
  return new Promise(function (resolve, reject) {
    const svgo = new SVGO({
      plugins: [
        {
          removeTitle: true,
          removeXMLNS: true
        }
      ]
    })
    svgo.optimize(svg, function (res) {
      const jsx = res.data.replace(/("__COLOR__")/g, '{color}')
      resolve(jsx)
    })
  })
}
