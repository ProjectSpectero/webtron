// Microserver that connects to the web project locally (located at src/web)
// Requirements: npm install --save-dev concurrently finalhandler serve-static
// Note that if you change the webserver port you'll also have to change it on src/main/index.js!

const http = require('http')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')
const serve = serveStatic('./src/web', { 'index': ['index.html'] })
const port = 9000

let server = http.createServer((req, res) => {
  const done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(port)
console.log('*** Spectero Web initialized in http://127.0.0.1:' + port)