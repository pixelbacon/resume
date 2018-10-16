import { GetterTree } from 'vuex';
import { AppState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AppState, RootState> = {
    difVersion(state): boolean {
        return state.version !== state.lastVersion;
    }
};