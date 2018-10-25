import { linkRef } from './linkRef';
import { referenceTags } from './referenceTags';
import IReference from '@/@types/IReference';
import Persona from '@/@types/Persona';

export const references: IReference[] = [
  {
    name: 'Jake Westmoreland',
    linkedIn: 'http://bit.ly/michael-minor-jake-westmoreland',
    title: 'Chief Operating Officer',
    company: 'Phood',
    companyLink: `http://bit.ly/michael-minor-phood`,
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'Jake joined Phood shortly after I did as momentum was building toward a solid cultural foundation. As startups often go, runway seperated myself from Phood.',
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
    personas: [
      // Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'I met Natty through TechStars while working for Players Health. He was a strong instrument in re-solidifying confidence in my broad and abstract skill set.',
    tags: [
      referenceTags.startups,
    ],
  },
  {
    name: 'Krissa Watry',
    linkedIn: 'http://bit.ly/michael-minor-kriss-watry',
    title: 'Inventor - Engineer - CEO',
    company: 'Dynepic',
    companyLink: `http://bit.ly/michael-minor-playportal`,
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'Colleague turned friend turned client through TechStars. Post TechStars became a client, a VERY happy client.',
    tags: [
      referenceTags.client,
      referenceTags.colleague,
      referenceTags.startups,
    ],
  },
  {
    name: 'Crystal Williams',
    linkedIn: 'http://bit.ly/michael-minor-crystal-williams',
    title: 'Sr. Staff Web Architect',
    company: 'Tesla Motors',
    companyLink: `http://bit.ly/michael-minor-tesla`,
    personas: [
      Persona.Developer,
      // Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'A former client while working at Warner Brothers and continued after moving to greener pastures. Strong mind and soul, we remain in contact.',
    tags: [
      referenceTags.agency,
      referenceTags.client,
      referenceTags.startups,
    ],
  },
  {
    name: 'Michael Jacobs',
    linkedIn: `http://bit.ly/michael-minor-michael-jacobs`,
    title: 'Cofounder and COO',
    company: 'Ordermark',
    companyLink: `http://bit.ly/michael-minor-ordermark`,
    personas: [
      // Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'Colleague and friend through TechStars; a genuine person that is always willing to help good people make good things. Amazing observation and processing skills lead to natural sympatico.',
    tags: [
      referenceTags.colleague,
      referenceTags.startups,
    ],
  },
  {
    name: 'Julie Penner',
    linkedIn: 'http://bit.ly/michael-minor-julie-penner',
    title: 'Director',
    company: 'Techstars',
    companyLink: `http://bit.ly/michael-minor-techstars`,
    personas: [
      // Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'A Managing Director at TechStars:Boulder, she was kind to the affects of my Aspergers and got to know me and my weird brain faily well in a short time. Tender as she is wickedly smart.',
    tags: [
      referenceTags.startups,
    ],
  },
  {
    name: 'Samantha Geitz',
    linkedIn: `http://bit.ly/michael-minor-samantha-geitz`,
    // title: 'Senior Full-Stack Application Developer at Tighten Co., Co-Founder at Betafish LLC',
    title: 'Technical Co-Founder at Betafish LLC',
    company: 'Betafish LLC',
    companyLink: `http://bit.ly/michael-minor-betafish`,
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
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
    linkedIn: 'http://bit.ly/michael-minor-miles-green',
    title: 'Head of Creative Technology',
    company: 'Haygarth',
    companyLink: `http://www.haygarth.co.uk/${linkRef}`,
    personas: [
      Persona.Developer,
      // Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'By a long shot, the best boss I ever had. His honest candor and support pushed myself and the department into the No Mans Land of creating lovely and intriguing projects.',
    tags: [
      referenceTags.agency,
      referenceTags.boss,
    ],
  },
  // {
  //   name: 'Omari Miller',
  //   linkedIn: 'http://www.linkedin.com/in/ojmiller/',
  //   title: 'VP, Creative Director',
  //   company: 'Momentum Wordlwide',
  //   companyLink: `https://www.edelman.com//${linkRef}`,
  //   personas: [
  //     Persona.Developer,
  //     // Persona.Founder,
  //     Persona.Maker,
  //   ],
  //   affiliation: 'A true creative at heart with a love for the expressive world. At Leo Burnett he stood out as someone that disregarded "limits" to push clients into better spaces.',
  //   tags: [
  //     referenceTags.agency,
  //     referenceTags.colleague,
  //   ],
  // },
  {
    name: 'Darren Marshall',
    linkedIn: 'http://bit.ly/michael-minor-darren-marshall',
    title: 'VP Product & Design',
    company: 'Digital Intent',
    companyLink: `http://bit.ly/michael-minor-digital-intent`,
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
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
    linkedIn: 'http://bit.ly/michael-minor-brandon-cox',
    title: 'SVP, Executive Creative Director',
    company: 'Leo Burnett',
    companyLink: `http://bit.ly/michael-minor-leo-burnett`,
    personas: [
      Persona.Developer,
      // Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'A creative technologist that dove into the designing/brand development side. We worked cohesively as the creative/front end leads on Copenhagen at Leo Burnett. Our mututal backgrounds challenged and supported each other via hive mind.',
    tags: [
      referenceTags.agency,
      referenceTags.colleague,
    ],
  },
  {
    name: 'Joshua Gore',
    linkedIn: 'http://bit.ly/michael-minor-joshua-gore',
    title: 'Founder at Alterna Cycles',
    company: 'Alterna Cycles',
    companyLink: `http://bit.ly/michael-minor-jgw`,
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    affiliation: 'Joshua Gore has been a long time friend and a business partner many times. Like myself, he compartmentalizes the intimidation that comes with making new things. He instead focusess on finding blind spots and supporting his comrades.',
    tags: [
      referenceTags.agency,
      referenceTags.client,
      referenceTags.colleague,
      referenceTags.startups,
    ],
  },
];

export default references;
