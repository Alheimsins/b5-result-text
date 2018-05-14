const getDomain = require('./get-domain')

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
  if (!options.facet) {
    throw new Error('Missing required input: options.facet')
  }
  const domain = getDomain(options)
  if (!domain) {
    throw new Error('Domain not found')
  }
  const facetId = options.facet.toString()
  const filtered = domain.facets.find(item => item.facet.toString() === facetId)
  return filtered
}
