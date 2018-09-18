<template>
  <div class="web-wrapper">
    <webview id='spectero-web' :src='src' :preload='preload'></webview>
  </div>
</template>

<script>
import config from '../../../.electron-vue/config'
import preloadFile from '../../main/preload.js'

let webview = document.getElementById('spectero-web')

webview.addEventListener('dom-ready', () => {
  console.log('DOM-Ready, triggering events !')
  webview.send('request')
  webview.send('alert-something', 'Hey')
})

webview.addEventListener('ipc-message', (event) => {
  console.log(event)
  console.info(event.channel)
})

export default {
  computed: {
    src () {
      return 'http://127.0.0.1:' + config.port
    },
    preload () {
      return preloadFile
    }
  }
}
</script>

<style lang="scss">
.web-wrapper {
  flex: 1;
}
</style>
