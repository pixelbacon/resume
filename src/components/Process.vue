<template lang="pug">
  section.process
    h2 Process
    p
      ol
        li(v-for="(item, index) in process.items" :key="index") {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { IPersona, IProcess } from '@/@types';

const persona = namespace('persona');

@Component({})
export default class Platter extends Vue {
  @persona.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @persona.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @persona.Getter('process') public process!: IProcess;
}
</script>
