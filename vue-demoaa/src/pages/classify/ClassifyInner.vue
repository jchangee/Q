<template>
	<div class="ClassifyInner">
		<PageHead txt="进口粮" class="white">
			<router-link to="/ClassIfy" slot="icon">
				<i class="fl iconfont icon-jiantou11"></i>				
			</router-link>
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
			<!--综合里面的-->
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
		<!--内容开始-->
		<div class="bt-130 clearfix" :class="changeBg">
			<CommodityMsg name="耐基斯 幼犬(鸡肉+三文鱼) 1.36kg" global="全球购" price="895" unitPrice="32.9" amount="1143" >
				<div class="ImgMsg"  slot="ImgMsg">
					<img src="../../assets/images/banner-slide1.png" alt=""/>				
				</div>
			</CommodityMsg>
			<CommodityMsg name="安娜玛特Annanmaet 深海冰水经划无谷配方全犬粮 30磅包邮特价" global="全球购" price="355" unitPrice="39.9" amount="2233" >
				<div class="ImgMsg"  slot="ImgMsg">
					<img src="../../assets/images/banner-slide2.png" alt=""/>				
				</div>
			</CommodityMsg>
			<CommodityMsg name="优基 鸭肉蛋黄能量果 小型犬幼犬粮 1.5kg" global="全球购" price="295" unitPrice="42.9" amount="3243" >
				<div class="ImgMsg"  slot="ImgMsg">
					<img src="../../assets/images/banner-slide3.png" alt=""/>				
				</div>
			</CommodityMsg>
			<CommodityMsg name="优基 金枪鱼西芹能量果 贵宾犬成犬粮 1.5kg" global="全球购" price="650" unitPrice="38.9" amount="1553" >
				<div class="ImgMsg"  slot="ImgMsg">
					<img src="../../assets/images/banner-slide4.png" alt=""/>				
				</div>
			</CommodityMsg>
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
	
	import CommodityMsg from './CommodityMsg'
	export default {
		components:{
//			注册search组件
			Search,
			ClassifyInnerItem,
			PageHead,
			CommodityMsg
		},
		data(){
			return{
				flag:false,
				popupVisible:false,
				flag2:true,
				changeBg:'changeBg',
			}
       	},
        methods:{
//      综合
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
//      切换排列样式的点击按钮
        toggleChange(){
			if(this.flag2==false){
				this.flag2=true
//				等于true的时候讲changgeBg的class改为changeBg的样式
				this.changeBg='changeBg'
			}else{
				this.flag2=false
//				等于false的时候讲changgeBg的class改为changeBg2的样式
				this.changeBg='changeBg2'
			}
        },
    },
    created(){
		this.$emit("tabbarshow",true)
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
		/*综合里面的*/
		.filtrateItem{
			position: absolute;
			top: 150/70rem;
			left: 0;
			width: 100%;
			background: white;
			div{
				height: 50/70rem;
				border-bottom:2/75rem solid gray;
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
	
	
	/*商品内容开始*/
	.bt-130{
		margin-bottom: 130/70rem;
	}
	
	/*内容第一种样式*/
	.changeBg{
		.CommodityMsg{
			width: 100%;
			height: 340/70rem;
			padding: 25/70rem;
			box-sizing: border-box;
			border-bottom: 2/70rem dotted gray;
			.ImgMsg{
				width: 30%;
				text-align:center;
				height:100%;
				float:left;
				img{
					height: 75%;
					width: 65%;
					margin: 20/70rem 0 0 20/70rem;
				}
			}
			.commodityMsgInner{
				width: 60%;
				float: right;
				p{
					&:first-of-type{
						font-size: 35/70rem;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						text-overflow: ellipsis;
					}
					
					&:nth-of-type(2){
						span{
							display: inline-block;
							border: 2/70rem solid red;
							border-radius: 25/70rem;
							padding: 5/70rem 15/70rem;
							margin: 50/70rem 20/70rem 10/70rem 0;
							color: red;
							font-size: 30/70rem;
						}
					}
					&:nth-of-type(3){
						color: red;
						font-size: 35/70rem;
					}
					&:last-of-type{
						color: gray;
						font-size: 25/70rem;
					}
				}
			}
		}
	}
	/*内容第一种样式*/
	.changeBg2{
		.CommodityMsg{
			width: 47%;
			padding: 20/70rem 15/70rem;
			box-sizing: border-box;
			border: 2/70rem solid #c7b6b6;
			float:left;
			margin:15/70rem 0 0 14/70rem;
			.ImgMsg{
				width: 100%;
				text-align:center;
				height:180/75rem;
				img{
					height: 95%;
					width: 35%;
				}
			}
			.commodityMsgInner{
				width: 100%;
				p{
					&:first-of-type{
						font-size: 30/70rem;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						text-overflow: ellipsis;
					}
				
					&:nth-of-type(2){
						span{
							display: inline-block;
							border: 2/70rem solid red;
							border-radius: 25/70rem;
							padding: 5/70rem 15/70rem;
							margin: 40/70rem 20/70rem 10/70rem 0;
							color: red;
							font-size: 30/70rem;
						}
					}
					&:nth-of-type(3){
						color: red;
						font-size: 35/70rem;
					}
					&:last-of-type{
						color: gray;
						font-size: 25/70rem;
					}
				}
			}
		}		
	}
</style>