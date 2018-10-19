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
  tags: object;
}

export interface IPersona {
  description?: string;
  title: string;
  employmentTags?: string[];
  slug: string;
}

export interface IPersonaState {
  personas: IPersona[];
  currentPersona: IPersona|null;
}

export interface IReference {
  affiliation: string;
  linkedIn: string;
  name: string;
  company: string;
  companyLink: string;
  tags: string[];
  telephone?: string;
  title: string;
}

export interface IRootState {
  name: string;
}

export interface IToDo {
  completed: boolean;
  description: string;
}
