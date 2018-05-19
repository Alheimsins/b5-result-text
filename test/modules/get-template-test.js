const test = require('ava')
const { getTemplate } = require('../../index')

test('it returns template for en as default', t => {
  t.truthy(getTemplate(), 'en ok')
})

test('it returns template for en', t => {
  t.truthy(getTemplate('en'), 'en ok')
})

test('it returns template for no', t => {
  t.truthy(getTemplate('no'), 'no ok')
})
