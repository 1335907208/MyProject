<template>
  <div class="main">
    <div class="container">

      <square class="item"></square>
      <circular class="item"></circular>
      <rotate class="item"></rotate>
    </div>

  </div>
</template>
<script>
import square from './components/square';
import circular from './components/circular';
import rotate from './components/rotate';
export default {
  components:{
    square,
    circular,
    rotate
  }
}
</script>
<style lang="scss" scoped>
  .main{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: radial-gradient(circle, #130f40, #1c234d, #2a3657, #3d4960, #535c68);
  }
  .container{
    display: flex;
    margin: 50px;
  }
  .item{
    margin: 50px 70px;
  }
</style>
