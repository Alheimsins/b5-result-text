const test = require('ava')
const getTemplate = require('../../lib/get-template')
const generateResult = require('../../lib/generate-result')
const scores = require('../data/scores.json')
const template = getTemplate('no')

test('it returns expected result', t => {
  const result = generateResult(scores, template)
  t.truthy(result, 'result ok')
})
