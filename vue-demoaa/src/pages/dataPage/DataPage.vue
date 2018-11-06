<template>
	<div class="DataPage">
		<PageHead txt="详情页" class="white">
			<i slot="icon" class="fl iconfont icon-jiantou11"></i>
		</PageHead>
		<!--轮播图-->
		<Banner class="DataPage-sowingMap white" :paginationShow="true" :autoplay="5000" paginationPosition="right" paginationType='fraction'>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/DogFood1.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/DogFood2.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/DogFood4.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/DogFood3.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/DogFood5.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/DogFood4.jpg" alt="" />
			</div>
		</Banner>
		<div class="DataPage-content white">
			<div class="content-icon">
				<i class="f45 iconfont icon-552cd445ad39f">71</i>
				<i class="f20 iconfont icon-552cd445ad39f">85.2</i></br>
				<span>35.5元/斤</span>
			</div>
			<div class="content-innertext">
				<h6>法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30</h6>
				<i class="f30 fr iconfont icon-fenxiang"></i>
				<p class="">支持使用优惠券、波奇豆、 红包</p>
			</div>
			<div class="content-bottom">
				<p>已售501385</p>
				<span class="fr">授权文件</span>
				<i class="f35 fr iconfont icon-shou"></i>
			</div>
		</div>
		<div class="DataPage-service white">
			<div class="service-promotion">
				<label>促销</label>
				<span class="promotion-item">套餐</span>
				<span>购买以下套餐组合更优惠</span>
				<i class="fr iconfont icon-jiantou1"></i>
			</div>
			<div class="service-voucher">
				<label>领劵</label>
				<span>满1499减410</span>
				<span>满1299减330</span>
				<span>满999减260</span>
				<i class="fr iconfont icon-jiantou1"></i>
			</div>
			<div class="service-service">
				<label>服务</label>
				<span>正品保证</span>
				<span>25省满99元免运费</span>
				<span>7天无忧退换</span>
				<i class="fr iconfont icon-jiantou1"></i>
			</div>
		</div>
		<div class="DataPage-evaluation white">
			<div class="Evaluation-all">
				<span class="fl">全部评价(23)</span>
				<i class="fr iconfont icon-jiantou1"></i>
				<p class="red fr f30">100%</p>
				<span class="fr">满意度</span>
			</div>
			<div class="Evaluation-item clearfix">
				<div class="item-top clearfix">
					<img class="imgs" src="../../assets/images/classMsg3.jpg" />
					<span>华石萨</span>
					<i class="iconfont icon-jiantou"></i>
					<div class="star"></div>
					<div class="stars">
						<img src="../../assets/images/star.png"/>
					</div>
					<p>由于寄养在我家的可乐宝贝很爱吃我家欢仔的皇家小奶糕，所以可乐妈也就麻烦我替她代卖</p>
					<div class="image">
						<img class="Dog1" src="../../assets/images/Dog1.jpg"/>
						<img class="Dog2" src="../../assets/images/Dog2.jpg"/>
					</div>
				</div>
			</div>
			
			<div class="Evaluation-item clearfix">
				<div class="item-top clearfix">
					<img class="imgs" src="../../assets/images/banner-slide12.png" />
					<span>当时</span>
					<i class="iconfont icon-jiantou"></i>
					<div class="star"></div>
					<div class="stars">
						<img src="../../assets/images/star.png"/>
					</div>
					<p>超级喜欢这狗粮的，狗狗很喜欢很喜欢吃呢。怎么吃也吃不腻</p>
					<div class="image">
						<img class="Dog1" src="../../assets/images/Dog3.jpg"/>
					</div>
				</div>
			</div>
			
			<div class="Evaluation-item clearfix">
				<div class="item-top clearfix">
					<img class="imgs" src="../../assets/images/banner2.jpg" />
					<span>舒服舒服</span>
					<i class="iconfont icon-jiantou"></i>
					<div class="star"></div>
					<div class="stars">
						<img src="../../assets/images/star.png"/>
					</div>
					<p>狗狗很喜欢很喜欢吃呢，我家宝贝爱吃很好买几次还会买不过最好再便宜些  </p>
					<div class="image">
						<img class="Dog1" src="../../assets/images/Dog4.jpg"/>
						<img class="Dog2" src="../../assets/images/Dog5.jpg"/>
					</div>
				</div>
			</div>
			<div class="Evaluation-btn">
				<input type="submit" value="查看全部评论" />
			</div>
		</div>
		<div class="DataPage-brand white">
			<img src="../../assets/images/brand7.jpg"/>
			<span>皇家</span>
			<span class="authorization">授权</span>
			<span class="brand">进入品牌</span>
		</div>
		<div class="DataPage-img">
			<img src="../../assets/images/brand8.jpg"/>
			<img src="../../assets/images/brand9.jpg"/>
		</div>
		<div class="DataPage-bottom">
			<TabbarItem @change="getVal" txt="首页" mark="home" :sel="selected">
				<i class="iconfont icon-shouye"></i>
			</TabbarItem>
			<TabbarItem @change="getVal" txt="购物车" mark="shoppingTrolley" :sel="selected">
				<i class="iconfont icon-gouwuche"></i>
			</TabbarItem>
			<span class="bottom-item1">立即购买</span>
			<span class="bottom-item2">加入购物车</span>
		</div>
	</div>
