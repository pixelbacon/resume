import { MutationTree } from 'vuex';
import { IPersona, IPersonaState } from '@/types';

export const mutations: MutationTree<IPersonaState> = {
  SET_PERSONA(state: IPersonaState, persona: IPersona) {
    state.currentPersona = persona;
  },
  CLEAR_PERSONA(state) {
    state.currentPersona = null;
  },
  UPDATE_ME_EMPLOYMENT_TAGS(state, tags: string[]) {
    state.personas[0].employmentTags = tags;
  },
};
