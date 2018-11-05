import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//导入底部四个页面组件
import Home from '@/pages/home/Home'
import Classify from '@/pages/classify/Classify'
import ShoppingTrolley from '@/pages/shoppingTrolley/ShoppingTrolley'
import Mine from '@/pages/mine/Mine'

//导入详情页面
import DataPage from '@/pages/dataPage/dataPage'

//导入登录页面
import Login from '@/pages/login/Login'

//导入注册页面
import Register from '@/pages/register/Register'

//导入地址页面
import Location from '@/pages/location/Location'



//导入分类里面详细分类页面
import ClassifyInner from '@/pages/classify/ClassifyInner'


export default new Router({
  routes: [
		{
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/home',
      name: 'Home',
      component: Home
   },
   {
      path: '/classify',
      name: 'Classify',
      component: Classify,
   },
   {
      path: '/shoppingTrolley',
      name: 'ShoppingTrolley',
      component: ShoppingTrolley
   },
   {
      path: '/mine',
      name: 'Mine',
      component: Mine
   },
   //配置详情页
   {
      path: '/dataPage',
      name: 'DataPage',
      component: DataPage
   },
   //配置登录页面
   {
      path: '/login',
      name: 'Login',
      component: Login
   },
   //配置注册页面
   {
      path: '/register',
      name: 'Register',
      component: Register
   },
   //配置地址页面
   {
      path: '/location',
      name: 'Location',
      component: Location
   },
   //配置分类里面的详细分类
   {
      path: '/ClassifyInner',
      name: 'ClassifyInner',
      component: ClassifyInner
   },
  ]
})
