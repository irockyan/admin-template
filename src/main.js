// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//  引入组件库
import { Form, FormItem, Input, Button } from 'element-ui';
import '@/assets/css/style.css';
import http from '@/helper/js/http';
import MyBreadcrumb from '@/components/common/brandcrumb';
import App from './App';
import router from './router';


Vue.use(Form).use(FormItem).use(Input).use(Button);

// 定义全局的时间过滤器
// 格式化时间的过滤器
Vue.filter('dateFormat', (originVal) => {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1).toString().padStart(2, '0');
  const d = dt
    .getDate()
    .toString()
    .padStart(2, '0');

  const hh = dt
    .getHours()
    .toString()
    .padStart(2, '0');
  const mm = dt
    .getMinutes()
    .toString()
    .padStart(2, '0');
  const ss = dt
    .getSeconds()
    .toString()
    .padStart(2, '0');

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

// 在assets文件夹下的http.js中封装的axios的插件
Vue.use(http);
// 全局的面包屑组件
Vue.component(MyBreadcrumb.name, MyBreadcrumb);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  components: { App },
  template: '<App/>'
});
