const playwright = require('playwright')
const debug = require('.')

;(async () => {
  const browser = await playwright.chromium.launch({
    headless: false
  })
  const page = await browser.newPage()
  console.log('before')
  await debug({ browser, page })
  console.log('after')
  await browser.close()
})().catch(console.error)
