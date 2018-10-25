<template lang="pug">
  div.reference
    a(:href="reference.companyLink" target="_blank").reference__company {{reference.company}}
    a(:href="reference.linkedIn" target="_blank").reference__name {{reference.name}}
    p.reference__title {{reference.title}}
    p.reference__affiliation {{reference.affiliation}}
    div.reference__linkedIn
      a(:href="reference.linkedIn")
        span.screen
          v-icon(small) link
          span &nbsp;LinkedIn
      div.print <strong>LinkedIn:</strong> {{reference.linkedIn}}
    //- div.reference__tags
    //-   v-chip(v-for="(tag, index) in reference.tags" :key="index" small) {{ tag }}
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

+b('reference')
  // margin-top 1.5em

  +$print()
    // margin-bottom -1em
    font-size 0.8em

  +e('name')
    color: $theme.colors.secondary
    display block
    font-size 1.4em
    margin-bottom 0

  +e('company')
    color: $theme.colors.primary
    display block
    font-size 1.2em
    margin-bottom 0em

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
    margin-bottom 0.5em

  +e('linkedIn')
    font-weight: $theme.font.weight.extraBold
</style>
