import {
  debounce
} from "./utils";
import BackTop from "@/components/content/backTop/BackTop";
import {
  BACK_POSITION
} from "@/common/const"


export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("homeItemImageLoad", this.itemImgListener);
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_POSITION
    }
  }
}
