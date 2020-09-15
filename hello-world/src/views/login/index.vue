<template>
  <div class="container">
    <!-- ?UserName=${name} -->
    <form action="menu" method="get">
      <div class="login-box">
      <h2>login</h2>
      <div class="input-box">
        <input type="text" v-model="name" required>
        <span class="label">UserName</span>
      </div>
      <div class="input-box">
        <input type="password" v-model="password" required>
        <span class="label">PassWord</span>
      </div>
      <button class="btn">
        Submit
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    </form>
 </div>
</template>
<script>
export default {
  name: '',
  props: {
  },
  data(){
    return{
      name:'',
      password:''
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
.container{
  height: 100vh;
  background-image: radial-gradient(circle, #c7f3f3, #a2c3c3, #7e9494, #5b6969, #3b4040);
  display: flex;
  justify-content: center;
  align-items: center;

  input,button{
    background: transparent;
    border: none;
    outline: none;
  }

  .login-box{
    width: 400px;
    height: 400px;
    background: rgba(0,0,0,.6);
    border-radius: 10px;
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
    padding: 30px;
    box-sizing: border-box;



    h2{
      color: #fff;
      text-align: center;
      text-transform: uppercase;
    }

    .input-box{
      height: 45px;
      margin-bottom: 30px;
      border-bottom: 1px solid #fff;
      position: relative;

      input{
        z-index: 99;
        width: 100%;
        height: 100%;
        color: #fff;
        padding-top: 20px;
        box-sizing: border-box;
        position: relative;

        &:focus+.label,&:valid+.label{
          top: 0;
          font-size: 14px;
        }
      }

      .label{
        z-index: 1;
        color: turquoise;
        position: absolute;
        left: 0;
        top: 20px;
        transition: all .5s linear;
      }
    }
  }

  .btn{
    padding:10px 20px;
    margin-top: 45px;
    color: turquoise;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover{
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      background: turquoise;
      box-shadow: 0 0 5px 0 turquoise,
                  0 0 25px 0 turquoise,
                  0 0 50px 0 turquoise,
                  0 0 100px 0 turquoise;
    }

    &>span{
      position: absolute;
    }

    &>span:nth-child(1){
      width: 100%;
      height: 2px;
      top: 0;
      left: -100%;
      background: -webkit-linear-gradient(left ,transparent ,turquoise);
      animation: line1 1s linear infinite ;
    }
    @keyframes line1 {
      50%,100%{
        left: 100%;
      }
    }
    &>span:nth-child(2){
      width: 2px;
      height: 100%;
      top: -100%;
      right: 0;
      background: -webkit-linear-gradient(top ,transparent ,turquoise);
      animation: line2 1s 0.25s linear infinite ;
    }
    @keyframes line2 {
      50%,100%{
        top: 100%;
      }
    }
    &>span:nth-child(3){
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 100%;
      background: -webkit-linear-gradient(right ,transparent ,turquoise);
      animation: line3 1s 0.5s linear infinite ;
    }
    @keyframes line3 {
      50%,100%{
        left: -100%;
      }
    }
    &>span:nth-child(4){
      width: 2px;
      height: 100%;
      top: 100%;
      left: 0;
      background: -webkit-linear-gradient(bottom ,transparent ,#40e0d0);
      animation: line4 1s 0.75s linear infinite ;
    }
    @keyframes line4 {
      50%,100%{
        top: -100%;
      }
    }
  }
}
</style>
