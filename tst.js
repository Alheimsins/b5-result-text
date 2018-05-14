const { getTemplate } = require('./index')

const template = getTemplate('no')

function repackFacet (prev, current) {
  prev[current.facet] = current
  return prev
}

const repackedTemplate = template.reduce((prev, current) => {
  const facets = current.facets.reduce(repackFacet, {})
  current.facets = facets
  prev[current.domain] = current
  return prev
}, {})

console.log(JSON.stringify(repackedTemplate, null, 2))
