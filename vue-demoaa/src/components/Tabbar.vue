<template>
	<div class="tabbarWrap">
		<TabbarItem @change="getVal" txt="首页" mark="home" :sel="selected">
			<i class="iconfont icon-shouye"></i>
		</TabbarItem>
		<TabbarItem @change="getVal" txt="分类" mark="classify" :sel="selected">
			<i class="iconfont icon-category"></i>
		</TabbarItem>
		<TabbarItem @change="getVal" txt="购物车" mark="shoppingTrolley" :sel="selected">
			<i class="iconfont icon-gouwuche"></i>
		</TabbarItem>
		<TabbarItem @change="getVal" txt="我的" mark="mine" :sel="selected">
			<i class="iconfont icon-wode"></i>
		</TabbarItem>
	</div>
</template>

<script>
	//	引入Tabbar-item组件
	import TabbarItem from "@/components/TabbarItem"
	export default {
		components:{
//			注册tabbatItem组件
			TabbarItem
		},
		data(){
			return {
				selected:"home"
			}
		},
		methods:{
			getVal(mark){
				this.selected=mark;
			}
		}
	}
</script>

<style lang="less">
	.tabbarWrap{
		width: 100%;
		border-top: 1px solid gainsboro;
		position: fixed;
		bottom: 0;
		background: white;
		z-index: 99;
	}
</style>