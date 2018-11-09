<template>
	<div class="DataPage">
		<PageHead txt="详情页" class="white">
			<router-link to="/ClassifyInner" slot="icon">
				<i class="fl iconfont icon-jiantou11"></i>				
			</router-link>
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
			<div class="service-voucher" @click="Loginvoucher()">
				<label>领劵</label>
				<span>满1499减410</span>
				<span>满1299减330</span>
				<span>满999减260</span>
				<i class="fr iconfont icon-jiantou1"></i>
			</div>
			<mt-popup style="width:100%; height:70%;" v-model="voucher" position="bottom" popup-transition="popup-slide">
				<div class="bot-title">
					<span>优惠券</span>					
				</div>
				<div class="contents">
					<div class="coupon-item">
						<div class="couponPrice">
							<span class="couponPFlag">￥</span>
							<span>410</span>
						</div>
						<div class="couponInfo">
	                        <p class="name"><span>黑卡1499减410</span></p>
	                        <p class="range">订单满1499.00元可用</p>
	                        <p class="range">使用期限2018.11.11—2018.11.11</p>
	                        <span class="double-icon">翻倍券</span>
	                    </div>
	                    <div class="receiveBtn" dataid="QB7">立即领取</div>
					</div>
				</div>
				<div class="contents">
					<div class="coupon-item">
						<div class="couponPrice">
							<span class="couponPFlag">￥</span>
							<span>330</span>
						</div>
						<div class="couponInfo">
	                        <p class="name"><span>黑卡1299减330</span></p>
	                        <p class="range">订单满1299.00元可用</p>
	                        <p class="range">使用期限2018.11.11—2018.11.11</p>
	                        <span class="double-icon">翻倍券</span>
	                    </div>
	                    <div class="receiveBtn" dataid="QB7">立即领取</div>
					</div>
				</div>
				<div class="contents">
					<div class="coupon-item">
						<div class="couponPrice">
							<span class="couponPFlag">￥</span>
							<span>260</span>
						</div>
						<div class="couponInfo">
	                        <p class="name"><span>黑卡999减260</span></p>
	                        <p class="range">订单满999.00元可用</p>
	                        <p class="range">使用期限2018.11.11—2018.11.11</p>
	                        <span class="double-icon">翻倍券</span>
	                    </div>
	                    <div class="receiveBtn" dataid="QB7">立即领取</div>
					</div>
				</div>
				
				<div class="bottom">
					<a href="#" class="bottom-item" @click="Loginvouchers()">我知道了</a>
				</div>
			</mt-popup>
			
			<div class="service-service" @click="Loginservice()">
				<label>服务</label>
				<span>正品保证</span>
				<span>25省满99元免运费</span>
				<span>7天无忧退换</span>
				<i class="fr iconfont icon-jiantou1"></i>
			</div>
			<mt-popup style="width:100%; height:70%;" v-model="service" position="bottom" popup-transition="popup-slide">
				<div class="bot-title">
					<span>服务说明</span>					
				</div>
				<div class="contents">
					<div class="coupon-item">
						<div class="couponPrice">
							<img src="../../assets/images/brand7.jpg"/>
						</div>
						<div class="couponInfo">
	                        <p class="name"><span>正品保证</span></p>
	                        <p class="range">全场正品 假一罚十</p>
	                  </div>
					</div>
				</div>
				<div class="contents">
					<div class="coupon-item">
						<div class="couponPrice">
							<img src="../../assets/images/brand7.jpg"/>
						</div>
						<div class="couponInfo">
	                        <p class="name"><span>25省满99元免运费</span></p>
	                        <p class="range">25省满99元免运费 （甘青蒙藏宁新除外）</p>
	                  </div>
					</div>
				</div>
				<div class="contents">
					<div class="coupon-item">
						<div class="couponPrice">
							<img src="../../assets/images/brand7.jpg"/>
						</div>
						<div class="couponInfo">
	                        <p class="name"><span>7天无忧退换</span></p>
	                         <p class="range">7天无忧退换</p>
	                  </div>
					</div>
				</div>
				
				<div class="bottom">
					<a href="#" class="bottom-item" @click="Loginservices()">知道了</a>
				</div>
			</mt-popup>
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
					<i class="iconfont icon-vip-v1-copy"></i>
					<div class="star"></div>
					<div class="stars">
						<img src="../../assets/images/star.png"/>
					</div>
					<p>由于寄养在我家的可乐宝贝很爱吃我家欢仔的皇家小奶糕，所以可乐妈也就麻烦我替她代卖</p>
					<div class="image">
						<img class="fl" src="../../assets/images/Dog1.jpg"/>
						<img class="fl" src="../../assets/images/Dog2.jpg"/>
						<img class="fl" src="../../assets/images/Dog2.jpg"/>
					</div>
				</div>
			</div>
			
			<div class="Evaluation-item clearfix">
				<div class="item-top clearfix">
					<img class="imgs" src="../../assets/images/classMsg1.jpg" />
					<span>当时</span>
					<i class="iconfont icon-vip-v2-copy"></i>
					<div class="star"></div>
					<div class="stars">
						<img src="../../assets/images/star.png"/>
					</div>
					<p>超级喜欢这狗粮的，狗狗很喜欢很喜欢吃呢。怎么吃也吃不腻</p>
					<div class="image">
						<img class="fl" src="../../assets/images/Dog3.jpg"/>
					</div>
				</div>
			</div>
			
			<div class="Evaluation-item clearfix">
				<div class="item-top clearfix">
					<img class="imgs" src="../../assets/images/banner2.jpg" />
					<span>舒服舒服</span>
					<i class="iconfont icon-vip-v3-copy"></i>
					<div class="star"></div>
					<div class="stars">
						<img src="../../assets/images/star.png"/>
					</div>
					<p>狗狗很喜欢很喜欢吃呢，我家宝贝爱吃很好买几次还会买不过最好再便宜些  </p>
					<div class="image clearfix">
						<img class="fl" src="../../assets/images/Dog4.jpg"/>
						<img class="fl" src="../../assets/images/Dog5.jpg"/>
						<img class="fl" src="../../assets/images/Dog5.jpg"/>
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
			<TabbarItem txt="首页" mark="home" >
				<i class="iconfont icon-shouye"></i>
			</TabbarItem>
			<TabbarItem txt="购物车" mark="shoppingTrolley">
				<i class="iconfont icon-gouwuche"></i>
			</TabbarItem>
			<span class="bottom-item1" @click="Loginitems()">立即购买</span>
			<span class="bottom-item2" @click="Loginitems()">加入购物车</span>
			<mt-popup style="width:100%; height:40%;" v-model="item" position="bottom" popup-transition="popup-slide">
				<div class="imgbox">
					<img src="/static/img/banner-slide4.3d829c4.png">
					<i class="f45 iconfont icon-552cd445ad39f">{{price}}</i>
					<span>库存7885件</span>
				</div>
				<div class="bottom-detail">
					<span>购买数量</span>
					<span class="reduce_num"></span>
					<span class="num">1</span>
					<span class="add_num"></span>
				</div>
				<div class="bottom">
					<a href="#" class="bottom-item" @click="Loginitem()">确定</a>
				</div>
			</mt-popup>
		</div>
	</div>
