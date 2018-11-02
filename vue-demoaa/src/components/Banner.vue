<template>
	<div class="BannerWrap">
		<div class="swiper-container swiper1">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div :style="{'text-align':paginationPositon}" :class="{'swiper-pagination':paginationShow}"></div>
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
			paginationPositon:{
				type:String,
				default:"center"
			},
			autoplay:{
				type:Number,
				default:3000
			},
			loop:{
				type:Boolean,
				default:true
			},
			paginationType:{
				type:String,
				default:"bullets"
			},
			effect:{
				type:String,
				default:"slide"
			}
		},
		mounted(){
			new Swiper(".swiper1",{
				loop:this.loop,
				pagination:".swiper-pagination",
				autoplay:this.autoplay,
				autoplayDisableOnInteraction:false,//用户操作完轮播图之后，继续轮播
				paginationType:this.paginationType,
				effect:this.effect
			});
		}
	}
</script>

<style >
	/*引入swiper样式*/
	@import "../assets/lib/css/swiper.css"
	
</style>