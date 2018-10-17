<template lang="pug">
  span(@click="onClick").employmentTag
    v-chip(label :color="color" :close="showClose" :small="small" :text-color="textColor") {{tagText}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';
import { employmentTags } from '@/data/employmentTags';

const employmentModule = namespace('employment');

@Component
export default class EmploymentTag extends Vue {
  @Prop({ required: false }) public removable!: boolean;
  @Prop({ required: false }) public small!: boolean;
  @Prop({ required: false }) public tagKey!: string;
  @Prop({ required: false }) public tagText!: string;

  // Vuex
  @employmentModule.Action('toggleTag') public toggleTag: any;
  @employmentModule.State('activeTags') public activeTags!: string[];

  get active() {
    return this.activeTags.includes(this.tagText);
  }

  get color(): string {
    return this.active ? 'primary' : '#DEDEDE';
  }

  get showClose(): boolean {
    return false;
  }

  get textColor(): string|null {
    return this.active ? '#FFF' : null;
  }

  public onClick(): void {
    this.toggleTag(this.tagText);
  }
}
</script>

<style lang="stylus">
</style>
