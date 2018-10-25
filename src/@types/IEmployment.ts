import IMomentRange from './IMomentRange';
import Persona from './Persona';

export interface IEmployment {
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

export default IEmployment;
