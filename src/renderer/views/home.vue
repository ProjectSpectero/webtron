<template>
  <div class="wrapper">
    <web-wrapper/>
    <sidebar/>
  </div>
</template>

<script>
import webWrapper from '@/components/webWrapper'
import sidebar from '@/components/sidebar'

export default {
  components: {
    webWrapper,
    sidebar
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100vh;
}
</style>

