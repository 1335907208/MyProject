<template>
  <div class="container">
    <iframe ref="iframe" :src="`web/viewer.html`" frameborder="0"></iframe>
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
    window.addEventListener('message', this.handleMessage);
    // this.onload()

  },
  methods:{
    onload(){
        console.log(PDFJSAnnotate)
        PDFJSAnnotate.getStoreAdapter().getAnnotations(this.url, 1)
        .then((data) => {
          console.log(data.documentId); // "example.pdf"
          console.log(data.pageNumber); // 1
          console.log(data.annotations); // Array
        }, (error) => {
          console.log(error.message);
        });

        // PDFJSAnnotate.UI.disablePen()
        // PDFJSAnnotate.UI.disableEdit()
        // PDFJSAnnotate.render(svg, viewport, annotations).then(res => {
        //   console.log(res)
        // })
    },
    handleMessage(e){
      // let MyStoreAdapter = new PDFJSAnnotate.StoreAdapter({
      //   getAnnotations(documentId, pageNumber) {/* ... */},

      //   getAnnotation(documentId, annotationId) {/* ... */},

      //   addAnnotation(documentId, pageNumber, annotation) {/* ... */},

      //   editAnnotation(documentId, pageNumber, annotation) {/* ... */},

      //   deleteAnnotation(documentId, annotationId) {/* ... */},

      //   addComment(documentId, annotationId, content) {/* ... */},

      //   deleteComment(documentId, commentId) {/* ... */}
      // });
      // console.log(e.data)
      // this.onload()
    },
    save(){
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
  iframe{
    width: 100%;
    height: 100%;
    color: #FFFF00;
  }
}
</style>
