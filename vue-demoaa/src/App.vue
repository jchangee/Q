<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
//	导入tabber组件
	import Tabbar from "@/components/Tabbar"
	
export default {
  name: 'App',
  components:{
//	注册tabber组件
  	Tabbar
  },
  mounted(){
		//路径应该为首页
		this.$router.push("/");
	}
}
</script>

<style>
*{
	padding:0;
	margin: 0;
}
.fr{
	float: right;
}
.fl{
	float: left;
}
/*混合模式 内减模式*/
.sizing{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.clearfix:after{
	content: "";
	display: block;
	clear: both;
	height: 0;
}
a{
	text-decoration: none;
	color: gray;
}
.router-link-active {
	text-decoration: none;
}

</style>
