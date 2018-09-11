<template>
  <div class="web-wrapper">
    <webview class="web" src="https://app.spectero.com/"></webview>
  </div>
</template>

<script>
export default {

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

