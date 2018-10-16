<template lang="pug">
  section.platter
    h2 Platter
    p Over the 2 decades of being a photographer, developer, designer, and many inbetween there's been quite a few languages, frameworks, and tools that were used in the process. Some are pretty rusty but hopefully you get the gist; I don't settle on any particular set of tools.
    v-container(fluid).pl-0.pr-0
      v-layout(wrap justify-center)
        v-flex(xs12 sm4 md3 v-for="(section, key) in skills" :key="key").p3
          SectionWithListVue(:title="_.startCase(key)" :list="section")
    //- h2 Capabilities & Experience
    //- ul
    //-   li(v-for="(item, index) in technicalities" :key="index") {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import SectionWithListVue from '@/components/SectionWithList.vue';
import { skills } from '@/data/skills';

@Component({
  components: {
    SectionWithListVue,
  },
})
export default class Platter extends Vue {
  public skills = skills;
  public get _() {
    return _;
  }
}
</script>

<style scoped lang="stylus">
.sectionWithList > section
  margin-bottom 0

  +$print()
    font-size 0.8em

    > ul > li
      font-size 0.2em
</style>
