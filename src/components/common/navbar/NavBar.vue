<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  height: 64px;
  line-height: 82px;
  text-align: center;
}
.left,
.right {
  width: 50px;
}
.center {
  flex: 1;
}
</style>