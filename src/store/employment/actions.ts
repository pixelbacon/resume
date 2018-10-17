import { ActionTree } from 'vuex';
import { IEmploymentState, IRootState } from '@/types';

export const actions: ActionTree<IEmploymentState, IRootState> = {
  addTag({ commit }, tag: string) {
    commit('addTag', tag);
  },
  removeTag({ commit }, tag: string) {
    commit('removeTag', tag);
  },
  toggleTag({ commit }, tag: string) {
    commit('toggleTag', tag);
  },
};