</template>

<script>
	//	引入Tabbar-item组件
	import TabbarItem from "@/components/TabbarItem"
	//引入PageHead
	import PageHead from "@/components/PageHead"
	//	引入banner轮播图组件
	import Banner from "@/components/Banner"

	export default {
		components: {
			PageHead,
			Banner,
			TabbarItem
		},
		created(){
			this.$emit("tabbarshow",false)
		}
	}
</script>

<style lang="less">
	.red{
		color: red;
	}
	.white {
		background: #fff;
	}
	
	.f45 {
		font-size: 45/70rem;
		color: red;
	}
	
	.f20 {
		font-size: 20/70rem;
		color: #999;
		text-decoration: line-through;
	}
	
	.f30 {
		font-size: 30/70rem;
	}
	
	.f35 {
		font-size: 35/70rem;
	}
	
	.DataPage {
		background: #f5f5f9;
		margin-bottom: 100/70rem;
		.DataPage-sowingMap {
			box-sizing: border-box;
			width: 100%;
			height: 600/70rem;
			border-bottom: 1px solid #ccc;
			img {
				height: 540/70rem;
				padding: 20/70rem 0;
			}
			.swiper-pagination {
				width: 93/70rem;
				height: 50/70rem;
				line-height: 50/70rem;
				border: 1px solid #ccc;
				background: #ccc;
				border-radius: 28/70rem;
				margin-left: 80%;
				color: #fff;
			}
		}
		.DataPage-content {
			padding: 20/70rem 20/70rem;
			.content-icon {
				padding: 20/70rem 0;
				span {
					font-size: 20/70rem;
				}
			}
			.content-innertext {
				width: 100%;
				display: inline-block;
				height: 50/70rem;
				line-height: 50/70rem;
				h6 {
					display: inline-block;
					width: 90%;
					font-size: 30/70rem;
				}
				p {
					font-size: 20/70rem;
					color: #999;
				}
			}
			.content-bottom {
				width: 100%;
				height: 50/70rem;
				line-height: 50/70rem;
				p {
					display: inline-block;
					width: 70%;
					color: #999;
					font-size: 20/70rem;
				}
				span {
					color: #999;
					font-size: 20/70rem;
				}
				.iconfont {
					color: red;
				}
			}
		}
		.DataPage-service {
			width: 100%;
			padding: 5/70rem 20/70rem;
			margin-top: 30/70rem;
			box-sizing: border-box;
			.iconfont {
				font-size:20/70rem;
				color: #999;
				padding: 10/70rem 0;
			}
			.service-promotion {
				width: 100%;
				height: 50/70rem;
				line-height: 50/70rem;
				padding: 10/70rem 0;
				font-size: 20/70rem;
				.promotion-item{
					width: 70/70rem;
					height:50/70rem;
					border: 1px solid red;
					border-radius:10/70rem;
					color: red;
				}
				label {
					font-size: 30/70rem;
					display: inline-block;
					color: #999;
				}
				span {
					font-size: 25/70rem;
					display: inline-block;
					text-indent: 10/70rem;
				}
			}
			.service-voucher {
				width: 100%;
				height: 50/70rem;
				line-height: 50/70rem;
				font-size: 20/70rem;
				padding: 10/70rem 0;
				label {
					font-size: 30/70rem;
					display: inline-block;
					color: #999;
				}
				span {
					font-size: 25/70rem;
					display: inline-block;
					text-indent: 10/70rem;
					background: red;
					color: #fff;
				}
			}
			.service-service {
				width: 100%;
				height: 50/70rem;
				line-height: 50/70rem;
				font-size: 20/70rem;
				padding: 10/70rem 0;
				label {
					font-size: 30/70rem;
					display: inline-block;
					color: #999;
				}
				span {
					font-size:25/70rem;
					display: inline-block;
					text-indent: 10/70rem;
				}
			}
		}
		.DataPage-evaluation{
			width:100%;
			margin-top: 30/70rem;
			padding: 5/70rem 20/70rem;
			box-sizing: border-box;
			.Evaluation-all{
				width: 100%;
				height: 70/70rem;
				line-height: 70/70rem;
				font-size: 20/70rem;
				span{
					font-size:25/70rem;
					color: #959595;
				}
				.iconfont{
					font-size:20/70rem;
					color: #999;
					padding: 2/70rem 10/70rem;
				}
			}
			.Evaluation-item{
				margin-top:50/70rem;
				position: relative;
				width: 100%;
				height: 400/70rem;
				.item-top{
					position:relative;
					.imgs{
						width: 60/70rem;
						height: 60/70rem;
						border-radius:50%;	
					}
					span{
						width: 60/70rem;
						font-size:30/70rem ;
						color: #566da4;
						position: absolute;
						top: 15/70rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						padding-left:20/70rem ;
					}
					.iconfont{
						width: 70/70rem;
						height: 40/70rem;
						line-height: 40/70rem;
						font-size: 20/70rem;
						text-align: center;
						border: 1px solid #ccc;
						border-radius:30/70rem;
						position: absolute;
						top: 15/70rem;
						left: 160/70rem;
					}
					p{
						margin-top: 10/70rem;
						line-height: 60/70rem;
						font-size:30/70rem;
					}
					>div{
						width:210/70rem;
						height: 33/70rem;	
						position: absolute;
						left: 65%;	
						top: 20/70rem;
					}
					.star{
						background-image: url(../../assets/images/stars.png);
						background-size: 210/70rem;
					}
					.stars{
						overflow: hidden;
						width: 210/70rem;
						img{
							width:210/70rem;
							height: 33/70rem;
							position: absolute;
							left: 0;
							top: 0;
						}
					}
					.image{
						.Dog1{
							position: absolute;
							top: 570%;
							left: -200%;
							width: 92%;
							height: 180/70rem;
						}
						.Dog2{
							position: absolute;
							top: 570%;
							left: -100%;
							width: 92%;
							height: 180/70rem;
						}
					}
				}
			}
			.Evaluation-btn{
				width: 100%;
				height: 150/70rem;
				line-height: 150/70rem;
				text-align: center;
				input{
					width: 80%;
					height: 80/70rem;
					border: 1px solid #f55b50;
					border-radius:70/70rem ;
					outline: none;
					font-size: 40/70rem;
					background: #fff;
					color: #f55b50;	
				}
			}
		}
		
		.DataPage-brand{
			margin-top: 20/70rem;
			margin-bottom: 30/70rem;
			border-bottom: 1px solid #ccc;
			padding: 5/70rem 20/70rem;
			position: relative;
			img{
				width: 200/70rem;
				height: 150/70rem;
				border: 1px solid #ccc;
				border-radius:40/70rem ;
			}
			span{
				position: absolute;
				top: 20%;
				left: 35%;
				font-size:30/70rem ;
			}
			.authorization{
				top: 50%;
				left: 34%;
				width: 70/70rem;
				height: 50/70rem;
				line-height: 50/70rem;
				text-align: center;
				background: red;
				color: #fff;
			}
			.brand{
				position: absolute;
				top: 29%;
				left: 68%;
				color: #fff;
				background: #ff6e5e;
				width:200/70rem;
				height:70/70rem;
				text-align: center;
				line-height: 70/70rem;
				outline: none;
				border-radius:30/70rem ;
			}
		}
		.DataPage-img{
			width: 100%;
			img{
				width: 100%;
			}
		}
		.DataPage-bottom{
			width: 100%;
			border-top: 1px solid gainsboro;
			position: fixed;
			bottom: 0;
			background: white;
			z-index: 99;
			.TabbarItem{
				width: 20%;
			}
			.bottom-item1{
				right: 32%;
				font-size: 30/70rem;
				position: absolute;
				top: 20%;
				display: inline-block;
				width: 200/70rem;
				height: 70/70rem;
				text-align: center;
				line-height: 70/70rem;
				color: #fff;
				background:#ffcf3e;
				border-radius:30/70rem 0rem 0rem 30/70rem;
			}
			.bottom-item2{
				font-size: 30/70rem;
				position: absolute;
				top: 20%;
				left: 68%;
				display: inline-block;
				width: 200/70rem;
				height: 70/70rem;
				text-align: center;
				line-height: 70/70rem;
				color: #fff;
				background:#ff6353;
				border-radius:0rem 30/70rem 30/70rem 0rem;
			}
		}
		
	}
</style>