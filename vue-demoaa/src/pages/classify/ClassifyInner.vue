<template>
	<div class="ClassifyInner">
		<PageHead txt="详情页" class="white">
			<i slot="icon" class="fl iconfont icon-jiantou11"></i>
		</PageHead>
		<Search txt="搜索内容"></Search>
		<div class="filtrate">
			<ClassifyInnerItem txt="">
				<i class="iconfont icon-triangle-up ft37" v-show="flag" @click="toggleme()"> 综合</i>
				<i class="iconfont icon-triangle-down-copy ft37" v-show="!flag" v-on:click="toggleme()"> 综合</i>
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="销售">
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="价格">
				<i class="iconfont icon-shangxiajiantou"></i>
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="">
				<i class="iconfont icon-pailiefangshi" v-show="flag2" @click="toggleChange()"></i>
				<i class="iconfont icon-quanbu ft37" v-show="!flag2" @click="toggleChange()"></i>
			</ClassifyInnerItem>
			<ClassifyInnerItem txt="">
				<i class="iconfont icon-shaixuan ft35" @click="rightSlide()"> 筛选</i>
			</ClassifyInnerItem>
			<!--右边滑出模块-->
			<mt-popup style="width:90%; height:100%;" v-model="popupVisible" position="right" popup-transition="popup-slide">
				<ClassifyInnerItem txt="年龄"></ClassifyInnerItem>
				<div class="InnerItem clearfix">
					<ClassifyInnerItem txt="全犬期">
						<span>成犬</span>
						<span>幼犬</span>
					</ClassifyInnerItem>			
				</div>
				<ClassifyInnerItem txt="产地"></ClassifyInnerItem>
				<div class="InnerItem clearfix">
					<ClassifyInnerItem txt="美国">
						<span>新西兰</span>
						<span>中国</span>
					</ClassifyInnerItem>			
				</div>
				<ClassifyInnerItem txt="犬型"></ClassifyInnerItem>
				<div class="InnerItem clearfix">
					<ClassifyInnerItem txt="全体型">
						<span>小型犬</span>
						<span>中大型犬</span>
					</ClassifyInnerItem>			
				</div>
				<ClassifyInnerItem txt="犬种"></ClassifyInnerItem>
				<div class="InnerItem clearfix">
					<ClassifyInnerItem txt="通用型">
						<span>纯正血统</span>
						<span>进口品种</span>
					</ClassifyInnerItem>			
				</div>
				<ClassifyInnerItem txt="规格"></ClassifyInnerItem>
				<div class="InnerItem clearfix">
					<ClassifyInnerItem txt="小包 (1.5-5kg)">
						<span>大包 (10.1-50kg)</span>
						<span>中包 (5.1kg-10kg)</span>
						<span>超小包 (1.5kg-2kg)</span>
					</ClassifyInnerItem>			
				</div>
				<ClassifyInnerItem txt="口味"></ClassifyInnerItem>
				<div class="InnerItem clearfix">
					<ClassifyInnerItem txt="鸡肉">
						<span>羊肉</span>
						<span>牛肉</span>
						<span>猪肉</span>
						<span>其他</span>
					</ClassifyInnerItem>			
				</div>
				<div class="resetAndconfirm clearfix">
					<ClassifyInnerItem txt="重置">
						<span>确定</span>
					</ClassifyInnerItem>			
				</div>
			</mt-popup>
			
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
	
	//	引入PageHead
	import PageHead from "@/components/PageHead"
	//	引入search组件
	import Search from "@/components/Search"
	import ClassifyInnerItem from "@/components/ClassifyInnerItem"
	//	引入Popup弹出组件
	import { Popup } from 'mint-ui';
	export default {
		components:{
//			注册search组件
			Search,
			ClassifyInnerItem,
			PageHead,
		},
		data(){
			return{
				flag:false,
				popupVisible:false,
				flag2:true,
			}
       	},
        methods:{
        toggleme(){
			if(this.flag==false){
				this.flag=true
			}else{
				this.flag=false
			}
        },
        rightSlide(){
         	this.popupVisible = true
        },
        toggleChange(){
			if(this.flag2==false){
				this.flag2=true
			}else{
				this.flag2=false
			}
        },
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
		.ft35{
			font-size: 35/70rem;
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
		.InnerItem{
			width: 100%;
			>.ClassifyInnerItem{
				width: 100%;
			}
			span{
				width: 28%;
				height: 50/70rem;
				line-height: 50/70rem;
				float: left;
				margin:10/70rem 0 0 22/70rem;
				background: #f6f6f6;
				border-radius: 10/70rem;
				border: 2/70rem solid #c173c1;
				font-size: 30/70rem;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
		.resetAndconfirm{
			margin-top: 30/70rem;
			>.ClassifyInnerItem{
				width: 100%;
			}
			span{
				display: inline-block;
				width: 47%;
				height: 70/70rem;
				line-height: 70/70rem;
				border-radius: 30/70rem;
				font-size: 30/70rem;
				&:first-of-type{
					background: #ffcb39;					
				}
				&:last-of-type{
					background: #fe8071;					
				}
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
			font-size: 30/70rem;
			border-radius: 10/70rem;
		}
	}
	
</style>