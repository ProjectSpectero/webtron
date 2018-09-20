const { ipcRenderer } = require('electron')

ipcRenderer.on('request', () => {
  console.log('Request was made (caught by preload)')
})
