import Vue from 'vue';
import App from './App.vue';
// router
import router from './router';
// store
import store from './store'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 国际化
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('./lang/zh-CN'),   // 中文语言包
    'en-US': require('./lang/en-US')    // 英文语言包
  },
});
// 导入全局样式
import '@/styles/all.less';
// 解决浏览器兼容问题
import 'babel-polyfill'
// 解决axios在IE请求无效问题
// import 'url-search-params-polyfill'
// promise
import promise from 'es6-promise'
promise.polyfill()
// 去掉生产关键提示
Vue.config.productionTip = false
// 注册全局过滤器
import * as filter from './filter/index'
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})
// 注册全局指令
import * as directive from './directive/index'
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key])
})
// 注册全局组件
import * as component from './components/index'
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
// 注册全局mixins（会影响到所有vue实例，慎用）
import * as mixins from './mixins/index'
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key])
})
// 注册全局中央事件总线
Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');