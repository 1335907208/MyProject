<template>
  <div class="container-circular">
      <div class="circular1 circular"></div>
      <div class="circular2 circular"></div>
      <div class="circular3 circular"></div>
 </div>
</template>
<script>
export default {
  name: 'circular',
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
.container-circular{
  height: 300px;
  width: 300px;
  position: relative;
      &:hover .circular{
        animation: indexMotion .2s infinite linear;
      }
      &:hover .circular2{
        animation-delay: -0.02s
      }
      &:hover .circular3{
        animation-delay: -0.04s
      }
  .circular1 ,.circular2 ,.circular3{
    height:150px;
    width: 150px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-75px) translateX(-75px);
  }
  .circular1{
    z-index: 3;
    background: #ffffff;
  }
  .circular2{
    z-index: 2;
    background: rgb(255, 0, 179);
  }
  .circular3{
    z-index: 1;
    background: rgb(10, 235, 216);
  }
@keyframes indexMotion
  {
    0%  {
      transform: translateY(-75px) translateX(-75px);
    }
    25%  {
      transform: translateY(-89px) translateX(-88px);
    }
    50%  {
      transform: translateY(-65px) translateX(-60px);
    }
    75%  {
      transform: translateY(-100px) translateX(-69px);
    }
    100%{
      transform: translateY(-75px) translateX(-75px);
    }
  }
}

</style>
