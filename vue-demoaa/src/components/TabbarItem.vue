<template>
	<div class="TabbarItem" :class="{deeppink:flag}" @click="clickItem">
		<slot></slot><br />
		<span>{{txt}}</span>
	</div>
</template>

<script>
	export default {
		props:["txt","mark","sel"],
//		计算属性
		computed:{
			flag:function(){
				if(this.mark === this.sel){
					return true;
				}
				return false;
			}
		},
		methods:{
			clickItem(){
//				抛出自定义事件
				this.$emit("change",this.mark);
//				跳转到相对于的视图中
				this.$router.push("/"+this.mark)
			}
		}
	}
</script>

<style lang="less">
.TabbarItem{
	width: 25%;
	float: left;
	height: 85/60rem;
	padding-top: 10/60rem;
	text-align: center;
	color: gray;
	font-size: 25/60rem;
	i{
		font-size: 40/60rem;
	}
}
.deeppink{
	color: deeppink;
}
</style>