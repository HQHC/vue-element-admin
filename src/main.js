import Vue from 'vue'

import Cookies from 'js-cookie'

//去除浏览器默认样式
import 'normalize.css/normalize.css';

import Element from 'element-ui';

//element-ui默认样式
import './styles/element-variable.scss'

import App from './App.vue'
import store from './store'
import router from './router'

import i18n from './lang'
import './plugins/element.js'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
