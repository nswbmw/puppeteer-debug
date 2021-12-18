const puppeteer = require('puppeteer')
const debug = require('.')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  console.log('before')
  await debug({ browser, page })
  console.log('after')
  await browser.close()
})().catch(console.error)
