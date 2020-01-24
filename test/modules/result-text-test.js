'use strict'

const test = require('ava')
const generateResult = require('../../index')

test('throws if missing input', t => {
  const expectedErrorMessage = 'Missing required input'
  const error = t.throws(() => {
    generateResult()
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('throws if not input.scores', t => {
  const expectedErrorMessage = 'Missing required input data.scores'
  const error = t.throws(() => {
    generateResult({ scores: false })
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('returns expected result', t => {
  const scores = require('../data/scores.json')
  const result = generateResult({ scores: scores })

  t.truthy(result, 'result ok')
})
