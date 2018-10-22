import IReference from './IReference';
import { Persona } from './Persona';

export default interface IPersona {
  type: Persona;
  background?: string;
  description: string[];
  title: string;
  employmentTags?: string[];
  skills?: object;
  slug: string;
  subTitle: string;
}
