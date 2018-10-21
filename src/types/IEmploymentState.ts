import IEmployment from './IEmployment';

export default interface IEmploymentState {
  activeTags: string[];
  employments: IEmployment[];
  tags: object;
}
