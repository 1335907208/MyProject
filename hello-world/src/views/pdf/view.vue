<template>
  <div class="container">
    <iframe ref="iframe" :src="`docs/index.html`" frameborder="0"></iframe>
    <!-- <iframe :src='`https://view.officeapps.live.com/op/view.aspx?src=${url}`' width='100%' height='100%' frameborder='1'></iframe> -->
 </div>
</template>
<script>
import PDFJSAnnotate from '../../PDFJSAnnotate';
export default {
  data(){
    return{
      url:'http://203.125.12.205:9000/files/upload/20200806/004c1e965ab5f676cff3e05cabd37873.pdf'
    }
  },
  mounted () {

  },
  watch:{
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
.container{
  iframe{
    width: 100%;
    height: 100%;
    color: #FFFF00;
  }
}
</style>
