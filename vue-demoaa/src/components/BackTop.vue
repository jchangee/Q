<template>
	<div class="BackTop" @click="backTop()" v-show="backTopShow">
		<i class="iconfont icon-dingbu"></i><br />
		<span>顶部</span>
	</div>
</template>

<script>
 export default {
    data() {
      return {
        backTopShow:false
      }
    },
    components: {},
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=400;
            document.documentElement.scrollTop-=40;
          }else {
            clearInterval(back)
          }
        },20);
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      }
    }
  }
</script>


<style lang="less">
	.BackTop{
		width: 100/70rem;
		height: 100/70rem;
		line-height: 30/70rem;
		border: 2/70rem solid gray;
		border-radius: 50%;
		text-align: center;
		position: fixed;
		bottom: 180/70rem;
		right: 50/70rem;
		font-size: 25/70rem;
		padding-top:20/70rem;
		box-sizing: border-box;
		background: #eef2f2;
		z-index: 120;
		i{
			font-size: 35/70rem;
			font-weight: bold;
		}
	}
	
</style>