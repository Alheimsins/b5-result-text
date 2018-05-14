'use strict'

const test = require('ava')
const generateResult = require('../../index')

test('throws if missing input', t => {
  const expectedErrorMessage = 'Missing required input'
  const error = t.throws(() => {
    generateResult()
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('throws if not input.scores', t => {
  const expectedErrorMessage = 'Missing required input data.scores'
  const error = t.throws(() => {
    generateResult({scores: false})
  }, Error)

  t.is(error.message, expectedErrorMessage)
})

test('returns expected result', t => {
  const scores = require('../data/scores.json')
  const expectedResult = require('../data/result-text-en.json')
  const result = generateResult({scores: scores})

  t.deepEqual(expectedResult, result, 'result ok')
})
