import { GetterTree } from 'vuex';
import { EmploymentState, EmploymentItem } from './types';
import { RootState } from '../types';

export const getters: GetterTree<EmploymentState, RootState> = {
    hasFilters(state): boolean {
        return state.activeTags.length > 0;
    },
    filteredEmployments(state): array {
        return !state.activeTags.length ? state.employments : state.employments.filter( e: any => e.tags.filter( t => state.activeTags.includes(t)).length );
    }
};