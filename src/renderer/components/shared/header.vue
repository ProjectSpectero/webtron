<template>
  <header>
    <ul class="tabs">
      <li @click.stop="browseTo('web')">
        Manage
      </li>
      <li @click.stop="browseTo('connect')">
        Connect
      </li>
    </ul>
  </header>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  methods: {
    browseTo (path) {
      ipcRenderer.send('browseTo', path)
      this.$router.push({ name: path })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: $bar-height;
  line-height: $bar-height;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  background: $bar-color;
  border-bottom: 1px solid $bar-border;
  color: $bar-text;
  font-weight: $font-bold;
  font-size: 16px;

  ul {
    list-style: none;
    display: flex;

    > li {
      padding: 0 25px;
      border-right: 1px solid $bar-border;
      cursor: pointer;
    }
  }
}
</style>
