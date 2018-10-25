import Persona from './Persona';

export interface IToDo {
  completed: boolean;
  description: string;
  personas: Persona[];
}

export default IToDo;
