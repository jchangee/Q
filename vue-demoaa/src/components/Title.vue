<template>
	<div class="Title">
	<slot></slot>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="less">
	.Title{
		height: 75/60rem;
		line-height: 75/60rem;
		text-align: center;
		background: #fff;
		font-size: 30/60rem;
		border-bottom: 2/70rem solid #ccc;
	}
</style>