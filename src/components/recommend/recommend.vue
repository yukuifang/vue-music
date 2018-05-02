<template>
  <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
    <slider>
      <div v-for="item in recommends">
        <a :href="item.linkUrl">
          <img class="needsclick"  :src="item.picUrl">
        </a>
      </div>
    </slider>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  export default {
    data() {
      return {
        recommends: [],

      }
    },
    created() {
      this._getRecommend()
    },
    methods:{
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      }
    },
    components:{
      Slider
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slider-wrapper
    position: relative
    width: 100%
    overflow: hidden
</style>
