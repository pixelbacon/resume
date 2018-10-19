import { GetterTree } from 'vuex';
import { personas } from '@/data/personas';
import { IPersonaState, IRootState } from '@/types';

export const getters: GetterTree<IPersonaState, IRootState> = {
  hasActivePersona(state): boolean {
    return state.currentPersona !== personas[0];
  },
};
