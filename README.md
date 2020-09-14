## puppeteer-debug

> Interrupt puppeteer for debug.

### Usage

```js
const puppeteer = require('puppeteer-debug')

;(async function () {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await puppeteer.debug() // go to REPL
  // or: await puppeteer.debug({ browser, page, ... }), pass initial context(must be object) to REPL.
  await browser.close()
})()
```

In REPL:

```
> page.goto('https://google.com')
> page.type('input', 'nswbmw')
> page.click('input[type=submit]')
...
> this.page2 = await browser.newPage()
> this.page2.goto('https://google.com') // or page2.goto('https://google.com')
```

Use `CTRL+C` exit REPL.

**NOTE**: If you define custom variables, please mount to `this`, eg: `this.xxx = yyy`

### License

MIT
