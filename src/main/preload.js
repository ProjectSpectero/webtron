import { ipcRenderer } from 'electron'

window.sendToElectron = function (channel) {
  ipcRenderer.send(channel)
}
