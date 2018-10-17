import { MutationTree } from 'vuex';
import { IEmploymentState } from '@/types';

export const mutations: MutationTree<IEmploymentState> = {
  update(state, tags: string[]) {
    state.activeTags = tags;
  },
  addTag(state, tag: string) {
    if (!state.activeTags.includes(tag)) {
      state.activeTags.push(tag);
    }
  },
  removeTag(state, tag: string) {
    state.activeTags = state.activeTags.filter(e => e !== tag);
  },
  toggleTag(state, tag: string) {
    if (state.activeTags.includes(tag)) {
      state.activeTags = state.activeTags.filter(e => e !== tag);
    } else {
      state.activeTags.push(tag);
    }
  },
};
