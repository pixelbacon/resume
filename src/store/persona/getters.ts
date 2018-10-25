import { GetterTree } from 'vuex';
import { employments, personas, pdfUrls, references, skills } from '@/data';
import { IEmployment, IPersonaState, IReference, IRootState, ISkillSet, Persona, IPdfUrl } from '@/@types';


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
  pdfUrl(state): IPdfUrl {
    return pdfUrls.find( (p: IPdfUrl) => p.persona === state.currentPersona.type) || pdfUrls[0];
  },
  references(state): IReference[] {
    return references.filter( (reference: IReference) => reference.personas.includes(state.currentPersona.type));
  },
  skills(state): ISkillSet[] {
    return skills.filter( (skillSet: ISkillSet) => skillSet.personas.includes(state.currentPersona.type));
  },
};
