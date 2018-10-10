<template lang="pug">
  div.reference
    div.h4
      a(:href="reference.linkedIn" target="_blank").reference__name {{reference.name}}
      span.atBreaker @
      a(:href="reference.companyLink" target="_blank").reference__company {{reference.company}}
    p.reference__title {{reference.title}}
    p.reference__affiliation {{reference.affiliation}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Reference extends Vue {
  // Variables replace
  public variableOne = false;

  @Prop() private reference!: object;
}
</script>

<style scoped lang="stylus">
a
  display block

.h4
  margin-bottom -0.3em

.reference
  margin-top 1.5em

  +$print()
    font-size 0.9em

  &__name
  &__company
    display inline-block
    margin-bottom 0

  &__name
    color: $theme.colors.secondary

  &__company
    color: $theme.colors.primary

  &__title
    color:  $theme.colors.accent
    // font-size 1.2em
    font-family: $theme.font.family.secondary
    font-size 1.1em
    margin-bottom 0.2em

  &__affiliation
    font-size 0.9em
    // font-style italic
</style>
