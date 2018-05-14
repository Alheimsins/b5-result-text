const getTemplate = require('./get-template')

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.language) {
    throw new Error('Missing required input: options.language')
  }
  if (!options.domain) {
    throw new Error('Missing required input: options.domain')
  }
  const template = getTemplate(options.language)
  if (!template) {
    throw new Error('Template not found')
  }
  const domainId = options.domain.toLowerCase()
  const filtered = template.find(item => item.domain.toLowerCase() === domainId)
  return filtered
}
