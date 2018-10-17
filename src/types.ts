import { Moment } from 'moment';

export interface IAppState {
  lastVersion: string;
  version: string;
}

export interface IDateRange {
  [key: number]: Moment;
}

export interface IEmployment {
  title: string;
  company: string;
  companyUrl?: string;
  dates: IDateRange[];
  leaving?: string;
  summary: string;
  tags: string[];
}

export interface IEmploymentState {
  activeTags: string[];
  employments: IEmployment[];
  tags: IEmploymentTags;
}

export interface IEmploymentTags {
  [key: string]: any;
}

export interface IReference {
  name: string;
  linkedIn: string;
  title: string;
  company: string;
  companyLink: string;
  affiliation: string;
}

export interface IRootState {
  name: string;
}

export interface IToDo {
  completed: boolean;
  description: string;
}
