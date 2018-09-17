<template>
  <div class="wrapper">
    <sidebar/>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import sidebar from '@/components/sidebar'

document.addEventListener('DOMContentLoaded', function () {
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
  display: flex;
}
</style>

