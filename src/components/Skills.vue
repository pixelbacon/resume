<template lang="pug">
  section.skills
    v-container(:fluid="useFluid")
      h2 Skillset
      p Over the 2 decades of being a photographer, developer, designer, and many inbetween there's been quite a few languages, frameworks, and tools that were used in the process. Some are pretty rusty but hopefully you get the gist; I don't settle on any particular set of tools. If I used them once, they're buried somewhere in the vault and just needs a refresher and usually a production level code base is best.
      //- v-container(fluid).pl-0.pr-0
      v-layout(row wrap grid-list-xl).skills__skillsList
        v-flex(xs12 sm4 md3 v-for="(section, key) in skills" :key="key").p3
          SectionWithListVue(:title="startCase(section.title)" :list="section.items")
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import _ from 'lodash';
import SectionWithListVue from '@/components/SectionWithList.vue';
import { skills } from '@/data';
import { ISkillSet } from '@/@types';
import { UseFluid } from '@/mixins/UseFluid';

const personaModule = namespace('persona');

@Component({
  components: {
    SectionWithListVue,
  },
})
export default class Skills extends Mixins(UseFluid) {
  @personaModule.Getter('skills') public skills!: ISkillSet[];
  public startCase = _.startCase;
}
</script>

<style lang="stylus">
+b('skills')
  +$screen()
    background: $backgrounds.primary
    color white
    padding 2em 0

    +$hTags()
      color white

  +$print()
    &__skillsList
      margin-bottom -7em

.sectionWithList
  margin-bottom 0

  +$print()
    // margin-bottom -1em
    // font-size 0.8em

    > ul > li
      // font-size 0.2em
</style>
