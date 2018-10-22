import { Persona } from './Persona';

export default interface IReference {
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
