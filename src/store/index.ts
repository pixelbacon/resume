// import Vue from 'nativescript-vue';
import Vue from 'vue';
import Vuex from 'vuex';

import { app } from './app';
import { employment } from './employment';
import { persona } from './persona';
import IRootState from '@/types/IRootState';

// const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    name: 'Michael Minor - Resume',
  },
  modules: {
    app,
    employment,
    persona,
  },
});
