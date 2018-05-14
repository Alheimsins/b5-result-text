const test = require('ava')
const { getInfo } = require('../../index')

test('returns data', t => {
  t.truthy(getInfo(), 'result ok')
})
