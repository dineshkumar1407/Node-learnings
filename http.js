const http = require('http')
http
  .createServer((req, res) => {
    console.log(res)
    res.write('Hey it is working')
    res.end()
  })
  .listen(5000)
