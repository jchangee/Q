<template>
	<div class="register">
		<PageHead txt="新用户注册">
			<router-link to="/Mine" slot="icon">				
				<i class="fl iconfont icon-jiantou11"></i>
			</router-link>
		</PageHead>
		<div class="login-input">
			<div class="hintBox">
				<input @blur="checkname()" v-model="name" class="phone" type="text" placeholder="请输入昵称"/>
				<span class="hint">{{msgame}}</span>
			</div>
			<div class="hintBox">
				<input@blur="checkphone()" v-model = "phone" class="phone" type="text" placeholder="输入手机号"/>
				<span class="hint">{{msgphone}}</span>
			</div>
			<div class="hintBox">
				<input @blur="checkpassword()" v-model="password" class="phone" type="text" placeholder="设置密码"/>
				<span class="hint">{{msgpassword}}</span>
			</div>
			<div class="hintBox">
				<input @blur="checkpwd()" v-model="pwd" class="phone" type="text" placeholder="请确认密码"/>
				<span class="hint">{{msgpwd}}</span>
			</div>
			<div class="hintBox">
				<input @blur="authCode()" v-model="authCodemsg" class="message" type="text" placeholder="输入短信验证码"/>
				<span class="hint">{{msgauthCode}}</span>
			</div>
			<span class="verification-code">获取验证码</span>
			<router-link to="/Login">
				<span class="registers fr">用户登录</span>
			</router-link>
			<input :class="register" type="submit" value="注册" @click="registerIn()"/>
		</div>
		<mt-popup style="width:100%; height:10%;" v-model="popupVisible" position="top" popup-transition="popup-slide">
			<p class="login-ok">注册成功</p>
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
					register:"register",
					msgame:"",
		            msgpassword:"",
		            msgpwd:"",
		            msgphone:"",
		            name:"",
		            password:"",
		            pwd:"",
		            phone:"",
		            authCodemsg:"",
		            msgauthCode:"",
		            Phonereg:/^(((1[0-9]{2})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
//		              	 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
		            pwdReg:/^[a-zA-Z]\w{5,17}$/,
		            authCodeReg:/^[0-9]{4}$/,
//		       	  	     弹框
		            popupVisible:false,
				}
			},
			methods:{
	            checkname(){
	                if(this.name==""){
	                	this.msgame = "用户名不能为空";
	                }else{	                	
	                	this.msgame = "";
	                }
	            },
               	checkphone(){
	                if(this.phone==""){
	                    this.msgphone="手机号不能为空";
	                }else if(!this.Phonereg.test(this.phone)){
	                    this.msgphone="格式错误";
	                }else{
	                    this.msgphone="输入正确"
	                }
	            },
	            checkpassword(){
		          	if(this.password==""){
		            	this.msgpassword = "密码不能为空"
		          	}else if(!this.pwdReg.test(this.password)){
		            	this.msgpassword = "密码不合法";
		          	}else{
		            	this.msgpassword = "密码合法";
		          	}
		        },
		        checkpwd(){
	                if(this.pwd==""){
	                    this.msgpassword ="密码不能为空"
	                }else if(this.pwd !=this.password){
	                    this.msgpwd = "输入密码不一致"
	                }else{
	                    this.msgpwd ="输入密码正确"
	                }
	            },
	            authCode(){
	            	if(this.authCodemsg==""){
	            		this.msgauthCode="验证码不能为空"
	            		this.register="register"
	            	}else if(!this.authCodeReg.test(this.authCodemsg)){
	            		this.msgauthCode="验证码错误"
	            		this.register="register"
	            	}else{
	            		this.msgauthCode="验证码正确"
	            		this.register="register2"
	            	}
	            },
	            registerIn(){
//					点击登陆时判断authCodemsg的值不为空的时候才会弹出登录成功的弹框
					if(this.authCodemsg!==""&&this.authCodeReg.test(this.authCodemsg)){
						this.popupVisible = true
						this.name = ""
						this.msgame = ""
						this.phone = ""
						this.msgphone = ""
						this.password = ""
						this.msgpassword = ""
						this.pwd = ""
						this.msgpwd = ""
						this.authCodemsg = ""
						this.msgauthCode = ""
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
		margin-bottom: 200/70rem;
		.hintBox{
			position: relative;
			width: 100%;
			.hint{
				position: absolute;
				right: 5%;
				top: 75/70rem;
				font-size: 30/70rem;
				color: gray;
			}
		}
		.phone{
			position: relative;
		}
		.verification-code{
			position: absolute;
			top:665/70rem;
			left: 75%;
			color: #24863a;
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