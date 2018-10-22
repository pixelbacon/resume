import { ActionTree } from 'vuex';
import IPersona from '@/types/IPersona';
import IPersonaState from '@/types/IPersonaState';
import IRootState from '@/types/IRootState';
import { Persona } from '@/types/Persona';
import router from '@/router';

export const actions: ActionTree<IPersonaState, IRootState> = {
  setPersona({ commit, dispatch }, persona: IPersona): void {
    commit('SET_PERSONA', persona);
    dispatch('employment/setActiveTags', persona.employmentTags, { root: true });
    router.push(persona.slug);
  },
  setBySlug({dispatch, state}, slug: string): void {
    const persona = state.personas.find( (p: IPersona) => {
      return p.slug === slug;
    } );
    if (persona && persona !== state.currentPersona) {
      dispatch('setPersona', persona);
    }
  },
  setByType({dispatch, state}, type: Persona) {
    const persona = state.personas.find( (p: IPersona) => {
      return p.type === type;
    });
    if (persona && persona !== state.currentPersona) {
      dispatch('setPersona', persona);
    }
  },
  addEmploymentTagToMe({ commit }, tags: string[]): void {
    commit('UPDATE_ME_EMPLOYMENT_TAGS', tags);
  },
};
