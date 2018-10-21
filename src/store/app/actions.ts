import { ActionTree } from 'vuex';

import IAppState from '@/types/IAppState';
import IRootState from '@/types/IRootState';

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
