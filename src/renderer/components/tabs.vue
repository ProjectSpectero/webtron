<template>
  <div class="tabs">
    <ul>
      <li>Manage</li>
      <li>Connect</li>
      <li>About</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  width: 1100px;
  height: 50px;
  line-height: 50px;
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
