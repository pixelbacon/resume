<template lang="pug">
  section.employment
    MoreOnVue(top-right)
    h2 Employment
    ExpandVue
      div(v-if="!hasActivePersona").employment__filters.screen
        p Go ahead and use the tags below to look and learn about specifics for places I've worked. I've gladly spanned multiple roles and various responsibilities, this may make it a bit easier to find out what those are.
        EmploymentTagVue(v-for="(tag, key) in tags" :key="key" :tag-text="tag")
    v-layout(row wrap).employmentsContainer
      transition-group(name="fade" mode="out-in")
        v-flex(xs12 v-for="(employment, index) in computedEmployments" :key="index" v-if="index < viewLimit").p12
            EmploymentItemVue(:employment="employment")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  namespace,
} from 'vuex-class';
import ExpandVue from '@/components/Expand.vue';
import MoreOnVue from '@/components/MoreOn.vue';
import EmploymentItemVue from '@/components/EmploymentItem.vue';
import EmploymentTagVue from '@/components/EmploymentTag.vue';
import IEmployment from '@/types/IEmployment';
import IPersona from '@/types/IPersona';

const employmentModule = namespace('employment');
const personaModule = namespace('persona');

@Component({
  components: {
    EmploymentItemVue,
    EmploymentTagVue,
    ExpandVue,
    MoreOnVue,
  },
})
export default class Employment extends Vue {
  @employmentModule.State('activeTags') public activeTags!: string[];
  @employmentModule.State('employments') public employments!: IEmployment[];
  @employmentModule.Getter('filteredEmployments') public filteredEmployments!: IEmployment[];
  @employmentModule.Getter('hasFilters') public hasFilters!: boolean;
  @employmentModule.State('tags') public tags!: string[];
  @personaModule.Getter('currentPersona') public currentPersona!: IPersona;
  @personaModule.Getter('hasActivePersona') public hasActivePersona!: boolean;
  @personaModule.Getter('employments') public personaEmployments!: IEmployment[];

  public get computedEmployments(): IEmployment[] {
    return this.hasActivePersona ? this.personaEmployments : this.filteredEmployments;
  }

  public get viewLimit(): number {
    return this.hasFilters ? 99 : 4;
  }
}
</script>

<style scoped lang="stylus">
$padding = 0.2em

+b('employment')
  +e('filters')
    padding-bottom 1.5em
</style>
