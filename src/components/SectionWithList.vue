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
  @Prop() private list!: [];
  @Prop() private title!: string;
}
</script>

<style lang="css">
</style>
