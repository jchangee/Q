<template>
	<div class="register">
		<PageHead txt="新用户注册">
			<router-link to="/Mine" slot="icon">				
				<i class="fl iconfont icon-jiantou11"></i>
			</router-link>
		</PageHead>
		<div class="login-input">
			<input class="phone" type="text" placeholder="请输入昵称"/>
			<input class="phone" type="text" placeholder="输入手机号"/>
			<input class="phone" type="text" placeholder="设置密码"/>
			<input class="phone" type="text" placeholder="请确认密码"/>
			<input class="message" type="text" placeholder="输入短信验证码"/>
			<span class="verification-code">获取验证码</span>
			<router-link to="/Login">
				<span class="registers fr">用户登录</span>
			</router-link>
			<input :class="register" type="submit" value="注册" @click=""/>
		</div>
	</div>
</template>

<script>
	//引入PageHead
	import PageHead from "@/components/PageHead"
	//注册PageHead组件
	export default{
			components:{
				PageHead
			},
			data(){
				return {
					register:"register",
				}
			},
		}
</script>

<style lang="less">
	.login-input{
		width: 95%;
		margin: 0 auto;
		margin-top: 75/70rem;
		margin-bottom: 200/70rem;
		.phone{
			position: relative;
		}
		.verification-code{
			position: absolute;
			top:665/70rem;
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
		.register{
			margin-top: 30/70rem;
			border-radius:80/70rem ;
			color: #444040;
			font-size:35/70rem ;
		}
		.register2{
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
</style>