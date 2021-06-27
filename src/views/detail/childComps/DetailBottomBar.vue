<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <div>
        <i class="service iconfont">&#xe625;</i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="shop iconfont">&#xe6eb;</i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="select iconfont">&#xe6fb;</i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item">
      <div class="cart" @click='addToCart'>加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
  background-color: #fff;
  display: flex;
  text-align: center;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1);
}
.bar-item {
  flex: 2;
  display: flex;
}
.bar-item div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.bar-item:first-child {
  margin-top: 5px;
  font-size: 12px;
}
.bar-item:last-child {
  flex: 3;
  overflow: hidden;
  border-radius: 20px;
  margin:  5px;
  height: 40px;
  line-height: 40px;
  justify-content: center;
}
i {
  font-size: 22px;
}
.service {
  color: var(--color-high-text);
}
.cart {
  font-size: 14px;
  background-color: #fed71a;
  color: #2b1216;
}
.buy {
  font-size: 16px;
  background-color: var(--color-high-text);
  color: #fff;
}
</style>