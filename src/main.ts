// import '@babel/polyfill';
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { yearsIn } from '@/data';

// Plugins
import './plugins';

// Stylesheet
import './styles/main.styl';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  metaInfo: {
    title: 'Resume', // set a title
    titleTemplate: '%s - Michael Minor', // title is now "My Example App - Yay!"
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: `Michael Minor has been creating and teaching himself all sorts of things for ${yearsIn} years. He loves it, adores it, cherishes it. He specializes in JavaScript, mostly front end, as he loves bringing ideas to tangible, interactions.` },
    ],
  },
  render: (h) => h(App),
}).$mount('#app');
