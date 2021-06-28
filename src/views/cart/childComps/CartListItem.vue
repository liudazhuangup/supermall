<template>
  <div class="list-item">
    <div class="cart-list-main" v-for="(item,index) in itemInfo" :key="index">
      <div class="cart-list-left">
        <input
          type="checkbox"
          class="check"
          v-model="item.checked"
          @click="checkClick(item,$event)"
        />
        <img :src="item.image" alt class="goods-img" />
      </div>
      <div class="cart-list-right">
        <div class="goods-title">{{item.title}}</div>
        <div class="goods-desc">{{item.desc}}</div>
        <div class="goods-info">
          <span class="price">￥{{item.price}}</span>
          <span class="count">x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick(item, $event) {
      item.checked = !item.checked;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.cart-list-main {
  display: flex;
background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ececec;
}
.cart-list-left {
  flex: 1;
  display: flex;
  align-items: center;
}
.check {
  outline: none;
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 50%;
  appearance: none;
  /* -webkit-appearance: none; */
  /* -webkit-user-select: none; */
  user-select: none;
}
/*直接用图片代替选中的样子，如果不需要，可设置背景色*/
.check:checked {
  background: var(--color-high-text);
  border: 0;
  /* background: url("../../assets/images/checkbox_checked.png") no-repeat; */
  /* background-size: cover; */
}

.goods-img {
  width: 52px;
  height: 66px;
  overflow: hidden;
  border: 1px solid #ececec;
  margin: 0 10px;
  border-radius: 6px;
  vertical-align: middle;
}
.cart-list-right {
  flex: 2;
  position: relative;
}
.goods-title,
.goods-desc {
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
}
.goods-title {
  font-size: 16px;
  color: #393733;
}
.goods-desc {
  margin-top: 8px;
  font-size: 10px;
}
.goods-info {
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.price {
  font-size: 14px;
  color: var(--color-tint);
}
.count {
  float: right;
  font-size: 14px;
}
</style>