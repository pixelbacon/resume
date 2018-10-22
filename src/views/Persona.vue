<template lang="pug">
  div.home
    AppHeaderVue.print-page
    v-container(grid-list-lg :fluid="$vuetify.breakpoint.mdAndDown")
      v-layout(wrap row)
        v-flex(xs12 lg6).p12
          ExperienceVue
        v-flex(xs12 lg6).p12
          WhatIKnowVue
      v-layout(wrap row)
        v-flex(xs12 md6).p6
          ProcessVue
        v-flex(xs12 md6).p6
          ToDoVue
      div.print-break
      PlatterVue
      ReferencesVue.print-break
      EmploymentVue.print-break
      ReachOutVue.screen
      NotesVue.print.print-break
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeaderVue from '@/components/AppHeader.vue';
import EmploymentVue from '@/components/Employment.vue';
import ExperienceVue from '@/components/Experience.vue';
import NotesVue from '@/components/Notes.vue';
import PlatterVue from '@/components/Platter.vue';
import ProcessVue from '@/components/Process.vue';
import ReachOutVue from '@/components/ReachOut.vue';
import ReferencesVue from '@/components/References.vue';
import ToDoVue from '@/components/ToDo.vue';
import WhatIKnowVue from '@/components/WhatIKnow.vue';

@Component({
  components: {
    AppHeaderVue,
    EmploymentVue,
    ExperienceVue,
    NotesVue,
    PlatterVue,
    ProcessVue,
    ReachOutVue,
    ReferencesVue,
    ToDoVue,
    WhatIKnowVue,
  },
})
export default class Persona extends Vue {}
</script>

<style lang="stylus">
.references
  margin-bottom 3em

+$print()
  .experience
  .toDo
    font-size 0.9em
</style>
