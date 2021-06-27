<template>
  <div class="back-top">
    <div class="backTopIcon iconfont">&#xe6a2;</div>
  </div>
</template>

<script>
export default {
  name:'BackTop'
};
</script>

<style scoped>
.back-top{
  background-color: #fff;
  text-align: center;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
  
  position: fixed;
  bottom: 70px;
  right: 10px;
}
.backTopIcon {
  font-size: 18px;
  color: var(--color-high-text);
}
</style>