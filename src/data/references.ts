import { linkRef } from './linkRef';
import { referenceTags } from './referenceTags';
import { IReference } from '@/types';

export const references: IReference[] = [
  {
    name: 'Jake Westmoreland',
    linkedIn: 'http://bit.ly/michael-minor-jake-westmoreland',
    title: 'Chief Operating Officer',
    company: 'Phood',
    companyLink: `http://bit.ly/michael-minor-phood`,
    affiliation: 'Jake joined Phood shortly after I did as momentum was building toward a solid cultural foundation.',
    tags: [
      referenceTags.cofounder,
      referenceTags.colleague,
      referenceTags.startups,
    ],
  },
  {
    name: 'Nathaniel Zola',
    linkedIn: 'http://bit.ly/michael-minor-natty-zola',
    title: 'Partner at Matchstick Ventures, Managing Director at Techstars',
    company: 'Matchstick Ventures',
    companyLink: `http://bit.ly/michael-minor-matchstick`,
    affiliation: 'I met Natty through TechStars while working for Players Health. He was a strong instrument in re-solidifying confidence in my broad and abstract skill set.',
    tags: [
      referenceTags.startups,
    ],
  },
  {
    name: 'Krissa Watry',
    linkedIn: 'https://www.linkedin.com/in/krissa/',
    title: 'Inventor - Engineer - CEO',
    company: 'Dynepic',
    companyLink: `http://bit.ly/michael-minor-playportal`,
    affiliation: 'Colleague turned friend turned client through TechStars. Post TechStars became a client, a VERY happy client.',
    tags: [
      referenceTags.client,
      referenceTags.colleague,
      referenceTags.startups,
    ],
  },
  {
    name: 'Crystal Williams',
    linkedIn: 'https://www.linkedin.com/in/crystalwilliams/',
    title: 'Sr. Staff Web Architect',
    company: 'Tesla Motors',
    companyLink: `http://bit.ly/michael-minor-tesla`,
    affiliation: 'A former client while working at Warner Brothers and continued after moving to greener pastures. Strong mind and soul, we remain in contact.',
    tags: [
      referenceTags.agency,
      referenceTags.client,
      referenceTags.startups,
    ],
  },
  {
    name: 'Michael Jacobs',
    linkedIn: `https://www.linkedin.com/in/michael-jacobs-91584547/${linkRef}`,
    title: 'Cofounder and COO',
    company: 'Ordermark',
    companyLink: `http://bit.ly/michael-minor-ordermark`,
    affiliation: 'Colleague and friend through TechStars; a genuine person that is always willing to help good people make good things. Amazing observation and processing skills lead to natural sympatico.',
    tags: [
      referenceTags.colleague,
      referenceTags.startups,
    ],
  },
  {
    name: 'Julie Penner',
    linkedIn: 'https://www.linkedin.com/in/juliepenner/',
    title: 'Director',
    company: 'Techstars',
    companyLink: `https://www.techstars.com${linkRef}`,
    affiliation: 'A Managing Director at TechStars:Boulder, she was kind to the affects of my Aspergers and got to know me and my weird brain faily well in a short time. Tender as she is wickedly smart.',
    tags: [
      referenceTags.startups,
    ],
  },
  {
    name: 'Samantha Geitz',
    linkedIn: `https://www.linkedin.com/in/samanthageitz/${linkRef}`,
    title: 'Senior Full-Stack Application Developer at Tighten Co., Co-Founder at Betafish LLC',
    company: 'Betafish LLC',
    companyLink: `https://gobetafish.com/${linkRef}`,
    affiliation: 'I worked with Samantha at Doejo as one of her senior developers. Specifically we were tasked with a project that was 6 months, extremely aggressive, and under normal circumstances would have taken triple the developer staff.',
    tags: [
      referenceTags.agency,
      referenceTags.colleague,
      referenceTags.pupil,
      referenceTags.startups,
    ],
  },
  {
    name: 'Miles Green',
    linkedIn: 'https://www.linkedin.com/in/milesgreen/',
    title: 'Head of Creative Technology',
    company: 'Haygarth',
    companyLink: `http://www.haygarth.co.uk/${linkRef}`,
    affiliation: 'By a long shot, the best boss I ever had. His honest candor and support pushed myself and the department into the No Mans Land of creating lovely and intriguing projects.',
    tags: [
      referenceTags.agency,
      referenceTags.boss,
    ],
  },
  {
    name: 'Omari Miller',
    linkedIn: 'http://www.linkedin.com/in/ojmiller/',
    title: 'VP, Creative Director',
    company: 'Momentum Wordlwide',
    companyLink: `https://www.edelman.com//${linkRef}`,
    affiliation: 'A true creative at heart with a love for the expressive world. At Leo Burnett he stood out as someone that disregarded "limits" to push clients into better spaces.',
    tags: [
      referenceTags.agency,
      referenceTags.colleague,
    ],
  },
  {
    name: 'Darren Marshall',
    linkedIn: 'https://www.linkedin.com/in/darrenmarshall/',
    title: 'Managing Partner',
    company: 'Doejo',
    companyLink: `http://www.doejo.com${linkRef}`,
    affiliation: 'Pupil turned employee at Inverted Creative, turned employer when he co-founded Doejo. Since before his college years we were on a forum of designers, developers, and creative technologists.',
    tags: [
      referenceTags.boss,
      referenceTags.colleague,
      referenceTags.pupil,
      referenceTags.startups,
    ],
  },
  {
    name: 'Brandon Lee Cox',
    linkedIn: 'https://www.linkedin.com/in/imheretomakeyoufamous/',
    title: 'SVP, Executive Creative Director',
    company: 'Leo Burnett',
    companyLink: `http://www.leoburnett.com/${linkRef}`,
    affiliation: 'A creative technologist that dove into the designing/brand development side. We worked cohesively as the creative/front end leads on Copenhagen at Leo Burnett. Our mututal backgrounds challenged and supported each other via hive mind.',
    tags: [
      referenceTags.agency,
      referenceTags.colleague,
    ],
  },
];
