// import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import data from './data';

// Plugins
import './plugins/vuetify';

// Stylesheet
import './styles/main.styl';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
// Material design icons
// @see https://materialdesignicons.com/
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: () => ({
    $app: data,
  }),
  render: (h) => h(App),
}).$mount('#app');
