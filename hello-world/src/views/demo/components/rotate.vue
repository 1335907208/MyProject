<template>
  <div class="container-rotate">
    <div v-for="i in 10" :key="i">
      <div :style="`top:${i*50}px;animation-delay:${i*2/12}s`" class="ball left"></div>
      <div :style="`top:${i*50+23}px;animation-delay:${i*2/12}s`" class="line"></div>
      <div :style="`top:${i*50}px;animation-delay:${i*2/12}s`" class="ball right"></div>
    </div>
 </div>
</template>
<script>
export default {
  name: 'rotate',
  props: {
    inspectionType: {
      type: Object,
      default: undefined
    },
  },
  data(){
    return{
    }
  },
  mounted () {
  },
  methods:{
  },
  watch:{
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
.container-rotate{
  height: 300px;
  width: 180px;
  position: relative;
  .ball{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
  }
  .ball{
    top: 50px;
  }
  .left{
    background: rgb(226, 198, 43);
    animation: leftMotion 1.5s infinite linear;
  }

  .right{
    background: rgb(47, 94, 223);
    left: 130px;
    animation: rightMotion 1.5s infinite linear;
  }

  .line{
    position: absolute;
    height: 5px;
    background: #FFF;
    left: 50px;
    right: 50px;
    top: 73px;
    animation: lineMotion .75s infinite linear;
    z-index: -1;
  }

  @keyframes leftMotion
  {
    0%  {
      left: 0;
      width: 40px;
      height: 40px;
      margin-top: 5px;
      z-index: 2;
      filter: hue-rotate(0);
    }
    20% {
      width: 50px;
      height: 50px;
    }
    50% {
      left: 130px;
    }
    100% {
      z-index: 1;
      width: 40px;
      height: 40px;
      margin-top: 5px;
      left: 0;
      filter: hue-rotate(360deg);
    }
  }
  @keyframes rightMotion
  {
    0%  {
      left: 130px;
      z-index: 1;
      width: 40px;
      height: 40px;
      margin-top: 5px;
      filter: hue-rotate(360deg);
    }
    50% {
      left: 0;
    }
    80% {
      width: 50px;
      height: 50px;
    }
    100% {
      width: 40px;
      height: 40px;
      margin-top: 5px;
      left: 130px;
      z-index: 2;
      filter: hue-rotate(0);
    }
  }
  @keyframes lineMotion
  {
    0%  {
      left: 40px;
      right: 40px;
    }
    40% {
      left: 80px;
      right: 80px;
    }
    100% {
      left: 30px;
      right: 35px;
    }
  }
}
</style>
