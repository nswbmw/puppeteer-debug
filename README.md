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
  // or: await puppeteer.debug(page)
  await page.debug()// Into REPL
  await browser.close()
})()
```

In REPL:

```
> page.goto('https://google.com')
> page.type('input', 'nswbmw')
> page.click('input[type=submit]')
```

Use `CTRL+C` exit REPL.

### License

MIT