<template>
	<div class="ShoppingTrolley">
		<Title>
			<p class="bgWhite">购物车</p>
		</Title>
		<ShoppingTitle>
			<div class="shoppingTitle">
				<input type="checkbox" checked="checked" />
				<span>Q宠自营</span>
			</div>
		</ShoppingTitle>
		<div class="list">
			<ShoppingList price="71" quantity="1">
				<img slot="leftImg" src="../../assets/images/banner-slide5.png" alt="" />
				<p slot="shoppingTxt">法国皇家ROYAl CANIN 小型犬离乳期奶糕1kg MIS30</p>
			</ShoppingList>
			<ShoppingList price="99" quantity="1">
				<img slot="leftImg" src="../../assets/images/banner-slide2.png" alt="" />
				<p slot="shoppingTxt">法国皇家ROYAl CANIN 小型犬离乳期奶糕1kg MIS30</p>
			</ShoppingList>
			<ShoppingList price="71" quantity="1">
				<img slot="leftImg" src="../../assets/images/banner-slide5.png" alt="" />
				<p slot="shoppingTxt">法国皇家ROYAl CANIN 小型犬离乳期奶糕1kg MIS30</p>
			</ShoppingList>
			<ShoppingList price="99" quantity="1">
				<img slot="leftImg" src="../../assets/images/banner-slide2.png" alt="" />
				<p slot="shoppingTxt">法国皇家ROYAl CANIN 小型犬离乳期奶糕1kg MIS30</p>
			</ShoppingList>
			<ShoppingList price="71" quantity="1">
				<img slot="leftImg" src="../../assets/images/banner-slide5.png" alt="" />
				<p slot="shoppingTxt">法国皇家ROYAl CANIN 小型犬离乳期奶糕1kg MIS30</p>
			</ShoppingList>
		</div>
		<div class="postageMsg">
			<p>自营商品25省(甘青蒙藏宁新除外)满99包邮，还差28.00</p>
		</div>
		<div class="footer">
			<div class="fl fl1">
				<input type="checkbox" checked="checked" />
				<span>全选</span>
			</div>
			<div class="fl fl2">
				<div class="sum">合计：<span>￥71.00</span></div>
				<div class="discounts">已优惠：<span>￥0</span></div>
			</div>
			<div class="fr">
				<input type="button" value="结算" />
			</div>
		</div>
	</div>
</template>

<script>
	//	引用title组件
	import Title from "@/components/Title"
//	引入购物车商品头部
	import ShoppingTitle from "@/components/ShoppingTitle"
	import ShoppingList from "@/components/ShoppingList"
	export default {
		components:{
//			注册Title组件
			Title,
//			注册购物车商品头部
			ShoppingTitle,
			ShoppingList
		}
	}
</script>


<style lang="less">
	.bgWhite{
		background: white;
		font-size: 40/60rem;
		font-weight: bold;
	}
	.ShoppingTrolley{
		input{
			font-size: 30/60rem;
		}
		input[type="checkbox"]{
			 zoom: 2/70rem;
		}
		i{
			font-size: 30/60rem!important;
		}		
	}
	/*购物车店名*/
.shoppingTitle{
	padding: 0 20/60rem;
	font-size: 25/60rem;
	text-align: left;
	background: white;
}
.list{
	margin-bottom: 300/60rem;
}
/*邮费模块*/
.postageMsg{
	background: #525252;
	line-height: 80/60rem;
	color: white;
	font-weight: 400;
	font-size: 20/60rem;
	text-align: center;
	position: fixed;
	bottom: 235/60rem;
	width: 100%;
}
/*底部结算*/
.footer{
	width: 100%;
	height: 140/60rem;
	line-height: 100/60rem;
	padding: 20/60rem;
	box-sizing: border-box;
	position: fixed;
	bottom: 95/60rem;
	background: white;
	/*全选*/
	.fl1{
		width: 20%;
		font-size: 30/60rem;
	}
	/*合计*/
	.fl2{
		margin-top: 20/60rem;
		line-height: 30/60rem;
		.sum{
			font-size:30/60rem;
			span{
				color: red;				
			}
		}
		.discounts{			
			font-size: 20/60rem;
			color: gray;
		}
	}
	.fr{
		input{
			width: 220/60rem;
			height: 70/60rem;
			line-height: 70/60rem;
			text-align: center;
			border: none;
			border-radius: 60/60rem;
			background: #ff5948;
			color: white;
			font-size: 30/60rem;
		}
	}
}

</style>