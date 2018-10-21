<template lang="pug">
  div.reference
    div.h4
      a(:href="reference.linkedIn" target="_blank").reference__name {{reference.name}}
      span.atBreaker @
      a(:href="reference.companyLink" target="_blank").reference__company {{reference.company}}
    p.reference__title {{reference.title}}
    p.reference__affiliation {{reference.affiliation}}
    div.reference__tags
      v-chip(v-for="(tag, index) in reference.tags" :key="index" small) {{ tag }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Reference extends Vue {
  @Prop() private reference!: object;
}
</script>

<style scoped lang="stylus">
+b('a')
  display block

+b('h4')
  margin-bottom -0.3em

+b('reference')
  margin-top 1.5em

  +$print()
    p
      font-size 0.8em

  +e('name')
    color: $theme.colors.secondary
    display inline-block
    margin-bottom 0

  +e('company')
    color: $theme.colors.primary
    display inline-block
    margin-bottom 0

  +e('tags')
    margin-top -0.5em
    margin-bottom -0.5em;

  +e('title')
    color:  $theme.colors.accent
    // font-size 1.2em
    font-family: $theme.font.family.secondary
    font-size 1.1em
    margin-bottom 0.2em

  +e('affiliation')
    // font-size 0.9em
    // font-style italic
</style>
