<template>
  <div class="wrapper">
    <web/>
    <sidebar/>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import sidebar from '@/components/sidebar'
import web from '@/components/web'

document.addEventListener('DOMContentLoaded', function () {
  ipcRenderer.send('specteroReady')
})

export default {
  components: {
    sidebar,
    web
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
</style>

