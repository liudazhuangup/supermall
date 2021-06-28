<template>
  <div class="bottom-bar">
    <div class="checked-all">
      <input type="checkbox" class="check" :checked="isSelectAll" @click="checkClick" />
      <span class="text-all">全选</span>
    </div>
    <div class="total">
      <div class="total-content">
        <span class="total-text">合计:</span>
        <span class="total-price">￥{{totalPrice}}</span>
      </div>
      <div class="calculate">去结算({{checkLength}})</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(1);
    },
    checkLength() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    isSelectAll() {
      // if (this.cartList.length === 0) return false;
      // return this.cartList.every(item => item.checked);
      return (
        this.cartList.length !== 0 && this.cartList.every(item => item.checked)
      );
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        // 全部选中时执行
        this.$store.commit("checkFalse");
      } else {
        // 部分或全部不选择时执行
        this.$store.commit("checkTrue");
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: pink;
  display: flex;
  align-items: center;
}
.checked-all {
  flex: 1;
  display: flex;
  align-items: center;
}
.check {
  margin-left: 5px;
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
.text-all {
  margin-left: 5px;
  font-size: 10px;
}
.total {
  flex: 1;
  display: flex;
  align-items: center;
}
.total-text {
  font-size: 12px;
  color: #393733;
}
.total-price {
  font-size: 14px;
  color: var(--color-tint);
}
.total-content {
  flex: 4;
}
.calculate {
  flex: 3;
  margin-right: 5px;
  height: 28px;
  /* width: 60px; */
  line-height: 28px;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  background-color: var(--color-tint);
  color: #fff;
}
</style>