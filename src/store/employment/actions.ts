import { ActionTree } from 'vuex';
import { EmploymentFilterState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<EmploymentFilterState, RootState> = {
    addTag({ commit }, tag: String) {
        commit('addTag', tag);
    },
    removeTag({ commit }, tag: String) {
        commit('removeTag', tag);
    },
    toggleTag({ commit }, tag: String) {
        commit('toggleTag', tag);
    }
};