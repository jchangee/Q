<template>
	<div class="ShoppingTrolley">
		<Title>
			<p class="bgWhite">购物车</p>
		</Title>
		<ShoppingTitle>
			<div class="shoppingTitle">
				<input type="checkbox" />
				<span>Q宠自营</span>
			</div>
		</ShoppingTitle>
		<div class="list">
			<!--商品内容列表-->
			<ShoppingList :checked="item.checked" @countadd="addcount" @Reducecount="Reducecount" @Remove="Remove" :index="index" v-for="(item,index) in list" :id="item.id" :name="item.name" :price="item.price" :count="item.count" :imgUrl="item.imgUrl"></ShoppingList>
		</div>
		<div class="postageMsg">
			<p>自营商品25省(甘青蒙藏宁新除外)满99包邮，还差28.00</p>
		</div>
		<div class="footer">
			<div class="fl fl1">
				<input type="checkbox"  v-on:click='checkedAll' />
				<span>全选</span>
			</div>
			<div class="fl fl2">
				<div class="sum">合计：<span>￥{{ totalPrice }}</span></div>
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

	//	图片数据
	import img1 from '../../assets/images/banner-slide5.png'
	import img2 from '../../assets/images/banner-slide4.png'
	import img3 from '../../assets/images/banner-slide3.png'
	import img4 from '../../assets/images/banner-slide2.png'
	export default {
		components: {
			//			注册Title组件
			Title,
			//			注册购物车商品头部
			ShoppingTitle,
			ShoppingList
		},
		data() {
			return {
				list: [{
						id: 1,
						name: '优基 金枪鱼西芹能量果 贵宾犬成犬粮 1.5kg',
						price: 120,
						count: 2,
						imgUrl: img1,
						checked:'checked'
					},
					{
						id: 2,
						name: '比利时原装进口 欧冠 鸡肉米饭中型成犬粮 12kg',
						price: 528,
						count: 1,
						imgUrl: img2,
						checked:'checked'
					},
					{
						id: 3,
						name: '海瑞特 鲜肉60+系列 全价小型犬成犬粮 1.5kg',
						price: 115,
						count: 4,
						imgUrl: img3,
						checked:'checked'
					},
					{
						id: 4,
						name: '蒙贝 犬用酪咔奶条 蓝莓味 120g',
						price: 24.8,
						count: 4,
						imgUrl: img4,
						checked:'checked'
					}
				]
			}
		},
		computed: {
			totalPrice() {
				var total = 0;
				for(var i = 0; i < this.list.length; i++) {
					var item = this.list[i];
					total += item.price * item.count;
				}

				return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
			}
		},
		methods: {
			addcount(index) {
				this.list[index].count += 1
			},
			Reducecount(index) {
				if(this.list[index].count != 1) {
					this.list[index].count -= 1
				};
			},
			Remove(index) {
				this.list.splice(index, 1);
			},
			checkedAll(index) {
//				this.list[index].checked=""
				console.log(this.list.checked)
			}
		},
	    created(){
			this.$emit("tabbarshow",true)
		}
	}
</script>

<style lang="less">
	.bgWhite {
		background: white;
		font-size: 40/60rem;
		font-weight: bold;
	}
	
	.ShoppingTrolley {
		input {
			font-size: 30/60rem;
		}
		input[type="checkbox"] {
			zoom: 2/70rem;
		}
		i {
			font-size: 30/60rem!important;
		}
	}
	/*购物车店名*/
	
	.shoppingTitle {
		padding: 0 20/60rem;
		font-size: 25/60rem;
		text-align: left;
		background: white;
	}
	
	.list {
		margin-bottom: 300/60rem;
	}
	/*邮费模块*/
	
	.postageMsg {
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
	
	.footer {
		width: 100%;
		height: 140/60rem;
		line-height: 100/60rem;
		padding: 20/60rem;
		box-sizing: border-box;
		position: fixed;
		bottom: 95/60rem;
		background: white;
		/*全选*/
		.fl1 {
			width: 20%;
			font-size: 30/60rem;
		}
		/*合计*/
		.fl2 {
			margin-top: 20/60rem;
			line-height: 30/60rem;
			.sum {
				font-size: 30/60rem;
				span {
					color: red;
				}
			}
			.discounts {
				font-size: 20/60rem;
				color: gray;
			}
		}
		.fr {
			input {
				width: 220/60rem;
				height: 70/60rem;
				line-height: 70/60rem;
				text-align: center;
				border: none;
				border-radius: 60/60rem;
				background: #ff5948;
				color: white;
				font-size: 30/60rem;
				outline: none;
			}
		}
	}
</style>