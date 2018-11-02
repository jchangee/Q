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
		border-bottom: 1px solid #ccc;	
		text-align:center;
		.iconfont{
			font-size: 30/70rem;
			margin-left: 25/70rem;
		}	
	}
			
</style>