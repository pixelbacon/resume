import { ActionTree } from 'vuex';
import { IAppState, IRootState } from '@/@types';

export const actions: ActionTree<IAppState, IRootState> = {
  toggleFilters({commit}): void {
    commit('TOGGLE_FILTERS');
  },
  showFilters({commit}): void {
    commit('TOGGLE_FILTERS', true);
  },
  hideFilters({commit}): void {
    commit('TOGGLE_FILTERS', false);
  },
};
