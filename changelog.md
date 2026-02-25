### 3.2.0/2026-02-25

- fix: catch `uncaughtException` and `unhandledRejection` during REPL session and keep prompting

### 3.1.0/2026-02-25

- fix: catch sync exceptions from `vm.runInContext` and handle promise rejections

### 3.0.0/2026-02-25

- support `const`/`let`/`var` variable declarations, automatically transform to context properties
- no longer need to use `this.xxx` for custom variables

### 2.1.2/2026-01-28

- update package.json

### 2.1.1/2021-12-18

- add playwright test

### 2.1.0/2021-12-18

- remove puppeteer deps

### 2.0.0/2020-09-14

- use `vm.createContext()` instead of `eval()`, keep context
- remove `page.debug()` method
