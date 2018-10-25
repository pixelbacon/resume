import Persona from './Persona';

export interface IPersona {
  type: Persona;
  background?: string;
  description: string[];
  employmentTags?: string[];
  slug: string;
  subTitle: string;
  title: string;
}

export default IPersona;
