import { GetterTree } from 'vuex';
import { IAppState, IRootState } from '@/types';

export const getters: GetterTree<IAppState, IRootState> = {
  difVersion(state): boolean {
    return state.version !== state.lastVersion;
  },
};
