 <template>
	<div class="DataPage">
		<PageHead txt="详情页" class="white">
			<i slot="icon" class="fl iconfont icon-jiantou11"></i>
		</PageHead>
		<!--轮播图-->
		<Banner class="DataPage-sowingMap white" :paginationShow="true" :autoplay="5000" paginationPosition="right" paginationType = 'fraction'>
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
			
		</div>
		
	</div>
</template>

<script>
	//引入PageHead
	import PageHead from "@/components/PageHead"
	//	引入banner轮播图组件
	import Banner from "@/components/Banner"
		//注册PageHead组件
		export default{
			components:{
				PageHead,
				Banner
			}
		}
</script>

<style lang="less">
	.white{
		background: #fff;
	}
	.f45{
		font-size:45/70rem ;
		color: red;
	}
	.f20{
		font-size: 20/70rem;
		color: #999;
		text-decoration: line-through;
	}
	.f30{
		font-size: 30/70rem;
	}
	.f35{
		font-size: 35/70rem;
	}
	.DataPage{
		background:#f5f5f9;
		margin-bottom: 100/70rem;
		.DataPage-sowingMap{
			box-sizing: border-box;
			width: 100%;
			height: 600/70rem;
			border-bottom: 1px solid #ccc;
			img{
				height: 540/70rem;
				padding:20/70rem 0;
			}
			.swiper-pagination{
				width: 93/70rem;
				height: 50/70rem;
				line-height: 50/70rem;
				border: 1px solid #ccc;
				background: #ccc;
				border-radius:28/70rem;
				margin-left:80%;	
				color: #fff;
			}
		}
		.DataPage-content{
			/*width: 95%;
			height: 330/70rem;*/
			padding: 20/70rem 20/70rem;
			.content-icon{
				padding:20/70rem 0;
				span{
					font-size:20/70rem;
				}
			}
			.content-innertext{
				width: 100%;
				display: inline-block;
				height: 50/70rem;
				line-height: 50/70rem;
				h6{
					display: inline-block;
					width: 90%;
					font-size:30/70rem;
				}
				p{
					font-size:20/70rem ;
					color:#999;
				}
			}
			.content-bottom{
				width: 100%;
				height: 50/70rem;
				line-height: 50/70rem;
				p{
					display: inline-block;
					width: 70%;
					color:#999;
					font-size:20/70rem ;
				}
				span{
					color:#999;
					font-size:20/70rem ;
				}
				.iconfont{
					color: red;	
				}
			}
		}
		.DataPage-service{
			width: 100%;
			height: 170/70rem;
			padding: 20/70rem 20/70rem;
			margin-top: 20/70rem;
			box-sizing: border-box;
		}
	}
</style>