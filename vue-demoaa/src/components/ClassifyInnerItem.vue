<template>
	<div class="ClassifyInnerItem">
		<span>{{txt}}</span>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props:["txt"]
	}
</script>

<style lang="less">
	.ClassifyInnerItem{
		display: inline-block;
		width: 20%;
		height: 80/70rem;
		line-height: 80/70rem;
		font-size: 35/70rem;
		text-align: center;
	}
</style>