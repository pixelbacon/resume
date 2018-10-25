import Persona from '@/@types/Persona';
import IPdfUrl from '@/@types/IPdfUrl';

export const pdfUrls: IPdfUrl[] = [
  {
    persona: Persona.Developer,
    url: 'http://bit.ly/michael-minor-resume-developer',
  },
  {
    persona: Persona.Founder,
    url: 'http://bit.ly/michael-minor-resume-founder',
  },
  {
    persona: Persona.Maker,
    url: 'http://bit.ly/michael-minor-resume-maker',
  },
];

export default pdfUrls;
