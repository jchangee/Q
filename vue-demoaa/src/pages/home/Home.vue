<template>
	<div class="Home">
		<!--搜索框-->
		<Search txt="伯纳天纯"></Search>
		<!--轮播图-->
		<Banner :paginationShow="true" :autoplay="5000" paginationPosition="right">
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/banner1.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/banner2.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/banner3.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/banner4.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/banner5.jpg" alt="" />
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<img src="../../assets/images/banner6.jpg" alt="" />
			</div>
		</Banner>
		<!--分类开始-->
		<div class="classMsg">
			<div>
				<img src="../../assets/images/classMsg1.jpg" alt="" /><br />
				<span>新品尝鲜</span>
			</div>
			<div>
				<img src="../../assets/images/classMsg5.jpg" alt="" /><br />
				<span>领券中心</span>
			</div>
			<div>
				<img src="../../assets/images/classMsg3.jpg" alt="" /><br />
				<span>Q宠国际</span>
			</div>
			<div>
				<img src="../../assets/images/classMsg4.jpg" alt="" /><br />
				<span>聚品牌</span>
			</div>
			<div>
				<img src="../../assets/images/classMsg5.jpg" alt="" /><br />
				<span>神奇卡</span>
			</div>
			<p><img src="../../assets/images/benefit.jpg" alt="" /></p>
		</div>
		<!--引用title组件-->
		<Title>
			<p>- - 购实惠 - -</p>
		</Title>
		<div class="seckill">
			<div class="seckill-top">
				今日秒杀
				<i class="iconfont icon-jiantou1 fr"></i>				
			</div>
		</div>
		<!--滑动轮播开始-->
		<BannerSlide :paginationShow="true" :autoplay="5000" >
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide1.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
				<div class="imgwrap">
					<img src="../../assets/images/banner-slide2.png" alt="" />					
				</div>
				<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
				<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide3.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide4.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide5.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap seeMore">
						<p>查看更多<br />SEE MORE</p>				
					</div>
				</router-link>
			</div>
		</BannerSlide>
		<div class="imgBox">
			<img src="../../assets/images/exclusive.jpg"/>
			<img class="fl" src="../../assets/images/exclusive2.jpg"/>
			<img src="../../assets/images/exclusive3.jpg"/>
		</div>
		<!--引用title组件-->
		<Title>
			<p>- - 会员特权 - -</p>
		</Title>
		<div class="member">
			<img src="../../assets/images/微信图片_20181023195626_02.jpg"/>
		</div>
		<BannerSlide :paginationShow="true" :autoplay="5000" >
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide6.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
				<div class="imgwrap">
					<img src="../../assets/images/banner-slide7.png" alt="" />					
				</div>
				<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
				<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide8.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide9.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide10.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap seeMore">
						<p>查看更多<br />SEE MORE</p>				
					</div>
				</router-link>
			</div>
		</BannerSlide>
		<div class="one">
			<img src="../../assets/images/1yuan.jpg"/>
		</div>
		<!--引用title组件-->
		<Title>
			<p>- - 推荐榜单 - -</p>
		</Title>
		<div class="recommend">
			<img src="../../assets/images/newProduct.jpg"/>
		</div>
		<BannerSlide :paginationShow="true" :autoplay="5000" >
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide11.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
				<div class="imgwrap">
					<img src="../../assets/images/banner-slide12.png" alt="" />					
				</div>
				<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
				<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide13.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide14.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide15.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap seeMore">
						<p>查看更多<br />SEE MORE</p>				
					</div>
				</router-link>
			</div>
		</BannerSlide>
		<!--好货榜单-->
		<div class="goodStuff">
			<img src="../../assets/images/goodStuff.jpg"/>
		</div>
		<BannerSlide :paginationShow="true" :autoplay="5000" >
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide5.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
				<div class="imgwrap">
					<img src="../../assets/images/banner-slide4.png" alt="" />					
				</div>
				<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
				<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide2.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide1.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide5.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap seeMore">
						<p>查看更多<br />SEE MORE</p>				
					</div>
				</router-link>
			</div>
		</BannerSlide>
		<div class="hotSell">
			<img src="../../assets/images/hotSell.jpg"/>
		</div>
		<BannerSlide :paginationShow="true" :autoplay="5000" >
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide1.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
				<div class="imgwrap">
					<img src="../../assets/images/banner-slide2.png" alt="" />					
				</div>
				<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
				<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide3.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide4.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap">
						<img src="../../assets/images/banner-slide5.png" alt="" />					
					</div>
					<p class="priceMsg">法国皇家狗粮Royall 超值抢购 </p>
					<p class="price">￥24.5 <span class="fr">￥54.5</span></p>
				</router-link>
			</div>
			<div class="swiper-slide" slot="swiper-con">
				<router-link to="/dataPage">
					<div class="imgwrap seeMore">
						<p>查看更多<br />SEE MORE</p>				
					</div>
				</router-link>
			</div>
		</BannerSlide>
		<!--引用title组件-->
		<Title>
			<p>- - 发现大牌 - -</p>
		</Title>
		<div class="brand">
			<img src="../../assets/images/brand.jpg"/>
			<ul class=" clearfix">
				<li>
					<p>julius K9</p>
					<router-link to="/">
						<img src="../../assets/images/brand1.jpg"/>
					</router-link>
				</li>
				<li>
					<p>末卡</p>
					<router-link to="/">
						<img src="../../assets/images/brand2.jpg"/>
					</router-link>
				</li>
				<li>
					<p>小佩</p>
					<router-link to="/">
						<img src="../../assets/images/brand3.jpg"/>
					</router-link>
				</li>
				<li>
					<p>CatS</p>
					<router-link to="/">
						<img src="../../assets/images/brand4.jpg"/>
					</router-link>
				</li>
				<li>
					<p>Pidan</p>
					<router-link to="/">
						<img src="../../assets/images/brand5.jpg"/>
					</router-link>
				</li>
				<li>
					<p>俊宝</p>
					<router-link to="/">
						<img src="../../assets/images/brand6.jpg"/>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
