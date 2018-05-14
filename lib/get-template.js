module.exports = lang => {
  try {
    const template = require(`./data/${lang}`)
    return template
  } catch (error) {
    const template = require('./data/en')
    return template
  }
}
