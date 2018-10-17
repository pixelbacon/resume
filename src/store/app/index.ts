import Cookies from 'js-cookie';
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IAppState, IRootState } from '@/types';
import { version } from '@/data/version';

export const state: IAppState = {
  lastVersion: Cookies.get('version') || '',
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
