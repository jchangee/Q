<template>
	<div class="CommodityMsg">
		<router-link to="/DataPage">
			<slot name="ImgMsg"></slot>
			<div class="commodityMsgInner">
				<p>{{name}}</p>
				<p><span>{{global}}</span></p>
				<p>￥<span>{{price}}</span></p>
				<p><span>{{unitPrice}}</span>/斤 已售 <span>{{amount}}</span></p>
			</div>			
		</router-link>
	</div>
</template>

<script>
	export default {
		props:["name","global","price","unitPrice","amount"]
	}
</script>

<style lang="less">
	
</style>