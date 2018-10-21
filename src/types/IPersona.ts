import IReference from './IReference';

export default interface IPersona {
  description?: string;
  title: string;
  employmentTags?: string[];
  references: IReference[];
  slug: string;
  subTitle: string;
}
