import IPersona from '@/types/IPersona';
import { employmentTags } from '@/data/employmentTags';
import { referenceTags } from '@/data/referenceTags';
import { yearsIn } from '@/data/yearsIn';
import { Persona } from '@/types/Persona';

export const personas: IPersona[] = [
  {
    type: Persona.Maker,
    slug: '/',
    title: 'Maker',
    subTitle: 'Maker of Things + Creative Technologist',
    description: [
      `Creating, designing, developing, pitching, and sustaining brands for ${yearsIn} years. I keep seeing there is little value in being right compared to the far greater value in knowing when you're wrong. And most importantly having a team to figure out what that means.`,
    ],
    employmentTags: [],
  },
  {
    type: Persona.Founder,
    slug: '/founder',
    title: 'Technical Founder',
    subTitle: 'Maker of Things + Helper of Minds',
    description: [
      `Creating opportunities for others take a a lot; energy, focus, discipline, understanding, and humility. Some founders disagree, but when you become the boss for others with a career on the line, it isn\'t about who has the best ideas, who has the loudest voice... It becomes who is the best listener, who sees the best idea when it is presented to them.`,
      `Hire smart people. Hire good people. Hire challenging people. Then listen to them, and train them to one day create new opportunities for others. And never, ever, forgot it takes a team to become Midas.`,
    ],
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
  },
  {
    type: Persona.Developer,
    slug: '/developer',
    title: 'Developer',
    subTitle: 'Developer of Things',
    description: [
      `Creating, designing, developing, pitching, and sustaining brands for 20 years. I keep seeing there is little value in being right compared to the far greater value in knowing when you\'re wrong. And most importantly having a team to figure out what that means.`,
      `Tools change, frameworks die off, yet every iteration solves previous problems while minimizing new ones. Mental grit and an endless supply of curiosity is required. And that's why I fell in love.`,
    ],
    employmentTags: [
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
    ],
  },
];
