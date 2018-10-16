import Cookies from 'js-cookie';
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState } from './../types';
import { AppState } from './types';
import { version } from '@/data/version';

export const state: AppState = {
    lastVersion: Cookies.get('version') || '',
    version
};

const namespaced: boolean = true;

export const app: Module<AppState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};