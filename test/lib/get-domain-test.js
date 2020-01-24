const test = require('ava')
const getDomain = require('../../lib/get-domain')

test('throws if missing options', t => {
  const expectedErrorMessage = 'Missing required input: options'
  const error = t.throws(() => {
    getDomain()
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.language', t => {
  const expectedErrorMessage = 'Missing required input: options.language'
  const error = t.throws(() => {
    getDomain({ language: false })
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('throws if missing input.domain', t => {
  const expectedErrorMessage = 'Missing required input: options.domain'
  const error = t.throws(() => {
    getDomain({ language: 'en', domain: false })
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('returns empty for non existing domain', t => {
  const result = getDomain({ language: 'en', domain: 'x' })
  t.falsy(result, 'result falsy ok')
})

test('fallback lang en', t => {
  const result = getDomain({ language: 'xx', domain: 'o' })
  t.truthy(result, 'result ok')
})

test('returns expected result', t => {
  const result = getDomain({ language: 'en', domain: 'o' })
  t.truthy(result, 'result ok')
})
