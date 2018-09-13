<template>
  <div class="wrapper">
    <sidebar/>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import sidebar from '@/components/sidebar'

document.addEventListener('DOMContentLoaded', function () {
  console.log('Loading Spectero desktop ...')
  ipcRenderer.send('specteroReady')
})

export default {
  components: {
    sidebar
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>

