// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入淘宝的图标
import './assets/iconfont/iconfont.css'
//引入淘宝弹性盒模型布局插件
import "./assets/lib/js/flexible.js"

Vue.config.productionTip = false


import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
