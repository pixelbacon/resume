import { GetterTree } from 'vuex';
import IAppState from '@/types/IAppState';
import IRootState from '@/types/IRootState';

export const getters: GetterTree<IAppState, IRootState> = {
  difVersion(state): boolean {
    return state.version !== state.lastVersion;
  },
};
