<template>
  <div class="web-wrapper">
    <loading v-if="loading" text="Loading Spectero App, please wait ..."/>
    <webview id="spectero-web" :src="src" :preload="preload"/>
  </div>
</template>

<script>
import path from 'path'
import config from '../../../.electron-vue/config'
import loading from '@/components/shared/loading'

export default {
  components: {
    loading
  },
  data: () => ({
    preload: `file:${path.resolve(__dirname, './preload.js')}`,
    loading: true
  }),
  computed: {
    src () {
      return config.specteroWeb.url + ':' + config.specteroWeb.port
    }
  },
  mounted () {
    let webview = document.getElementById('spectero-web')

    webview.addEventListener('did-fail-load', (e) => {
      console.log('child :: failed to load - ' + webview.src)
      console.log('e : ' + JSON.stringify(e))
    })

    webview.addEventListener('did-finish-load', () => {
      console.log('child :: finished loading - ' + webview.src)
      this.loading = false
    })

    webview.addEventListener('dom-ready', () => {
      console.log('child :: dom-ready fired - ' + webview.src)
    })

    webview.addEventListener('did-get-response-details', () => {
      console.log('child :: got response - ' + webview.src)
    })
  }
}
</script>

<style lang="scss">
.web-wrapper {
  display: flex;
  flex-direction: column;
}

#spectero-web {
  height: calc(100vh - 50px);
}
</style>

