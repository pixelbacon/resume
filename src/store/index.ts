// import Vue from 'nativescript-vue';
import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from './types';
import { app } from './app';
import { employment } from './employment';

// const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {},
  modules: {
    app,
    employment
  }
});