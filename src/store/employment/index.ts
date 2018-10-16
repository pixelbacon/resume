import { Module } from 'vuex';
import { RootState } from './../types';
import { EmploymentState } from './types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { employments } from '@/data/employments';
import { employmentTags } from '@/data/employmentTags';

export const state: EmploymentState = {
    activeTags: [],
    employments,
    tags: employmentTags
};

const namespaced: boolean = true;

export const employment: Module<EmploymentState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};