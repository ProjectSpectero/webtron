<template>
  <div class="web-wrapper">
    <webview class="web" src="http://localhost:8080"></webview>
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

