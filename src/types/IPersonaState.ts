import IPersona from './IPersona';

export default interface IPersonaState {
  personas: IPersona[];
  currentPersona: IPersona|null;
}
