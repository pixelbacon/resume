<template lang="pug">
  div.home
    AppHeaderVue.print-page
    //- IntroVideoModalVue
    div.howInbetween
      v-container(grid-list-xl)
        v-layout(wrap row)
          v-flex(xs12 lg6).p12
            HowItBeganVue
          v-flex(xs12 lg6).p12
            TheInbetweenVue
    div.processToDo
      v-container(grid-list-xl :fluid="useFluid")
        v-layout(wrap row)
          v-flex(xs12 md6).p6
            ProcessVue
          v-flex(xs12 md6).p6
            ToDoVue
    div.print-break
    SkillsVue
    ReferencesVue.print-break
    EmploymentVue.print-break
    ReachOutVue.screen
    NotesVue.print.print-break
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import UseFluid from '@/mixins/UseFluid';
import AppHeaderVue from '@/components/AppHeader.vue';
import EmploymentVue from '@/components/Employment.vue';
import HowItBeganVue from '@/components/HowItBegan.vue';
import IntroVideoModalVue from '@/components/IntroVideoModal.vue';
import NotesVue from '@/components/Notes.vue';
import ProcessVue from '@/components/Process.vue';
import ReachOutVue from '@/components/ReachOut.vue';
import ReferencesVue from '@/components/References.vue';
import SkillsVue from '@/components/Skills.vue';
import ToDoVue from '@/components/ToDo.vue';
import TheInbetweenVue from '@/components/TheInbetween.vue';
import { IPersona } from '@/@types';

const personaModule = namespace('persona');

@Component({
  components: {
    AppHeaderVue,
    EmploymentVue,
    HowItBeganVue,
    IntroVideoModalVue,
    NotesVue,
    ProcessVue,
    ReachOutVue,
    ReferencesVue,
    SkillsVue,
    ToDoVue,
    TheInbetweenVue,
  },
})
export default class PersonaComponent extends Mixins(UseFluid) {
  @personaModule.State('currentPersona') public currentPersona!: IPersona;
  @personaModule.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @personaModule.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @personaModule.Getter('isPersonaMaker') public isPersonaMaker!: boolean;

  public metaInfo(): object {
    return {
      title: this.currentPersona.type,
    };
  }
}
</script>

<style lang="stylus">
+b('references')
  margin-bottom 3em

+b('processToDo')
  margin-bottom -1px

  +$screen()
    background: $backgrounds.secondary
    box-shadow 0 0 3em rgba(black, 0.33)
    color white

    +$hTags()
      color white

+$print()
  .experience
  .toDo
    font-size 0.9em
</style>
