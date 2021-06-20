<template>
  <swiper class="home-swiper">
    <swiper-item :key="index" v-for="(item,index) in banners">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
/* .home-swiper {
  padding-top: 44px;
} */
</style>