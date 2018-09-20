<template>
  <div id="app">
    <app-header/>

    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/shared/header'
import { ipcRenderer } from 'electron'

document.addEventListener('DOMContentLoaded', function () {
  ipcRenderer.send('specteroReady')
})

export default {
  name: 'spectero',
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
@import '~@styles/main.scss';

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.wrapper {
  margin-top: $bar-height;
  flex: 1;
}
</style>

