<template lang="pug">
  div.personaRelatedComponent
    div(v-if="isPersonaDeveloper") Developer
    div(v-if="isPersonaFounder") Founder
    div(v-if="isPersonaMaker") Maker
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const persona = namespace('persona');

@Component
export default class PersonaRelatedComponent extends Vue {
  @persona.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @persona.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @persona.Getter('isPersonaMaker') public isPersonaMaker!: boolean;
}
</script>

<style lang="stylus" scoped>
+b('personaRelatedComponent')
  font-size 1em
</style>
