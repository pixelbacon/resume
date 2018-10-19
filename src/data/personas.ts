import { employmentTags } from '@/data/employmentTags';
import { IPersona } from '@/types';

export const personas: IPersona[] = [
  {
    title: 'ME',
    employmentTags: [],
    slug: '',
  },
  {
    title: 'Founder',
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
    slug: 'founder',
  },
  // {
  //   title: 'Mentor',
  //   employmentTags: [
  //     employmentTags.mentoring,
  //   ],
  // },
  {
    title: 'Designer',
    employmentTags: [
      employmentTags.photography,
      employmentTags.design,
      employmentTags.ux,
    ],
    slug: 'designer',
  },
  {
    title: 'Developer',
    employmentTags: [
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
    ],
    slug: 'developer',
  },
  // {
  //   title: 'Developer: Back End',
  //   employmentTags: [
  //     employmentTags.devBackend,
  //     employmentTags.devOps,
  //   ],
  // },
  // {
  //   title: 'Developer: Front End',
  //   employmentTags: [
  //     employmentTags.devFrontend,
  //     employmentTags.devOps,
  //   ],
  // },
  // {
  //   title: 'Photographer',
  //   employmentTags: [
  //     employmentTags.photographer,
  //   ],
  // },
];
