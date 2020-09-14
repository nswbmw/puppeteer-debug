const puppeteer = require('.')

;(async function () {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  console.log('before')
  await puppeteer.debug({ puppeteer, browser, page })
  console.log('after')
  await browser.close()
})().catch(console.error)
