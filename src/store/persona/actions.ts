import { ActionTree } from 'vuex';
import { personas } from '@/data/personas';
import IPersona from '@/types/IPersona';
import IPersonaState from '@/types/IPersonaState';
import IRootState from '@/types/IRootState';

export const actions: ActionTree<IPersonaState, IRootState> = {
  setPersona({ commit, dispatch }, persona: IPersona): void {
    commit('SET_PERSONA', persona);
    dispatch('employment/setActiveTags', persona.employmentTags, { root: true });
  },
  setBySlug({commit}, slug: string): void {
    const persona = personas.find( (p: IPersona) => {
      return p.slug === slug;
    } );
    if (persona) {
      commit('SET_PERSONA', persona);
    }
  },
  clearPersona({ commit }, persona: IPersona): void {
    commit('CLEAR_PERSONA', persona);
  },
  addEmploymentTagToMe({ commit }, tags: string[]): void {
    commit('UPDATE_ME_EMPLOYMENT_TAGS', tags);
  },
};
