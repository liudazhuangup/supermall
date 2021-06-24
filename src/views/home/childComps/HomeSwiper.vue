<template>
  <swiper class="home-swiper">
    <swiper-item :key="index" v-for="(item,index) in banners">
      <a :href="item.link">
        <img :src="item.image" @load='imageLoad' />
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
  data() {
    return {
      idLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
};
</script>

<style scoped>
</style>