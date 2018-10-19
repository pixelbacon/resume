import { MutationTree } from 'vuex';
import { IEmploymentState } from '@/types';

export const mutations: MutationTree<IEmploymentState> = {
  SET_ACTIVE_TAGS(state, tags: string[]) {
    // state.activeTags = state.activeTags.filter((t: string) => tags.includes(t));
    state.activeTags = tags;
  },
  ADD_TAG(state, tag: string) {
    if (!state.activeTags.includes(tag)) {
      state.activeTags.push(tag);
    }
  },
  REMOVE_TAG(state, tag: string) {
    state.activeTags = state.activeTags.filter(e => e !== tag);
  },
  TOGGLE_TAG(state, tag: string) {
    if (state.activeTags.includes(tag)) {
      state.activeTags = state.activeTags.filter(e => e !== tag);
    } else {
      state.activeTags.push(tag);
    }
  },
};
