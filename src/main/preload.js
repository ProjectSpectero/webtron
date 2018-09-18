const { ipcRenderer } = require('electron')

ipcRenderer.on('request', () => {
  ipcRenderer.sendToHost({ spectero: 'yes' })
})

ipcRenderer.on('alert-something', (event, data) => {
  alert(data)
})
