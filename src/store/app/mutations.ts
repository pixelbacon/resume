import { MutationTree } from 'vuex';
import IAppState from '@/types/IAppState';

export const mutations: MutationTree<IAppState> = {
  TOGGLE_FILTERS(state: IAppState, show?: boolean): void {
    state.showFilters = show !== undefined ? show : !state.showFilters;
  },
};
