<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- 可以修改item的颜色：activeColor='pink' -->
      <div slot="item-icon">&#xe6a9;</div>
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="item-icon">&#xe7f9;</div>
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="item-icon">&#xe602;</div>
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-icon">&#xe613;</div>
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  // name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>