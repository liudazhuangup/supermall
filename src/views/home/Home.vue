<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />

    <div class="scroll-wrapper">
      <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        @scroll="contentScroll"
        :pull-up-load="true"
        @pullingUp="loadMore"
      >
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"
          ref="tabControl2"
        />
        <goods-list class="goods-list" :goods="showGoods" />
      </scroll>
    </div>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

import { debounce } from "@/common/utils";
import { backTopMixin } from "@/common/mixin";

export default {
  mixins: [backTopMixin],
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null
    };
  },
  created() {
    // 1 请求多个数据
    this.getHomeMultidata();

    // 2 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("homeItemImageLoad", this.itemImgListener);
  },
  destroyed() {
    this.$bus.$off("homeItemImageLoad", this.itemImgListener);
  },
  methods: {
    // 事件监听相关方法
    tabClick(index) {
      // console.log(index);
      this.currentType = index < 1 ? "pop" : index > 1 ? "sell" : "new";
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      // 1 判断backTop是否显示
      // this.isShowBackTop = -position.y > BACK_POSITION;
      this.listenShowBackTop(position);

      // 决定tabControl是否吸顶（position:fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // console.log("jaizaigengd");
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    // console.log("active");
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // console.log("deactive");
    this.saveY = this.$refs.scroll.getScrollY();
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  position: relative;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
}
.goods-list{
  margin-top: 45px;
}
.scroll-wrapper {
  height: calc(100% - 128px);
}
.content {
  height: 100%;
  overflow: hidden;
  /* position: absolute;
  top: 64px;
  bottom: 64px;
  left: 0;
  right: 0; */
}

</style>