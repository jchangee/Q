<template>
	<div class="PageHead">
		<slot name="icon"></slot>
		<span>{{txt}}</span>
	</div>
</template>

<script>
	export default {
		props:["txt"]
	}
</script>

<style lang="less">
	.PageHead{
		width: 100%;
		height: 95/70rem;
		line-height: 95/70rem;
		font-size: 40/70rem;	
		border-bottom: 2/75rem solid #ccc;	
		text-align:center;
		position: relative;
		.iconfont{
			float: left;
			font-size: 30/70rem;
			position: absolute;
			left: 20/70rem;
		}	
	}
			
</style>