//	引入search组件
	import Search from "@/components/Search"
//	引入banner轮播图组件
	import Banner from "@/components/Banner"
//	引用title组件
	import Title from "@/components/Title"
//	引入BannerSlide轮播图组件
	import BannerSlide from "@/components/BannerSlide"
	export default {
		components:{
//			注册search组件
			Search,
			Banner,
			Title,
			BannerSlide
		}
	}
</script>

<style lang="less">
	/*轮播图的样式*/
	.BannerWrap{
		font-size: 25/60rem;
		img{
			width: 100%;
		}
	}
	
	/*分类开始*/

	.classMsg {
		div{
			width: 20%;
			float: left;
			padding: 5/60rem;
			box-sizing: border-box;
			overflow: hidden;
			text-align: center;
			font-size: 20/60rem;
			color: gray;
		}
		img{
			width: 100%;
			height: 100%;
		}
	}
	/*购实惠*/
	.seckill-top{
		height: 70/60rem;
		line-height: 70/60rem;
		padding: 0 20/60rem;
		font-size: 30/60rem;
	}
	
	
	/*轮播图的样式*/
	.BannerSlideWrap {
		img{
			height: 95%;
		}
		.swiper-slide{
			height: 190/60rem;
			padding: 0 20/60rem;
			box-sizing: border-box;
			position: relative;
			.imgwrap{
				width: 100%;
				height: 120/60rem;
				text-align: center;
				overflow: hidden;
			}
			p{
				font-size: 20/60rem;
				color: #242633;
			}
			.priceMsg{
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.price{
				color: red;
				span{
					color: gray;
					text-decoration: line-through;
					font-size: 16/60rem;
				}
			}
			.seeMore{
				height: 190/60rem;
				background: #eceff6;
				display: flex;
				align-items: center;
				justify-content: center;
				p{
					vertical-align: middle;
				}
			}
		}
	}
	/*购实惠下面的三张图*/
	.imgBox{
		text-align: center;
		img{
			width: 50%;
			&:first-of-type{
				width: 99%;
			}
		}
	}
	/*今日秒杀*/
	.seckill-top{
		i{
			font-size: 30/70rem;
		}
	}
	/*会员特权*/
	.member{
		margin-bottom: 10/60rem;
		img{
			width: 100%;
		}
	}
	/*一元开抢*/
	.one{
		img{
			width: 100%;
		}
	}
	/*推荐榜单*/
	.recommend{
		img{
			width: 100%;
		}
	}
	/*好货榜单*/
	.goodStuff{
		img{
			width: 100%;
		}
	}
	/*热销榜单*/
	.hotSell{
		img{
			width: 100%;
		}
	}
	/*发现大牌开始*/
	.brand{
		margin-bottom: 100/60rem;
		img{
			width: 100%;
		}
		ul{
			li{
				text-align: center;
				background: #eceff6;
				list-style: none;
				float: left;
				width: 33%;
				margin: 0 0 2/60rem 2/60rem;
				box-sizing: border-box;
				font-size: 25/60rem;
				p{
					margin-top: 10/60rem;
				}
				img{
					width: 80%;
				}
			}
		}
	}
</style>