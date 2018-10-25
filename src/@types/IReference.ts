import Persona from './Persona';

export interface IReference {
  affiliation: string;
  linkedIn: string;
  name: string;
  company: string;
  companyLink: string;
  personas: Persona[];
  tags: string[];
  telephone?: string;
  title: string;
}

export default IReference;
