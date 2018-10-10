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

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: () => ({
    $app: data,
  }),
  render: (h) => h(App),
}).$mount('#app');
