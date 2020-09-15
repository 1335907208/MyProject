<template>
  <div id="container" class="container-shooting">
    <div class="count">
      {{fraction}}
    </div>
    <template v-for="(item ,i) in targetCount">
      <div :key="i" class="target" :style="`left:${item.left}px;top:${item.top}px`" ref="target" @click="count(i)"></div>
    </template>
 </div>
</template>
<script>

import {deepClone} from '@/util/util'
export default {
  data(){
    return{
      fraction:0,
      winHei:0,
      winWid:0,
      targetCount:[]
    }
  },
  mounted () {
    this.winHei = window.innerHeight -200
    this.winWid = window.innerWidth -200
    const interval = setInterval(()=>{
      this.targetCount.push({
        top:this.topCount(),
        left:this.leftCount()
      })
    },500)
  },
  methods:{
    count(index){
      this.targetCount.splice(index,1);
      this.fraction++
    },
    topCount(){
      const temp = 100 + Math.round(Math.random() * this.winHei)
      return temp
    },
    leftCount(){
      const temp = 100 + Math.round(Math.random() * this.winWid)
      return temp
    }
  },
  watch:{
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
.container-shooting{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: radial-gradient(circle, #051937, #181f36, #232535, #2c2c34, #333333);

  .target{
    cursor: pointer;
    width: 45px;
    height: 45px;
    background: aqua;
    border-radius: 50%;
    position: absolute;
  }

  .count{
    position: absolute;
    right: 20px;
    top: 20px;
    font-weight:900;
    font-size: 60px;
    color: #ffffff;
    user-select:none;
  }
}

</style>
