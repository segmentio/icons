import test from 'ava'
import * as components from '../build/index.js'
import * as deku from 'deku'
import React from 'react'
import ReactDOM from 'react-dom'
import element from 'virtual-element'

for (const name in components.deku) {
  const Component = components.deku[name]

  test(`deku/${name} should render`, t => {
    const app = deku.tree(element(Component, {
      color: 'red'
    }))
    const fixture = document.createElement('div')
    deku.render(app, fixture)
    const svg = fixture.querySelector('svg')
    t.truthy(svg)
  })
}

for (const name in components.react) {
  const Component = components.react[name]

  test(`react/${name} should render`, t => {
    const app = React.createElement(Component, { color: 'red' })
    const fixture = document.createElement('div')
    ReactDOM.render(app, fixture)
    const svg = fixture.querySelector('svg')
    t.truthy(svg)
  })
}
