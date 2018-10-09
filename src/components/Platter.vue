<template lang="pug">
  section.platter
    h2 Capabilities & Experience
    ul
      li(v-for="(item, index) in technicalities" :key="index") {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from './../data';

@Component({})
export default class Platter extends Vue {
  public technicalities = data.technicalities;
}
</script>

<style scoped lang="stylus">
ul
  clearfix()

li
  +above(3)
    // display inline-block
    float left
    width 50%

  +above(5)
      width 33%

  +above(6)
      width 25%

  +$print()
    float left
    width 50%
</style>
