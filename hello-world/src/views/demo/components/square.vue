<template>
    <div class="square">
        <div class="square-1">
          <div>
            <span>1</span>
          </div>
        </div>
        <div class="square-2">
          <div>
            <span>2</span>
          </div>
        </div>
        <div class="square-3">
          <div>
            <span>3</span>
          </div>
        </div>
        <div class="square-4">
          <div>
            <span>4</span>
          </div>
        </div>
        <div class="square-5">
          <div>
            <span>5</span>
          </div>
        </div>
        <div class="square-6">
          <div>
            <span>6</span>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'square',
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
  .square{
    width: 200px;
    height: 200px;
	  transform-style: preserve-3d;
    transform: rotateX(-27deg) rotateY(-27deg);

    &:hover{
	    animation: boxRotate 5s infinite;
    }
  }
  .square-1,.square-2,.square-3,.square-4,.square-5,.square-6{
    position: absolute;
    width: 200px;
    height: 200px;
		background: red;
		opacity: 0.7;

    display: flex;
    justify-content: center;
    align-items: center;
    & div{

      color: #ffffff;
      font-size: 60px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #666;
      display: flex;
      user-select: none;
      justify-content: center;
      align-items: center;
    }
  }
  .square-1{
			background: #e056fd;
	      transform: rotateY(0deg) translateZ(100px);
   			animation-fill-mode: forwards;
  }
  .square-2{
			background: #30336b;
	      transform: rotateY(0deg) translateZ(-100px);
   			animation-fill-mode: forwards;
  }
  .square-3{

			background: #535c68;
	      transform: translateX(-100px) rotateY(90deg);
   			animation-fill-mode: forwards;
  }
  .square-4{

			background: #f9ca24;
	      transform: translateX(100px) rotateY(90deg);
   			animation-fill-mode: forwards;
  }
  .square-5{
      background: #eb4d4b;
	      transform: translateY(-100px) rotateX(90deg);
   			animation-fill-mode: forwards;
  }
  .square-6{
      background: #6ab04c;
	      transform:translateY(100px) rotateX(90deg);
   			animation-fill-mode: forwards;
  }
/*正方体旋转动画*/
		@keyframes boxRotate
	    {
        0%  {
          transform: rotateX(-27deg) rotateY(-27deg);
        }
        50%  {
          transform: rotateX(315deg) rotateY(315deg);
        }
        100%{
          transform: rotateX(-27deg) rotateY(-27deg);
        }
	    }
</style>
