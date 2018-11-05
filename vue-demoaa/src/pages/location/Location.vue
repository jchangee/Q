<template>
	<div class="Location">
		<PageHead txt="新增收货地址" class="Location-top">
			<router-link to="/Mine" slot="icon">				
				<i class="fl iconfont icon-jiantou11"></i>
			</router-link>
		</PageHead>
		<div class="Location-content">
			<div class="item">
				<span>收 货 人 :</span>
				<input type="text" placeholder="请输入收货人"/>
			</div>
			<div class="item">
				<span>手机号码:</span>
				<input type="text" placeholder="请输入联系方式"/>
			</div>
			<div class="item">
				<span>选择地区:</span>
				<input type="text" placeholder="请选择地区"/>
			</div>
			<div class="item">
				<span>详细地址:</span>
				<input type="text" placeholder="请输入街道门牌信息"/>
			</div>
			<div class="item">
				<span>邮政编码:</span>
				<input type="text" placeholder="请输入邮政编码"/>
			</div>
			<div class="item">
				<span>设置为默认:</span>
				<span class="fr switch">
					<mt-switch v-model="value" @change="turn"></mt-switch>	
				</span>
			</div>
		</div>
		<div class="preservation-item">			
			<input class="preservation" type="submit" value="保存"/>
		</div>
	</div>
</template>

<script>
	//引入PageHead
	import PageHead from "@/components/PageHead"
//	引入开关
	import { Switch } from 'mint-ui';
	//注册PageHead组件
		export default{
			components:{
				PageHead
			},
			date(){
				return {
					value:false
				}
			},
			methods:{
			  	turn: function(){
			  		console.log(this.value)
			  	}
			}
		}
</script>

<style lang="less">
	.Location{
		background:#f5f5f9;
		.Location-top{
			background: #fff;
		}
	}
	.Location-content{
		width: 100%;
		background: #fff;
		.item{
			width: 100%;
			height:100/70rem;
			line-height: 100/70rem;
			span{
				display: inline-block;
				text-indent: 20/70rem;
				font-size:30/70rem ;
			}
			input{
				font-size: 25/70rem;
				outline: none;
				border: none;
				text-indent: 10/70rem;
			}
			
		}
		
	}
	.preservation-item{
			text-align: center;
			background: white;
		}
		.preservation{
			width: 90%;
			height: 70/70rem;
			margin-top: 40/70rem;
			border-radius:80/70rem;
			background:#ff7b6c ;
			color: #fff;
			outline: none;
			border: none;
			font-size: 30/70rem;
		}
		
		/*开关*/
		.switch{
			margin: 35/70rem 25/70rem 0 0;
		}
</style>