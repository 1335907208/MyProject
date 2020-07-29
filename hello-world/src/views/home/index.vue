<template>
  <div class="container">
    <baidu-map
      :scroll-wheel-zoom="mapSettings.scrollWheelZoom"
      :double-click-zoom="false"
      :center="mapSettings.center"
      :zoom="mapSettings.zoom"
      :min-zoom="mapSettings.minZoom"
      @click="baiduMapClick"
      @ready='handleBMapReady'
      class="bm-view">
    </baidu-map>
 </div>
</template>
<script>
import { mapSettings } from '@/config/map'
export default {
  data(){
    return{
      mapSettings
    }
  },
  mounted () {
    this.onload()
  },
  methods:{
    onload(){

    },
    baiduMapClick(e){
      console.log(e)
    },
    handleBMapReady(e){
      const {map} = e
      // map.setMapStyle({
      //   style: this.mapSettings.mapStyle
      // })
    },
  },
  watch:{
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
</style>
