'use strict'

const test = require('ava')
const pkg = require('../../package.json')
const dependencies = pkg.dependencies || {}

if (Object.keys(dependencies).length > 0) {
  Object.keys(dependencies).forEach((dependency) => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
} else {
  test('no dependecies to test', t => {
    t.truthy(true)
  })
}
