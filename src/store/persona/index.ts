import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { personas } from '@/data';
import IPersonaState from '@/types/IPersonaState';
import IRootState from '@/types/IRootState';

export const state: IPersonaState = {
  personas,
  currentPersona: personas[0],
};

const namespaced: boolean = true;

export const persona: Module<IPersonaState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
