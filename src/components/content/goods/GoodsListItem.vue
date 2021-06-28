<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" @load="imageLoad" />
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect iconfont">&#xe6fb;{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-item {
  border-radius: 10px;
  background-color: #fff;
  margin: 0 4px 10px 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: auto;
  width: 45%;
  height: 100%;

  /* 设置瀑布流 */
  /* display: flex;
  flex-direction: row;
  height: 100%;
  overflow: auto; */
}
.goods-item div p {
  /* 设置文字只显示两行 */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: normal;
  -webkit-box-orient: vertical;

  font-size: 12px;
  margin: 5px;
}
.price {
  color: var(--color-high-text);
  padding-left: 5px;
}
.collect {
  float: right;
  padding-right: 5px;
  font-size: 14px;
}
</style>