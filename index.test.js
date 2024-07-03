const postcss = require('postcss')
const {equal} = require('node:assert')
const {test} = require('node:test')

const plugin = require('./')

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {from: undefined})
  console.log(result.css)
  equal(0, 0)
  equal(result.warnings().length, 0)
}

test('themes added', async () => {
  await run('@shadcnThemes', 'theme classes', {})
})

