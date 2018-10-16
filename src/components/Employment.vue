<template lang="pug">
  section.employment
    h2 Employment
    div.filters.screen
      p Go ahead and use the tags below to look and learn about specifics for places I've worked. I've gladly spanned multiple roles and various responsibilities, this may make it a bit easier to find out what those are.
      EmploymentTagVue(v-for="(tag, key) in tags" :key="key" :tag-text="tag")
    v-layout(row wrap).employmentsContainer
      v-flex(xs12 v-for="(employment, index) in filteredEmployments" :key="index" v-if="index < viewLimit")
        transition(name="fade")
          EmploymentItemVue(:employment="employment")
    MoreOnVue
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  namespace
} from 'vuex-class';
import MoreOnVue from '@/components/MoreOn.vue';
import EmploymentItemVue from '@/components/EmploymentItem.vue';
import EmploymentTagVue from '@/components/EmploymentTag.vue';

const employmentModule = namespace('employment');

@Component({
  components: {
    EmploymentItemVue,
    EmploymentTagVue,
    MoreOnVue,
  },
})
export default class Employment extends Vue {
  @employmentModule.State('activeTags') activeTags: String[];
  @employmentModule.State('employments') employments: Object[];
  @employmentModule.Getter('filteredEmployments') filteredEmployments: Object[];
  @employmentModule.Getter('hasFilters') hasFilters: boolean;
  @employmentModule.State('tags') tags: String[];
  viewLimit = 99
}
</script>

<style scoped lang="stylus">
$padding = 0.2em

.employment
  +above(3)
    // padding 0 $padding 0 $padding

.filters
  margin-bottom 3em
</style>
