const getTemplate = require('./lib/get-template')
const generateResult = require('./lib/generate-result')
const languages = require('./lib/data/languages.json')

function languageSort (a, b) {
  if (a.text < b.text) {
    return -1
  }
  if (a.text > b.text) {
    return 1
  }
  return 0
}

languages.sort(languageSort)

module.exports = data => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const template = getTemplate(data.lang || 'en')

  if (!data.scores) {
    throw new Error('Missing required input data.scores')
  }

  if (!template) {
    throw new Error('Template not found. Try another data.lang input.')
  }

  return generateResult(data.scores, template)
}

module.exports.getInfo = () => ({ languages })

module.exports.getTemplate = (language = 'en') => getTemplate(language)

module.exports.getDomain = require('./lib/get-domain')

module.exports.getFacet = require('./lib/get-facet')
