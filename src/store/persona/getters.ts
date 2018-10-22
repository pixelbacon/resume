import { GetterTree } from 'vuex';
import { personas } from '@/data/personas';
import IPersonaState from '@/types/IPersonaState';
import IRootState from '@/types/IRootState';
import { employments } from '@/data/employments';
import { references } from '@/data/references';
import { skills } from '@/data/skills';
import IEmployment from '@/types/IEmployment';
import { Persona } from '@/types/Persona';
import ISkillSet from '@/types/ISkillSet';
import IReference from '@/types/IReference';


export const getters: GetterTree<IPersonaState, IRootState> = {
  hasActivePersona(state): boolean {
    return state.currentPersona !== personas[0];
  },
  isPersonaDeveloper(state): boolean {
    return state.currentPersona.type === Persona.Developer;
  },
  isPersonaFounder(state): boolean {
    return state.currentPersona.type === Persona.Founder;
  },
  isPersonaMaker(state): boolean {
    return state.currentPersona.type === Persona.Maker;
  },
  employments(state): IEmployment[] {
    return employments.filter( (employment: IEmployment) => employment.personas.includes(state.currentPersona.type));
  },
  references(state): IReference[] {
    return references.filter( (reference: IReference) => reference.personas.includes(state.currentPersona.type));
  },
  skills(state): ISkillSet[] {
    return skills.filter( (skillSet: ISkillSet) => skillSet.personas.includes(state.currentPersona.type));
  },
};
