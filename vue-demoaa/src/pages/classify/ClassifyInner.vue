<template>
	<div class="ClassifyInner">
		<PageHead txt="详情页" class="white">
			<i slot="icon" class="fl iconfont icon-jiantou11"></i>
		</PageHead>
		<Search txt="搜索内容"></Search>
		<div class="filtrate">
			<ClassifyInnerItem txt="">
				<i class="iconfont icon-triangle-up ft37" v-show="flag" v-on:click="toggleme()"> 综合</i>
				<i class="iconfont icon-triangle-down-copy ft37" v-show="!flag" v-on:click="toggleme()"> 综合</i>
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="销售">
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="价格">
				<i class="iconfont icon-shangxiajiantou"></i>
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="">
				<i class="iconfont icon-pailiefangshi"></i>
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="筛选">
				<i class="iconfont icon-shaixuan"></i>
			</ClassifyInnerItem>
			<div class="filtrateItem" v-show="flag">
				<div>综合</div>
				<div>评论高到低</div>
			</div>
		</div>
		<div class="classifyItem">
			<ClassifyInnerItem txt="品牌"></ClassifyInnerItem>
			<ClassifyInnerItem txt="销售"></ClassifyInnerItem>
			<ClassifyInnerItem txt="产地"></ClassifyInnerItem>
			<ClassifyInnerItem txt="犬型"></ClassifyInnerItem>
		</div>
	</div>
</template>

<script>
	
	//引入PageHead
	import PageHead from "@/components/PageHead"
	//	引入search组件
	import Search from "@/components/Search"
	import ClassifyInnerItem from "@/components/ClassifyInnerItem"
	export default {
		components:{
//			注册search组件
			Search,
			ClassifyInnerItem,
			PageHead,
		},
		data(){
			return{
				flag:false				
			}
       	},
        methods:{
          toggleme(){
			if(this.flag==false){
				this.flag=true
			}else{
				this.flag=false
			}
          }
        }
	}
</script>

<style lang="less">
	.filtrate{
		display: flex;
		flex: 1;
		position: relative;
		i{
			font-size: 30/70rem;
		}
		.ft37{
			font-size: 37/70rem;
		}
		.filtrateItem{
			position: absolute;
			top: 150/70rem;
			left: 0;
			width: 100%;
			div{
				border-bottom:2/75rem solid gainsboro;
				padding: 20/70rem;
				font-size: 30/70rem;
				color: gray;
			}
		}
	}
	.classifyItem{
		display: flex;
		flex: 1;
		.ClassifyInnerItem{
			width: 23%;
			background: #f6f6f6;
			margin-left: 11/70rem;
			height: 60/70rem;
			line-height: 60/70rem;
			font-size: 20/70rem;
			border-radius: 10/70rem;
		}
	}
</style>