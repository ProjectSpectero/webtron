<template>
  <div class="web-wrapper">
    <webview id="webview" class="web" :src="liveUrl"></webview>
  </div>
</template>

<script>
export default {
  data: () => ({
    liveUrl: 'https://app.spectero.com/',
    localUrl: 'http://localhost:8080'
  }),
  mounted () {
    let webViewEl = document.getElementById('webview')
    webViewEl.addEventListener('did-get-response-details', function (details) {
      console.log('Webview details:', details)
    })
  }
}
</script>

<style lang="scss" scoped>
.web-wrapper {
  flex: 1;
  height: 100vh;

  > .web {
    height: 100vh;
  }
}
</style>

