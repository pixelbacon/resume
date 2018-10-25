import Persona from '@/@types/Persona';
import IProcess from '@/@types/IProcess';

export const processes: IProcess[] = [
  {
    persona: Persona.Maker,
    items: [
      'Find problem',
      'Research solution makers',
      'Blindspots; Check their\'s, check ours',
      'Plan MVP',
      'Plan public release',
      'Build MVP',
      'Breathe; Wait for analytics to pour in',
      'Postmortem: What was a win, what was a lose',
      'Do Better; Start again, smarter',
    ],
  },
  {
    persona: Persona.Developer,
    items: [
      'Think; consider frameworks, languages, data store',
      'Sketch/Prototype within resource limitations',
      'Plan according to viability within market and engineering resources.',
      'Build/Test code and market',
      'LAUNCH (Perfect for now)',
      'Postmortem: What was a win, what was a lose',
      'Relax w/ my team and get ready to do it all over again',
      'Do Better; Start again, smarter',
    ],
  },
  {
    persona: Persona.Founder,
    items: [
      'Think; Who, What, Where, How',
      'Prototype; What is in front of you, prep for what is next',
      'MVP; Viability v.s. resources v.s. time',
      'Build/Test; Code structure & UX',
      'LAUNCH (Perfect for now)',
      'Relax; Double Captain & Coke while analytics pour in',
      'Postmortem: What was a win, what was a lose, what can be easier',
      'Breathe; Become your best competition, check blindspots',
      'Do Better; Start again, smarter',
    ],
  },
];

export default processes;
