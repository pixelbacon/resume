<template lang="pug">
  span(@click="onClick").employmentTag
    v-chip(label :color="color" :close="showClose" :small="small" :text-color="textColor") {{tagText}}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';
import { employmentTags } from '@/data/employmentTags';

const employmentModule = namespace('employment');

@Component({
  props: {
    removable: Boolean,
    small: Boolean,
    tagKey: String,
    tagText: String
  }
})
export default class EmploymentTag extends Vue {
  @employmentModule.Action('toggleTag') toggleTag: any;
  @employmentModule.State('activeTags') activeTags: array;

  public onClick() {
    this.toggleTag(this.tagText)
  }

  get active() {
    // return false;
    return this.activeTags.includes(this.tagText);
  }

  get color() {
    return this.active ? 'primary' : '#DEDEDE';
  }

  get showClose() {
    return false;
    // return this.active;
  }

  get textColor() {
    return this.active ? '#FFF' : null;
  }

  get text() {
    return this.tagText || employmentTags[this.tagKey]
  }
}
</script>

<style lang="stylus">
</style>
