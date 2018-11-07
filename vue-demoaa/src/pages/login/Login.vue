<template>
	<div class="Login">
		<PageHead txt="用户登录">
			<router-link to="/Mine" slot="icon">				
				<i class="fl iconfont icon-jiantou11"></i>
			</router-link>
		</PageHead>
		<div class="login-input">
			<input class="phone" type="text" placeholder="输入手机号" v-model="phone"/>
			<span class="verification-codes">获取验证码</span>
			<input class="message" type="text" placeholder="输入短信验证码" v-model="message" @keyup="ChangeSub"/>
			<router-link to="/Register">
				<span class="registers fr">用户注册</span>
			</router-link>
			<input :class="signIn" type="submit" value="登录" @click="LoginIn()"/>
		</div>
		<!--头部滑出模块-->
		<mt-popup style="width:100%; height:10%;" v-model="popupVisible" position="top" popup-transition="popup-slide">
			<p class="login-ok">登录成功</p>
		</mt-popup>
	</div>
</template>

<script>
	//引入PageHead
	import PageHead from "@/components/PageHead"
	//	引入Popup弹出组件
	import { Popup } from 'mint-ui';
	//注册PageHead组件
		export default{
			components:{
				PageHead
			},
			data(){
				return {
					phone:"",
					message:"",
					signIn:"signIn",
					popupVisible:false,
				}
			},
			methods:{
//				判断短信验证码的值是否为空的时候改变登录按钮的样式
				ChangeSub(){
					if(this.message==""){						
						this.signIn="signIn"						
					}else{
						this.signIn="signIn2"
					}
				},
				LoginIn(){
//					点击登陆时判断message的值不为空的时候才会弹出登录成功的弹框
					if(this.message!==""){
						this.popupVisible = true
					}
				},
			}
		}
</script>

<style lang="less">
	.login-input{
		width: 95%;
		margin: 0 auto;
		margin-top: 75/70rem;
		.phone{
			position: relative;
		}
		.verification-codes{
			position: absolute;
			top:215/70rem;
			left: 75%;
			color: #ccc;
			font-size:25/70rem ;
		}
		.registers{
			font-size: 35/70rem;
			color: #ccc;
			height: 150/70rem;
			line-height: 150/70rem;
			margin-right: 50/70rem;
		}
		.signIn{
			margin-top: 30/70rem;
			border-radius:80/70rem ;
			color: #444040;
			font-size:35/70rem ;
		}
		.signIn2{
			margin-top: 30/70rem;
			border-radius:80/70rem ;
			color: #fff;
			font-size:35/70rem ;
			background: #089d1b;
		}
		input{
			width: 100%;
			height: 113/70rem;
			font-size: 35/70rem;
			outline: none;
			border: none;
			border-bottom: 1px solid #ccc;
			text-indent: 50/70rem;
		}
		
	}
	.mint-popup-top{
		background-color:white;
	}
	.login-ok{
		text-align: center;
		height: 120/70rem;
		line-height: 120/70rem;
		font-size: 40/70rem;
	}
</style>