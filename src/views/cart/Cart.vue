<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartBottomBar from "@/components/content/checkButton/CartBottomBar"

import CartList from "./childComps/CartList";

import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // 两种语法
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>