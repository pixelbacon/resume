<template lang="pug">
  section.toDo
    h2 To-Do
    ol
      li(v-for="(item, index) in toDos" :key="index") {{ item.description }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { IToDo } from '@/@types';

const persona = namespace('persona');

@Component({})
export default class ToDo extends Vue {
  @persona.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @persona.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @persona.Getter('isPersonaMaker') public isPersonaMaker!: boolean;
  @persona.Getter('toDos') public toDos!: IToDo[];
}
</script>
