'use strict'

import { app, BrowserWindow, BrowserView, session, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    title: 'Spectero Desktop',
    width: 1300,
    height: 700,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true
    }
  })

  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })

  loadIpcHandlers()
  processHeaders()

  mainWindow.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 1000, height: 700 })
  view.webContents.loadURL('https://app.spectero.com')

  mainWindow.loadURL(winURL)

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
    console.log('Spectero Desktop is ready.')
  })

  // Listen for async message from renderer process
  ipcMain.on('async', (event, arg) => {
    mainWindow.webContents.send('spectero-async-call', 'async call sent')
  })

  // Listen for sync message from renderer process
  ipcMain.on('sync', (event, arg) => {
    mainWindow.webContents.send('spectero-sync-call', 'sync call sent')
  })
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
