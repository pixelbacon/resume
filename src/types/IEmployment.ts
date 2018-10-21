import IMomentRange from './IMomentRange';

export default interface IEmployment {
  title: string;
  company: string;
  companyUrl?: string;
  dates: IMomentRange[];
  leaving?: string;
  summary: string;
  tags: string[];
}
