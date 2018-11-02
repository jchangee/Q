<template>
	<div class="shoppingMsg clearfix">
		<div class="fl">
			<input type="checkbox" checked  class="left-input"/>
			<div class="imgbox">
				<slot name="leftImg"></slot>
			</div>
		</div>
		<div class="fr">
			<div>
				<div class="fl">
					<slot name="shoppingTxt"></slot>
				</div>
				<div class="fr">
					<i class="iconfont icon-shanchu"></i>
				</div>
			</div>
			<div class="addMsg clearfix">
				<div class="fl">
					￥<span>{{price}}</span>
				</div>
				<div class="fr">
					<input class="fl" type="button" name="" value="-" />
					<input class="fl" type="text" name=""  :value="quantity" />
					<input class="fl" type="button" name=""  value="+" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["price","quantity"]
	}
</script>

<style lang="less">
	/*购物车的信息*/
.shoppingMsg{
	height: 240/60rem;
	background: #f8f8f8;
	padding: 30/60rem 20/60rem 0;
	box-sizing: border-box;
	font-size: 25/60rem;
	position: relative;
	.left-input{
		margin-right: 10/60rem;
	}
	.imgbox{
		width: 170/60rem;
		height: 170/60rem;
		height: 170/60rem;
		border: 1px solid gainsboro;
		box-sizing: border-box;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			width: 50%;
		}
	}
	>.fl{
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	>.fr{
		width: 60%;
		.fl{
			width: 90%;
		}
		.addMsg{
			margin-top: 125/60rem;
			>.fl{
				width: 32%;
			}
			>.fr{
				width: 50%;
			}
			input{
				text-align: center;
				width: 20%;
				outline: none;
				border: 1px solid gray;
				height: 37/60rem;
				box-sizing: border-box;
				&:nth-of-type(2){
					width: 40%;
				}
				&:first-of-type{
					border-radius: 10/60rem 0 0 10/60rem;
					height: 37/60rem;
					border-right: none;
				}
				&:last-of-type{
					border-radius:0 10/60rem 10/60rem 0;
					height: 37/60rem;
					border-left: none;
				}
			}
		}
	}
}
</style>