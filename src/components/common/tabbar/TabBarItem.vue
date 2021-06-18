<template>
  <div class="tab-bar-item iconfont" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'#c04851'
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // home -> item1(/home) = true
      // home -> item1(/category) = false
      // home -> item1(/cart) = false
      // home -> item1(/profile) = false
      return this.$route.path.indexOf(this.path) !== -1; // indexOf 找不到返回-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
      // console.log('itemclick');
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item div:first-child {
  margin-top: 3px;
  font-size: 22px;
}
.tab-bar-item span {
  font-size: 14px;
}

</style>