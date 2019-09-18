const test = require('ava')
const { readdir } = require('fs').promises
const languagePath = 'lib/data'
const isFolder = item => item !== 'languages.json'
const expectedFiles = ['agreeableness.js',
  'conscientiousness.js',
  'extraversion.js',
  'index.js',
  'neuroticism.js',
  'openness_to_experience.js']

test('it has all files in language folder', async t => {
  const langs = await readdir(languagePath)
  const langFolders = langs.filter(isFolder)
  const paths = langFolders.map(folder => `${languagePath}/${folder}`)
  const allFiles = await Promise.all(paths.map(path => readdir(path)))
  allFiles.forEach(files => {
    t.deepEqual(files, expectedFiles, 'All files are present')
  })
})
