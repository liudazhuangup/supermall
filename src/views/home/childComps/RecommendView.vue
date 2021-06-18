<template>
  <div id="recommend">
    <div :key="index" v-for="(item,index) in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 15px 0;
  margin-top: 8px;
}
.recommend-item {
  flex: 1;
}
img {
  margin: auto;
  width: 75%;
  padding-bottom: 10px;
}
</style>