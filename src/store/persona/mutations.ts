import { MutationTree } from 'vuex';
import IPersonaState from '@/types/IPersonaState';
import IPersona from '@/types/IPersona';

export const mutations: MutationTree<IPersonaState> = {
  SET_PERSONA(state: IPersonaState, persona: IPersona) {
    state.currentPersona = persona;
  },
  CLEAR_PERSONA(state) {
    state.currentPersona = state.personas[0];
  },
  UPDATE_ME_EMPLOYMENT_TAGS(state, tags: string[]) {
    state.personas[0].employmentTags = tags;
  },
};
