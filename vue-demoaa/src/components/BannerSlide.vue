<template>
	<div class="BannerSlideWrap">
		<div class="swiper-container swiper2">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div :class="{'swiper-pagination':paginationShow}"></div>
		</div>
	</div>
</template>

<script>
	//引入swiper插件
	import "../assets/lib/js/swiper.js"
	export default {
		props:{
			paginationShow:{
				type:Boolean,
				default:true
			},
			autoplay:{
				type:Number,
				default:3000
			},
//			loop:{
//				type:Boolean,
//				default:true
//			},
			paginationType:{
				type:String,
				default:"bullets"
			},
			effect:{
				type:String,
				default:"slide"
			},
			slidesPerView:{
				type:Number,
				default:3
			},
			spaceBetween:{
				type:Number,
				default:20
			}
		},
		mounted(){
			new Swiper(".swiper2",{
//				loop:this.loop,
				autoplay:this.autoplay,
				autoplayDisableOnInteraction:false,//用户操作完轮播图之后，继续轮播
				paginationType:this.paginationType,
				effect:this.effect,
				slidesPerView:this.slidesPerView,
				spaceBetween:this.spaceBetween,
			});
		}
	}
</script>

<style>
	/*引入swiper样式*/
	@import "../assets/lib/css/swiper.css"
	
	
</style>