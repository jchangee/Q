<template>
	<div class="Login">
		<PageHead txt="用户登录">
			<router-link to="/Mine" slot="icon">				
				<i class="fl iconfont icon-jiantou11"></i>
			</router-link>
		</PageHead>
		<div class="login-input">
			<input class="phone" type="text" placeholder="输入手机号" />
			<span class="verification-code">获取验证码</span>
			<input class="message" type="text" placeholder="输入短信验证码" />
			<span class="registers fr">用户注册</span>
			<input class="sign-in" type="submit" value="登录"/>
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
		.verification-code{
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
		.sign-in{
			margin-top: 30/70rem;
			border-radius:80/70rem ;
			color: #fff;
			font-size:35/70rem ;
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