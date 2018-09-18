'use strict'

import { app, BrowserWindow, BrowserView, ipcMain, session } from 'electron'
import config from '../../.electron-vue/config'

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const specteroDesktop = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const specteroWebsite = 'http://127.0.0.1:' + config.port

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    title: 'Spectero Desktop',
    width: 1100,
    height: 700,
    autoHideMenuBar: true,
    center: true,
    resizable: true,
    frame: true,
    transparent: false,
    webPreferences: {
      nodeIntegration: (process.env.NODE_ENV === 'development'),
      devTools: (process.env.NODE_ENV === 'development')
    }
  })

  let webWiew = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      preload: './preload.js'
    }
  })
  webWiew.setBounds({ x: 0, y: 50, width: 1100, height: 650 })

  loadIpcHandlers()
  processHeaders()

  mainWindow.loadURL(specteroDesktop)
  mainWindow.setBrowserView(webWiew)
  webWiew.webContents.loadURL(specteroWebsite)

  console.log('*** Using Spectero Web bundle from ' + specteroWebsite)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

function loadIpcHandlers () {
  ipcMain.on('specteroReady', function () {
    console.log('*** Spectero Desktop is ready!')
  })

//   // Listen for async message from renderer process
//   ipcMain.on('async', (event, arg) => {
//     mainWindow.webContents.send('spectero-async-call', 'async call sent')
//   })

//   // Listen for sync message from renderer process
//   ipcMain.on('sync', (event, arg) => {
//     mainWindow.webContents.send('spectero-sync-call', 'sync call sent')
//   })
}

function processHeaders () {
  session.defaultSession.webRequest.onBeforeSendHeaders({
    urls: [
      'http://*/*',
      'https://*/*'
    ]
  }, (details, callback) => {
    details.requestHeaders['User-Agent'] = 'Spectero Desktop'

    // eslint-disable-next-line
    callback({ cancel: false, requestHeaders: details.requestHeaders })
  }, (error) => {
    if (error) {
      console.error('Failed to append HTTP header', error)
    }
  })
}
