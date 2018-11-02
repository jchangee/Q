<template>
	<div class="Search">
		<i class="iconfont icon-sousuo-copy"></i>
		<input type="text" :placeholder="txt"/>
	</div>
</template>

<script>
	export default{
		props:["txt"]	
	}
</script>

<style lang="less">
	.Search{
		width: 100%;
		height: 85/60rem;
		line-height: 85/60rem;
		position: relative;
		text-align: center;
		i{
			position: absolute;
			top: 5/60rem;
			left:8%;
			font-size: 30/60rem;
			z-index: 10;
		}
		input{
			vertical-align:middle;
			position: relative;
			width: 90%;
			height: 55/60rem;
			line-height: 55/60rem;
			border-radius: 30/60rem;
			outline: none;
			text-indent: 10%;
			border: 1px solid gray;
			background: #f5f5f5;
			font-size: 25/60rem;
		}
	}
</style>