import { ActionTree } from 'vuex';
import { IEmploymentState, IRootState } from '@/@types';

const checkPersonaForCustomTags = (state: IEmploymentState, dispatch: any, rootGetters: any) => {
  if (!rootGetters['persona/hasActivePersona']) {
    dispatch('persona/addEmploymentTagToMe', state.activeTags, { root: true });
  }
};

export const actions: ActionTree<IEmploymentState, IRootState> = {
  setActiveTags({ state, commit, dispatch, rootGetters }, tags: string[]) {
    commit('SET_ACTIVE_TAGS', tags);
    checkPersonaForCustomTags(state, dispatch, rootGetters);
  },
  addTag( { state, commit, dispatch, rootGetters }, tag: string) {
    commit('ADD_TAG', tag);
    checkPersonaForCustomTags(state, dispatch, rootGetters);
  },
  removeTag({ state, commit, dispatch, rootGetters }, tag: string) {
    commit('REMOVE_TAG', tag);
    checkPersonaForCustomTags(state, dispatch, rootGetters);
  },
  toggleTag({ state, commit, dispatch, rootGetters }, tag: string) {
    commit('TOGGLE_TAG', tag);
    checkPersonaForCustomTags(state, dispatch, rootGetters);
  },
};
