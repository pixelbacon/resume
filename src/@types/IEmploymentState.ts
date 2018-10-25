import IEmployment from './IEmployment';

export interface IEmploymentState {
  activeTags: string[];
  employments: IEmployment[];
  tags: object;
}

export default IEmploymentState;
