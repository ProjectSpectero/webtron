import { ipcMain } from 'electron'

function load () {
  ipcMain.on('specteroReady', (e) => {
    console.log('*** Spectero Desktop is ready!')
  })

  ipcMain.on('browseTo', (e, path) => {
    console.log('*** Changing page to', path)
  })
}

export default {
  load
}
