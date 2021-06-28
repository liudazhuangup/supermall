<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item :itemInfo="cartList"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
    
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 168px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>