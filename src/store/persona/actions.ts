import { ActionTree } from 'vuex';
import { IEmploymentState, IPersona, IPersonaState, IRootState } from '@/types';
import { employment } from '@/store/employment';

export const actions: ActionTree<IPersonaState, IRootState> = {
  setPersona({ commit, dispatch }, persona: IPersona) {
    commit('SET_PERSONA', persona);
    dispatch('employment/setActiveTags', persona.employmentTags, { root: true });
  },
  clearPersona({ commit }, persona: IPersona) {
    commit('CLEAR_PERSONA', persona);
  },
  addEmploymentTagToMe({ commit }): void {
    commit('UPDATE_ME_EMPLOYMENT_TAGS', (employment.state as IEmploymentState).activeTags);
  },
};
