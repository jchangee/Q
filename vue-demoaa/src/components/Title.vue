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
		background: #f0f0f0;
		font-size: 25/60rem;
		border-bottom: 1px solid #EAFFEA;
	}
</style>