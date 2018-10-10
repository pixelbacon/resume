<template lang="pug">
  section.platter
    h2 Platter
    p Over the 2 decades of being a photographer, developer, designer, and many inbetween there's been quite a few languages, frameworks, and tools that were used in the process. Some are pretty rusty but hopefully you get the gist; I don't settle on any particular set of tools.
    v-container(fluid).pl-0.pr-0
      v-layout(wrap)
        v-flex(xs12 sm4 md3 v-for="(section, key) in skills" :key="key").p4
          SectionWithListVue(:title="_.startCase(key)" :list="section")
    //- h2 Capabilities & Experience
    //- ul
    //-   li(v-for="(item, index) in technicalities" :key="index") {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import SectionWithListVue from '@/components/SectionWithList.vue';
import data from './../data';

@Component({
  components: {
    SectionWithListVue,
  },
})
export default class Platter extends Vue {
  public technicalities = data.technicalities;
  public skills = data.skills;
  public get _() {
    return _;
  }
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
    width 33%
</style>
