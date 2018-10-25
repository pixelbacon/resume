import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { employments, employmentTags } from '@/data';
import { IEmploymentState, IRootState } from '@/@types';

export const state: IEmploymentState = {
  activeTags: [],
  employments,
  tags: employmentTags,
};

const namespaced: boolean = true;

export const employment: Module<IEmploymentState, IRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default employment;
