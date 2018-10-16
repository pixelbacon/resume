import { MutationTree } from 'vuex';
import { EmploymentState } from './types';

export const mutations: MutationTree<EmploymentState> = {
    update(state, tags: String[]) {
        state.activeTags = tags;
    },
    addTag(state, tag: String) {
        if( !state.activeTags.includes(tag) ){
            state.activeTags.push(tag);
        }
    },
    removeTag(state, tag: String) {
        state.activeTags = state.activeTags.filter(e => e !== tag);
    },
    toggleTag(state, tag: String) {
        if( state.activeTags.includes(tag) ){
            state.activeTags = state.activeTags.filter(e => e !== tag);
        } else {
            state.activeTags.push(tag);
        }
    }
};