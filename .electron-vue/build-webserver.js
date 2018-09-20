// Microserver that connects to the web project locally (located at src/web)
// Requirements: npm install --save-dev concurrently finalhandler serve-static
// Note that if you change the webserver port you'll also have to change it on src/main/index.js!

const fs = require('fs')
const chalk = require('chalk')
const specteroWeb = './src/web'
const indexFile = 'index.html'

if (fs.existsSync(specteroWeb) && fs.existsSync(specteroWeb + '/' + indexFile)) {
  const config = require('./config')
  const http = require('http')
  const finalhandler = require('finalhandler')
  const serveStatic = require('serve-static')
  const serve = serveStatic(specteroWeb, { 'index': [indexFile] })

  let server = http.createServer((req, res) => {
    const done = finalhandler(req, res)
    serve(req, res, done)
  })

  server.listen(config.specteroWeb.port)
  console.log(chalk.green.bold('\n\n*** Spectero Web initialized in ' + config.specteroWeb.url + ':' + config.specteroWeb.port + '\n\n'))
} else {
  console.error(chalk.red.bold('\n\n*** ERROR: Spectero Web bundle not found in ' + specteroWeb + '! Aborting ...\n\n'))
  process.exit(-1)
}

