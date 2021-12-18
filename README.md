## puppeteer-debug

> Interrupt puppeteer/playwright for debug.

### Usage

#### puppeteer

```js
const puppeteer = require('puppeteer')
const debug = require('puppeteer-debug')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await debug({ browser, page, ... }) // pass initial context(must be object) to REPL.
  await browser.close()
})()
```

#### playwright

```js
const playwright = require('playwright')
const debug = require('puppeteer-debug')

;(async () => {
  const browser = await playwright.chromium.launch({
    headless: false
  })
  const page = await browser.newPage()
  await debug({ browser, page, ... }) // pass initial context(must be object) to REPL.
  await browser.close()
})()
```

In REPL:

```
> page.goto('https://google.com')
> page.type('input', 'hello, world!')
> page.click('input[type=submit]')
...
> this.page2 = await browser.newPage()
> this.page2.goto('https://google.com') // or page2.goto('https://google.com')
```

Use `CTRL+C` exit REPL.

**NOTE**: If you define custom variables, please mount to `this`, eg: `this.xxx = yyy`

### License

MIT
