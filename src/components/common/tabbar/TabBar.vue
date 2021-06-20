<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#tab-bar {
  display: flex;
  padding-bottom: 15px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);
}

</style>