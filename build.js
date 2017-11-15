import path from 'path'
import { readFileSync } from 'fs'
import { readFile, writeFile, readdir } from 'mz/fs'
import mkdir from 'mkdirp-then'
import toPascalCase from 'pascal-case'
import SVGO from 'svgo'
import * as babel from 'babel-core'
import transformJSX from 'babel-plugin-transform-react-jsx'
import addModuleExports from 'babel-plugin-add-module-exports'

const BABEL_ENV = process.env.BABEL_ENV || 'commonjs'
const pathPrefix = BABEL_ENV === 'es' ? './es' : './lib'

/**
 * Compnent templates.
 */

const DEKU_TEMPLATE = readFileSync('./templates/deku.js', 'utf8')
const REACT_TEMPLATE = readFileSync('./templates/react.js', 'utf8')

/**
 * Entrypoint.
 */

async function main () {
  await mkdir(`${pathPrefix}/deku`)
  await mkdir(`${pathPrefix}/react`)

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

    console.log(`svgs/${name}.svg -> ${pathPrefix}/deku/${component}.js`)
    await writeFile(`${pathPrefix}/deku/${component}.js`, deku)
    console.log(`svgs/${name}.svg -> ${pathPrefix}/react/${component}.js`)
    await writeFile(`${pathPrefix}/react/${component}.js`, react)

    components.push(component)
  }

  const dekuList = components.map(component => `export { default as ${component} } from './deku/${component}'`)
  const reactList = components.map(component => `export { default as ${component} } from './react/${component}'`)
  await writeFile(`${pathPrefix}/deku.js`, transform('', dekuList.join('\n')))
  await writeFile(`${pathPrefix}/react.js`, transform('', reactList.join('\n')))

  const index = transform('', `
    import * as react from './react'
    import * as deku from './deku'
    
    export { react, deku }
  `)
  await writeFile(`${pathPrefix}/index.js`, index)
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
  const source = REACT_TEMPLATE.replace('__SOURCE__', toCamelCase(jsx)).replace('__NAME__', name)
  return transform('React.createElement', source)
}

/**
 * Transform `source` using the given JSX `pragma`.
 */

function transform (pragma, source) {
  const config = {
    commonjs: {
      presets: [ 'es2015', 'stage-0' ],
      plugins: [
        [ transformJSX, { pragma } ],
        addModuleExports
      ]
    },
    es: {
      presets: [
        [ 'es2015', { modules: false } ],
        'stage-0'
      ],
      plugins: [
        [ transformJSX, { pragma } ]
      ]
    }
  }
  
  return babel.transform(source, config[BABEL_ENV]).code
}

/**
 * Convert `svg` to JSX.
 */

function toJSX (svg) {
  return new Promise(function (resolve, reject) {
    const svgo = new SVGO({
      plugins: [
        {
          addAttributesToSVGElement: { attributes: ['width="100%"', 'height="100%"'] },
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

/**
 * Convert hyphen-separated props with their
 * camelCase representations (for React).
 */

function toCamelCase (jsx) {
  return jsx
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
}
