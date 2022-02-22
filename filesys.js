const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./content/test.txt', 'utf8')
const second = readFileSync('./content/subcontent/test.txt', 'utf8')
console.log(first, second)
writeFileSync('./content/output.txt', ` ${first} ${second}`, { flag: 'a' })

//flag:a is for append
