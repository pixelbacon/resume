<template lang="pug">
  section.sectionWithList
    h3 {{title}}
    ul
      li(v-for="(item, index) in list" :key="index") {{item}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class SectionWithList extends Vue {
  @Prop() private list!: ['Missing list'];
  @Prop() private title!: string;
}
</script>

<style scoped lang="stylus">
+b('sectionWithList')
  +above(3)
    margin-bottom 1em
</style>
