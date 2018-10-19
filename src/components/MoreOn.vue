<template lang="pug">
  div(:class="classes")
    h5.screen More on <a :href="linkedIn" target="_blank">LinkedIn</a>.
    h5.print More on <a :href="linkedIn">{{linkedInLiteral}}</a>.
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { linkedIn, linkedInLiteral } from '@/data/linkedIn';

@Component
export default class MoreOn extends Vue {
  @Prop(Boolean) public topRight!: boolean;

  public linkedIn: string = linkedIn;
  public linkedInLiteral: string = linkedInLiteral;

  get classes(): object {
    return {
      'moreOn': true,
      'moreOn--topRight': !!this.topRight,
    };
  }
}
</script>

<style scoped lang="stylus">
+b('moreOn')
  margin-bottom 3em

  +m('topRight')
    position absolute
    top 1em
    right 0
    margin-bottom 0
h5
  font-weight: $theme.font.weight.extraBold !important
</style>
