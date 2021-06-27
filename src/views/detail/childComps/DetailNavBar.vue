<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick">
        <span class="iconfont">&#xe645;</span>
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          :class="{active: currentIndex === index}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "评论", "参数", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>