import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueCarousel from 'vue-carousel';
import animated from 'animate.css'; 

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueCarousel);
Vue.use(VueI18n);
Vue.use(animated);
Vue.config.productionTip = false

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
});
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
  const api = `${process.env.APIPATH}/api/user/check`;
  axios.post(api).then((response) => {
    if(response.data.success){
      next();
    }else{
      next({
        path: '/login',
      });
    }
  });
  }else{
    next();
  }
});



