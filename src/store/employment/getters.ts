import { GetterTree } from 'vuex';
import { IEmployment, IEmploymentState, IRootState } from '@/@types';

export const getters: GetterTree<IEmploymentState, IRootState> = {
  hasFilters(state): boolean {
    return state.activeTags.length > 0;
  },
  filteredEmployments(state): IEmployment[] {
    return !state.activeTags.length ? state.employments : state.employments.filter( (e: IEmployment) => e.tags.filter( (t: string) => state.activeTags.includes(t)).length );
  },
};
