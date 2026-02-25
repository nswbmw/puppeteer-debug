const vm = require('vm')
const assert = require('assert')
const readline = require('readline')

async function debug (context) {
  context = context || {}
  assert.strictEqual(Object.prototype.toString.call(context), '[object Object]')

  context.console = console // for debug
  vm.createContext(context)

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    })
    rl.prompt()
    rl.on('line', (line) => {
      // Skip empty lines
      if (!line.trim()) {
        rl.prompt()
        return
      }

      // Transform variable declarations to context properties
      // Match: const/let/var varName = value
      const varDeclRegex = /^\s*(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(.+)$/
      const match = line.match(varDeclRegex)
      
      let transformedLine = line
      if (match) {
        const varName = match[2]
        const varValue = match[3]
        transformedLine = `this.${varName} = ${varValue}`
      }
      
      vm.runInContext(`(async () => {
        ${transformedLine}
      })()`, context).then(() => {
        rl.prompt()
      }).catch(e => {
        console.error(e)
        rl.prompt()
      })
    })
    rl.on('close', () => {
      console.log('')
      resolve()
    })
  })
}

module.exports = debug
