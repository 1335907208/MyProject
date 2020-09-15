<template>
  <div class="container">
    <div class="container-item" @click="changePage('pdf-view')">PDF-view</div>
    <div class="container-item" @click="changePage('pdf-index')">PDF-Annotations</div>
    <div class="container-item" @click="changePage('demo-animation')">Animation</div>
    <div class="container-item" @click="changePage('demo-shooting')">Shooting</div>
 </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  mounted () {
  },
  methods:{
    changePage(value){
      this.$router.push({
        path: value
      });
    }
  },
  watch:{
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-flow: column;
  &-item{
    cursor: pointer;
  }
}
</style>
