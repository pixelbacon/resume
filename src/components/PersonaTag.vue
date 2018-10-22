<template lang="pug">
  v-chip(:outline="!active" large color="primary" @click.stop="onClick" :text-color="textColor").personaTag {{persona.title}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { employmentTags } from '@/data/employmentTags';
import IPersona from '@/types/IPersona';

const personaModule = namespace('persona');

@Component
export default class PersonaTag extends Vue {
  @Prop({ required: false, default: '#DEDEDE' }) public color!: string;
  @Prop({required: true}) public persona!: IPersona;

  // Vuex
  @personaModule.Action('clearPersona') public clearPersona!: any;
  @personaModule.Action('setPersona') public setPersona!: any;
  @personaModule.State('currentPersona') public currentPersona!: IPersona;
  @personaModule.State('personas') public personas!: IPersona[];

  get active(): boolean {
    return this.currentPersona === this.persona;
  }

  get currentColor(): string {
    return 'primary';
    // return this.active ? 'primary' : this.color;
  }

  get showClose(): boolean {
    return false;
  }

  get textColor(): string|null {
    return this.active ? '#FFF' : null;
  }

  public onClick(e: Event): void {
    // this.$router.push(this.persona.slug);
    this.setPersona(this.persona);
    // !this.active ? this.setPersona(this.persona) : this.clearPersona();
  }
}
</script>

<style lang="stylus" scoped>
+b('personaTag')
  border-width 2px
  font-weight: $theme.font.weight.bold
</style>


