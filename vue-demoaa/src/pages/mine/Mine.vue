<template>
	<div class="Mine">
		<!--个人中心头部开始-->
		<div class="mine-top">
			<Title>
				<p>个人中心</p>
			</Title>
			<img src="../../assets/images/classMsg3.jpg"/>
			<router-link to="/login" class="loginBtn">点击登录/注册</router-link>
			<div class="mine-list ">
				<TabbarItem txt="余额">
					<span>0</span>
				</TabbarItem>
				<TabbarItem txt="优惠券">
					<span>0</span>
				</TabbarItem>
				<TabbarItem txt="兑换">
					<span>0</span>
				</TabbarItem>
				<TabbarItem txt="红包">
					<span>0</span>
				</TabbarItem>
				<TabbarItem txt="Q宠豆">
					<span>0</span>
				</TabbarItem>
			</div>
			<div class="mine-logo">
				<i class="iconfont icon-v"></i>
				<router-link to="" class="logos ">Q宠商城</router-link>
				<router-link to="" class="privilege">点击查看特权</router-link>
			</div>
		</div>
		<!--个人中心头部结束-->
		
		<!--个人中心content开始-->
		<div class="mine-content">
			<TabbarItem txt="待支付">
				<i class="iconfont icon-daizhifu"></i>
			</TabbarItem>
			<TabbarItem txt="代收货">
				<i class="iconfont icon-tubiaolunkuo-"></i>
			</TabbarItem>
			<TabbarItem txt="待评价">
				<i class="iconfont icon-daipingjia01"></i>
			</TabbarItem>
			<TabbarItem txt="退款/售后">
				<i class="iconfont icon-tuikuanshouhou"></i>
			</TabbarItem>
			<TabbarItem txt="全部">
				<i class="iconfont icon-quanbu"></i>
			</TabbarItem>
			<TabbarItem txt="收藏">
				<i class="iconfont icon-shoucang"></i>
			</TabbarItem>
			<TabbarItem txt="消息">
				<i class="iconfont icon-xiaoxi"></i>
			</TabbarItem>
			<TabbarItem txt="客服">
				<i class="iconfont icon-kefu"></i>
			</TabbarItem>
			<TabbarItem txt="收货地址" mark="location">
				<i class="iconfont icon-shouhuodizhi"></i>
			</TabbarItem>
			<div class="mine-content-img">
				<img src="../../assets/images/1yuan.jpg"/>
			</div>
		</div>
		<!--个人中心content结束-->
	</div>
</template>

<script>
	//	引用title组件
	import Title from "@/components/Title"
	//	引入Tabbar-item组件
	import TabbarItem from "@/components/TabbarItem"
	export default {
		components:{
//			注册Title组件
			Title,
			TabbarItem
		}
	}
</script>

<style lang="less">
/*个人中心头部开始*/
.mine-top{
	width: 100%;
	height:460/70rem;
	background: #fb7b72;
	p{
		background: #fb7b72;
		color: #fff;
		font-size: 40/70rem;
		border-bottom: 1px solid #ccc;
	}
	img{
		border-radius:50% ;
		border: 2/70rem solid red;
		width: 120/70rem;
		height:120/70rem;
		float: left;
		margin: 30/70rem;
	}
	.loginBtn{
		color: #fff;
		font-size: 35/70rem;
		margin: 65/70rem 10/70rem;
		float: left;		
	}
	.mine-list{
		width: 100%;
		display: flex;
		flex:1 ;
		.TabbarItem{
			width: 25%;
			color: #fff;
			span{
				font-size:25/70rem ;
			}
		}
	}
	.mine-logo{
		width: 85%;
		height:71/70rem ;
		line-height:71/70rem ;
		background:#363636 ;
		color: #e8d1a3;
		margin: 0 auto;
		margin-top:7/70rem ;
		padding: 0 15/70rem;
		border-radius:20/70rem 20/70rem 0 0;
		font-size: 25/60rem;
		i{
			font-size: 30/70rem;
		}
		.logos{
			color: #e8d1a3;
		}
		.privilege{
			color: #e8d1a3;
			float: right;
		}
	}
}
/*个人中心头部结束*/

/*个人中心content开始*/
.mine-content{
	width: 100%;
	.TabbarItem{
		width: 20%;
		margin:20/70rem 0;
		i{
			color: mediumvioletred;
		}
		span{
			color: gray;
			font-size: 30/70rem;
		}
	}
	.mine-content-img{
		width: 100%;
		margin-bottom: 130/70rem;
		img{
			width: 100%;
		}
	}
}
/*个人中心content结束*/
</style>
