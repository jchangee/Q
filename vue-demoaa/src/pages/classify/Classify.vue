<template>
	<div class="Classify">
		<Search txt="搜索内容"></Search>
		<!--导航分类-->
		<Navbar>
			<mt-tab-item id="1" slot="mt-tab-item">狗狗</mt-tab-item>
			<mt-tab-container-item id="1" slot="mt-tab-container-item">
				<div class="tab2">
					<Navbar2>
						<mt-tab-item id="1" slot="mt-tab-item">干粮系列</mt-tab-item>
						<mt-tab-container-item id="1" slot="mt-tab-container-item">
							<TabbarItem txt="罐头湿粮" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide1.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="肉类零食" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide2.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="磨牙洁齿" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide3.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="奶酪饼干" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide4.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="罐头湿粮" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide2.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="罐头湿粮" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide1.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="罐头湿粮" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide3.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="罐头湿粮" mark="ClassifyInner">
								<img src="../../assets/images/banner-slide4.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="全部" mark="ClassifyInner"></TabbarItem>
						</mt-tab-container-item>
						<mt-tab-item id="20" slot="mt-tab-item">医疗系列</mt-tab-item>
						<mt-tab-container-item id="20" slot="mt-tab-container-item">
							<TabbarItem txt="洗漱刷子" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare1.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="驱虫饼干" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare2.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="消毒护理" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare3.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="消毒喷雾" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare4.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="驱虫点滴" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare5.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="外伤膏药" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare6.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="柔顺洗毛" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare7.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="消毒护理" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare3.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="驱虫点滴" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare5.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="驱虫饼干" mark="ClassifyInner">
								<img src="../../assets/images/Dogcare2.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="全部" mark="ClassifyInner"></TabbarItem>
						</mt-tab-container-item>
						<mt-tab-item id="30" slot="mt-tab-item">生活日用</mt-tab-item>
						<mt-tab-container-item id="30" slot="mt-tab-container-item">
							<TabbarItem txt="护洗浴巾" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-1.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="毛毛玩具" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-2.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="浴缸漂浮" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-5.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="牵头细绳" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-9.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="牵头细绳" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-5.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="饮水罐子" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-6.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="扒拉小鱼" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-10.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="搓澡刮毛" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-8.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="牵头细绳" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-9.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="护洗浴巾" mark="ClassifyInner">
								<img src="../../assets/images/dog-toy-1.jpg" alt="" />
							</TabbarItem>
							<TabbarItem txt="全部" mark="ClassifyInner"></TabbarItem>
						</mt-tab-container-item>
						<mt-tab-item id="40" slot="mt-tab-item">狗狗玩具</mt-tab-item>
						<mt-tab-container-item id="40" slot="mt-tab-container-item">
							<TabbarItem txt="咬咬小球" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy1.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="小样娃娃" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy2.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="咬咬小球" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy3.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="奶酪饼干" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy4.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="咬咬小球" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy5.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="毛绒玩具" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy6.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="小样娃娃" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy7.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="奶酪饼干" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy4.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="咬咬小球" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy1.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="咬咬小球" mark="ClassifyInner">
								<img src="../../assets/images/Dogtoy3.png" alt="" />
							</TabbarItem>
							<TabbarItem txt="全部" mark="ClassifyInner"></TabbarItem>
						</mt-tab-container-item>
					</Navbar2>
				</div>
			</mt-tab-container-item>
			<mt-tab-item id="2" slot="mt-tab-item">品牌</mt-tab-item>
			<mt-tab-container-item id="2" slot="mt-tab-container-item">
				<div class="brond">
					<TabbarItem txt="julius K9" mark="ClassifyInner">
						<img src="../../assets/images/brand1.jpg" alt="" />
					</TabbarItem>
					<TabbarItem txt="末卡" mark="ClassifyInner">
						<img src="../../assets/images/brand2.jpg" alt="" />
					</TabbarItem>
					<TabbarItem txt="小佩" mark="ClassifyInner">
						<img src="../../assets/images/brand3.jpg" alt="" />
					</TabbarItem>
					<TabbarItem txt="CatS" mark="ClassifyInner">
						<img src="../../assets/images/brand4.jpg" alt="" />
					</TabbarItem>
					<TabbarItem txt="Pidan" mark="ClassifyInner">
						<img src="../../assets/images/brand5.jpg" alt="" />
					</TabbarItem>
					<TabbarItem txt="俊宝" mark="ClassifyInner">
						<img src="../../assets/images/brand6.jpg" alt="" />
					</TabbarItem>
					<TabbarItem txt="全部" mark="ClassifyInner"></TabbarItem>
				</div>
			</mt-tab-container-item>
		</Navbar>
	</div>
</template>

<script>
	import Navbar from '@/components/navbar'
	import Navbar2 from '@/components/navbar'
	//	引入search组件
	import Search from "@/components/Search"
	//	引入Tabbar-item组件
	import TabbarItem from "@/components/TabbarItem"
	export default {
		components:{
//			注册search组件
			Search,
			Navbar,
			Navbar2,
			TabbarItem
		}
	}
</script>

<style lang="less">
	.nav-list{
		display: flex;
		border: 1px solid gray;
		border-right: none;
		border-left: none;
		height: 70/60rem;
		line-height:70/60rem;
	}
	.nav-list span{
		flex: 1;
		text-align: center;
		font-size: 25/60rem;
	}
	.nav-list span>a{
		display: block;
		height: 70/60rem;
		line-height:70/60rem;
	}
	.active>a{
		font-weight: bold;
		color:red!important;
		border-bottom: 2px solid green;
	}
	
	/*二级选项卡的样式*/
	.mint-navbar .mint-tab-item.is-selected{
		margin-bottom: 0;
	}
	.mint-tab-item-label{
		font-size: 35/70rem;
	}
	.tab2{
		margin-bottom: 100/70rem;
		.mint-tab-item-label{
			font-size: 30/70rem;
		}
		.TabbarItem{
			width:33.3%;
			height:300/70rem;
			text-align:center;
			img{
				width:55%;
				height: 60%;
				margin: 30/70rem 0 10/70rem 0;
			}	
			&:last-of-type{
				span{
					display: inline-block;
					width: 52%;
					height: 40%;
					line-height: 120/70rem;
					border: 2/70rem solid gray;
					border-radius: 50%;
					margin-top: 50/70rem;
				}
			}			
		}
	}
	/*品牌的选项卡*/
	.brond{
		.mint-tab-item-label{
			font-size: 30/70rem;
		}
		.TabbarItem{
			width:50%;
			height:300/70rem;
			text-align:center;
			img{
				width:55%;
				height: 60%;
				margin: 30/70rem 0 10/70rem 0;
				border-radius: 20/70rem;
			}	
			&:last-of-type{
				margin-bottom: 150/70rem;
				width: 100%;
				height: 100/70rem;
				span{
					display: inline-block;
					width: 80%;
					height: 80/70rem;
					line-height: 80/70rem;
					border: 2/70rem solid gray;
					border-radius: 70/70rem;
					margin-top: -50/70rem;
					background:#eceff6;
				}
			}			
		}
	}
</style>