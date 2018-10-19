import { ActionTree } from 'vuex';
import { IEmploymentState, IRootState } from '@/types';

const checkPersonaForCustomTags = (dispatch: any, rootGetters: any) => {
  if (!rootGetters['persona/hasActivePersona']) {
    dispatch('persona/addEmploymentTagToMe', null, { root: true });
  }
};

export const actions: ActionTree<IEmploymentState, IRootState> = {
  setActiveTags({ commit, dispatch, rootGetters }, tags: string[]) {
    commit('SET_ACTIVE_TAGS', tags);
    checkPersonaForCustomTags(dispatch, rootGetters);
  },
  addTag( { commit, dispatch, rootGetters }, tag: string) {
    commit('ADD_TAG', tag);
    checkPersonaForCustomTags(dispatch, rootGetters);
  },
  removeTag({ commit, dispatch, rootGetters }, tag: string) {
    commit('REMOVE_TAG', tag);
    checkPersonaForCustomTags(dispatch, rootGetters);
  },
  toggleTag({ commit, dispatch, rootGetters }, tag: string) {
    commit('TOGGLE_TAG', tag);
    checkPersonaForCustomTags(dispatch, rootGetters);
  },
};
