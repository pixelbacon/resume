import IMomentRange from './IMomentRange';
import { Persona } from './Persona';

export default interface IEmployment {
  bulletPoints: string[];
  personas: Persona[];
  title: string;
  company: string;
  companyUrl?: string;
  dates: IMomentRange[];
  leaving?: string;
  summary: string;
  tags: string[];
}
