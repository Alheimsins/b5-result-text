module.exports = (answers, template) => {
  const domainResults = Object.keys(answers).map(key => {
    const answer = answers[key]
    const answerFacets = answer.facet
    const domain = template.find(r => key === r.domain)
    const facetMapper = facet => {
      const answerFacet = answerFacets[facet.facet.toString()] || {}
      return Object.assign(facet, { scoreText: answerFacet.result, score: answerFacet.score, count: answerFacet.count })
    }
    const facets = domain.facets.map(facetMapper).map(facet => Object.assign({ facet: facet.facet, title: facet.title, text: facet.text, score: facet.score, count: facet.count, scoreText: facet.scoreText }))
    const result = domain.results.find(r => r.score === answer.result)
    return {
      domain: domain.domain,
      title: domain.title,
      shortDescription: domain.shortDescription,
      description: domain.description,
      scoreText: result.score,
      count: answer.count,
      score: answer.score,
      facets: facets.filter(f => f.score),
      text: result.text
    }
  })
  return domainResults
}
