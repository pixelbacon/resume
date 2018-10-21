import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { employments } from '@/data/employments';
import { employmentTags } from '@/data/employmentTags';
import IRootState from '@/types/IRootState';
import IEmploymentState from '@/types/IEmploymentState';

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
