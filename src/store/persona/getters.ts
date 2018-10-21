import { GetterTree } from 'vuex';
import { personas } from '@/data/personas';
import IPersonaState from '@/types/IPersonaState';
import IRootState from '@/types/IRootState';

export const getters: GetterTree<IPersonaState, IRootState> = {
  hasActivePersona(state): boolean {
    return state.currentPersona !== personas[0];
  },
  isPersonaDeveloper(state): boolean {
    return state.currentPersona === personas[2];
  },
  isPersonaFounder(state): boolean {
    return state.currentPersona === personas[1];
  },
  isPersonaMaker(state): boolean {
    return state.currentPersona === personas[0];
  },
};