</template>

<script>
	//	引入Tabbar-item组件
	import TabbarItem from "@/components/TabbarItem";
	//引入PageHead
	import PageHead from "@/components/PageHead";
	//	引入banner轮播图组件
	import Banner from "@/components/Banner";
	//	引入Popup弹出组件
	import { Popup } from 'mint-ui';
	export default {
		components: {
			PageHead,
			Banner,
			TabbarItem
		},
		created(){
			this.$emit("tabbarshow",false)
		},
		data(){
			return{
				voucher:false,
				service:false,
				item:false,
				price: 120,
				count: 1,
			}
		},
		methods:{
			Loginvoucher(){
				this.voucher=true
			},
			Loginvouchers(){
				this.voucher=false
			},
			Loginservice(){
				this.service=true
			},
			Loginservices(){
				this.service=false
			},
			Loginitems(){
				this.item=true
			},
			Loginitem(){
				this.item=false
			}
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
				p{
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
				padding: -10/70rem 0;
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
			.bot-title{
				text-align: center;
			    padding: 30/70rem 35/70rem;
			    font-size:30/70rem;
			    position: relative;
			    span{
			    	background: #fff;
    				padding: 0 15/70rem;
			    }
			}
			.contents{
			    position: relative;
			    max-height: 400/70rem;
			    overflow: hidden;
			    .coupon-item{
			    	height: 150/70rem;
			    	background-color: #fff;
				    margin: 15/70rem 20/70rem;
				    border: 1px solid #dedede;
				    position: relative;
				    color: #666;
				    display: flex;
				    align-items: center;
				    .couponPrice{
				    	font-size: 60/70rem;
					    margin-right: 70/70rem;
					    color: #f55b50;
					    display: flex;
					    align-items: flex-start;
					    width: 17%;
					   	img{
					   		width: 120/70rem;
					   		height: 90/70rem;
					   	}
				    }
				    .couponInfo{
				    	flex: 1;
				    	font-size:20/70rem ;
				    	.name{
				    		font-size:30/70rem ;
				    		margin-bottom: 10/70rem;
				    	}
				    	.double-icon{
				    		width: 100/70rem;
						    height: 40/70rem;
						    background: url(../../assets/images/logo1.png);
						    background-size: 100% 100%;
						    position: absolute;
						    right: 5%;
						    top: -10/70rem;
						    color: #fff;
						    font-size: 25/70rem;
						    line-height:40/70rem;
						    text-align: center;
				    	}
				    }
				    .receiveBtn{
				    	width: 160/70rem;
					    height: 60/70rem;
					    line-height: 60/70rem;
					    text-align: center;
					    display: inline-block;
					    color: #fff;
					    border-radius: 50/70rem;
					    background: #f55b50;
					    font-size: 30/70rem;
				    }
			    }
			}
			.bottom{
			    position: fixed;
			    left: 5%;
			    bottom: 0%;
			    width: 90%;
			    height: 90/70rem;
			    line-height: 90/70rem;
			    text-align: center;
			    display: flex;
			    margin-bottom: 10/70rem;
			    .bottom-item{
			    	display: block;
				    width: 100%;
				    background: #ff5e32;
				    border-radius: 100/70rem;
				    color: #fff;
				    font-size: 40/70rem;
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
					padding: -10/70rem 10/70rem;
				}
			}
			.Evaluation-item{
				margin-top:50/70rem;
				position: relative;
				width: 100%;
				.item-top{
					position:relative;
					.imgs{
						width: 60/70rem;
						height: 60/70rem;
						border-radius:50%;	
					}
					span{
						width: 115/70rem;
						font-size:30/70rem ;
						color: #566da4;
						position: absolute;
						top: 15/70rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-left: 5/70rem;
					}
					.iconfont{
						width: 70/70rem;
						height: 40/70rem;
						line-height: 40/70rem;
						font-size: 30/70rem;
						text-align: center;
						border: 2/70rem solid #ccc;
						border-radius:30/70rem;
						position: absolute;
						top: 15/70rem;
						left: 180/70rem;
					}
					p{
						margin-top: 10/70rem;
						line-height: 60/70rem;
						font-size:25/70rem;
					}
					/*星星定位*/
					.star,.stars{
						width:210/70rem;
						height: 33/70rem;	
						position: absolute;
						left: 68%;	
						top: 20/70rem;
					}
					.star{
						background-image: url(../../assets/images/stars.png);
						background-size: 210/70rem;
					}
					.stars{
						overflow: hidden;
						width: 195/70rem;
						img{
							width:210/70rem;
							height: 33/70rem;
							position: absolute;
							left: 0;
							top: 0;
						}
					}
					.image{
						width: 100%;
						img{
							width: 31.5%;
							height: 210/70rem;
							margin:5/70rem 6/70rem 0;
							border-radius: 25/70rem;
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
				position: relative;
				top: 30/70rem;
				left: 30/70rem;
				img{
					width: 50%;
				}
				i{
					position: absolute;
					top:20/70rem;
					left: 210/70rem;
					font-size:30/70rem ;
				}
				span{
					width: 150/70rem;
					position: absolute;
					top:65/70rem;
					left: 190/70rem;
					font-size:20/70rem;
					color: #999;
				}
			}
			.bottom-detail{
				position: relative;
				border-top:1px solid #ccc ;
				border-bottom: 1px solid #ccc;
				margin-top: 40/70rem;
				width: 90%;
				left: 5%;
				height: 70/70rem;
				line-height: 70/70rem;
				font-size: 30/70rem;
				span{
					width: 120/70rem;
				    float: left;
				    font-size: 30/70rem;
				}
				.reduce_num{
					position: absolute;
					left: 70%;
					top: 20%;
					width: 50/70rem;
					height: 50/70rem;
					background: url(../../assets/images/Datapage1.png) no-repeat;
					background-size: 1.5em;
				}
				.num{
					position: absolute;
					left: 82%;
				}
				.add_num{
					position: absolute;
					left: 90%;
					top: 20%;
					width: 50/70rem;
					height: 50/70rem;
					background: url(../../assets/images/Data.png) no-repeat;
					background-size: 1.5em;
				}
			}
			.bottom{
			    position: fixed;
			    left: 5%;
			    bottom: 0%;
			    width: 90%;
			    height: 90/70rem;
			    line-height: 90/70rem;
			    text-align: center;
			    display: flex;
			    margin-bottom: 10/70rem;
			    .bottom-item{
			    	display: block;
				    width: 100%;
				    background: #ff5e32;
				    border-radius: 100/70rem;
				    color: #fff;
				    font-size: 40/70rem;
			    }
			}
		}
		
	}
</style>