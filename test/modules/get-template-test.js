const test = require('ava')
const { getTemplate } = require('../../index')
const expectedTemplate = require('../data/get-template-no.json')
const expectedTemplateEn = require('../data/get-template-en.json')

test('it returns template for en as default', t => {
  t.truthy(getTemplate(), 'en ok')
})

test('it returns template for en', t => {
  t.truthy(getTemplate('en'), 'en ok')
})

test('it returns template for no', t => {
  t.truthy(getTemplate('no'), 'no ok')
})

test('it returns expected template for no', t => {
  t.deepEqual(getTemplate('no'), expectedTemplate, 'no ok')
})

test('it returns expected template fallback lang', t => {
  t.deepEqual(getTemplate('xx'), expectedTemplateEn, 'en ok')
})
