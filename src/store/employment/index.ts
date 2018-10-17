import { Module } from 'vuex';
import { IEmploymentState, IRootState } from '@/types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { employments } from '@/data/employments';
import { employmentTags } from '@/data/employmentTags';

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
