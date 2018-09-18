<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

document.addEventListener('DOMContentLoaded', function () {
  ipcRenderer.send('specteroReady')
})

export default {
  name: 'spectero'
}
</script>

<style lang="scss">
@import '~@styles/main.scss';
</style>

