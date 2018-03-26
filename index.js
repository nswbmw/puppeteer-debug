const readline = require('readline')
const puppeteer = require('puppeteer')
const Page = require('puppeteer/lib/Page')

puppeteer.debug = debug
Page.prototype.debug = debug
module.exports = puppeteer

async function debug (page) {
  page = page || this
  return await new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> page.'
    })
    rl.prompt()
    rl.on('line', (line) => {
      try {
        eval(`(async () => {
          console.log(await page.${line})
        })()`).then(() => {
          rl.prompt()
        })
      } catch (e) {
        console.error(e)
        rl.prompt()
      }
    })
    rl.on('close', () => {
      rl.close()
      console.log('')
      resolve()
    })
  })
}
