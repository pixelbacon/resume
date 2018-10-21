import IPersona from '@/types/IPersona';
import IReference from '@/types/IReference';
import { employmentTags } from '@/data/employmentTags';
import { references } from '@/data/references';
import { referenceTags } from '@/data/referenceTags';
import { intersects } from '@/utils/intersection';

function assignReferencesToPersona(tags: string[]): IReference[] {
  const refs: IReference[] = [];
  references.filter( (reference: IReference): void => {
    if (intersects(tags, reference.tags)) {
      refs.push(reference);
    }
  });
  return refs;
}

export const personas: IPersona[] = [
  {
    slug: '/',
    title: 'Maker',
    subTitle: 'Maker of Things + Creative Technologist',
    employmentTags: [],
    references: assignReferencesToPersona([
      referenceTags.agency,
      referenceTags.boss,
      referenceTags.client,
      referenceTags.colleague,
      referenceTags.cofounder,
      referenceTags.partner,
      referenceTags.pupil,
      referenceTags.startups,
    ]),
  },
  {
    slug: '/founder',
    title: 'Founder',
    subTitle: 'Maker of Things + Helper of Minds',
    employmentTags: [
      employmentTags.bizOps,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.highCollaboration,
      employmentTags.mentoring,
      employmentTags.partner,
      employmentTags.photography,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.startup,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
    references: assignReferencesToPersona([
      referenceTags.cofounder,
      referenceTags.partner,
      referenceTags.startups,
    ]),
  },
  // {
  //   slug: '/mentor',
  //   title: 'Mentor',
  //   employmentTags: [
  //     employmentTags.mentoring,
  //   ],
  // },
  // {
    //   slug: '/designer',
  //   title: 'Designer',
  //   subTitle: 'Designer of Things',
  //   employmentTags: [
  //     employmentTags.photography,
  //     employmentTags.design,
  //     employmentTags.ux,
  //   ],
  // },
  {
    slug: '/developer',
    title: 'Developer',
    subTitle: 'Developer of Things',
    employmentTags: [
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
    ],
    references: assignReferencesToPersona([
      referenceTags.client,
      referenceTags.colleague,
      referenceTags.agency,
    ]),
  },
];
