const puppeteer = require('.')

;(async function () {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  console.log('before')
  await page.debug()// await puppeteer.debug(page)
  console.log('after')
  await browser.close()
})()