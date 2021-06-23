<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style scoped>
.goods {
  margin-top: 15px;
  padding: 0 10px;
  /* column-count: 2;
  column-gap: 0; */
  display: flex;
  flex-flow: row wrap;
  width: 320px;
  height: 1000px;
}
</style>