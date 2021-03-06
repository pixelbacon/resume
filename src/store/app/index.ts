import Cookies from 'js-cookie';
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { version } from '@/data';
import { IAppState, IRootState } from '@/@types';

export const state: IAppState = {
  lastVersion: Cookies.get('version') || '',
  showFilters: false,
  version,
};

const namespaced: boolean = true;

export const app: Module<IAppState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default app;
