<template lang="pug">
  div.employment
    div.h4
      div.employment__title {{employment.title}}
      span.atBreaker @
      div.employment__company
        a(v-if="employment.companyUrl" :href="employment.companyUrl" target="_blank") {{employment.company}}
        span(v-else) {{employment.company}}
    //- div.employment__dateRange {{calculatedDate(employment)}}
    div.employment__dateRange {{formattedDates}}
    div.employment__summary
      p {{employment.summary}}
    transition(name="fade")
      div.screen.employment__tags(v-if="hasFilters")
        EmploymentTagVue(v-for="(tag, index) in tags" :key="index" small :tag-text="tag")
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { dateFormat } from '@/data/dateFormat';
import EmploymentTagVue from '@/components/EmploymentTag.vue';

const employmentModule = namespace('employment');

@Component({
  components: {
    EmploymentTagVue
  }
})
export default class EmploymentItem extends Vue {
  @Prop() private employment!: any;
  @employmentModule.State('activeTags') activeTags: array;
  @employmentModule.Getter('hasFilters') hasFilters: boolean;

  public monthsBetweenDates(dateSet: array): Moment {
    const diff = Math.floor(moment.duration(dateSet[1].diff(dateSet[0])).as('months'));
    return diff;
  }

  get formattedDates() {
    let months = 0;
    this.employment.dates.forEach( startEnd => {
      let diffMonths = this.monthsBetweenDates( startEnd );
      months += diffMonths;
    });

    let datesString = '';
    this.employment.dates.forEach((startEnd, index) => {
      if(this.employment.dates.length > 1 && (index) < this.employment.dates.length && index > 0) {
        datesString += ', '
      }
      datesString += `${startEnd[0].format(dateFormat)} - ${startEnd[1].format(dateFormat)}`;
    });

    const years = months >= 12 ? Math.floor(months / 12) : 0;
    const remainingMonths = months - (years * 12);
    let totalString = years ? `${years} year${years > 1 ? 's' : ''}` : '';
    totalString += years && remainingMonths ? ', ' : '';
    totalString += remainingMonths ? `${remainingMonths} months` : '';

    return `${datesString} (${totalString})`;
  }
  

  get includesActiveTags(): boolean {
    return this.tagsInActiveTags.length > 0;
  }

  get tags() {
    return this.includesActiveTags ? this.activeTagsFirst : this.sortedTags;
  }

  get sortedTags() {
    return this.employment.tags.sort() || [];
  }

  get tagsInActiveTags() {
    return this.activeTags.filter(t => this.sortedTags.includes(t)).sort();
  }

  get activeTagsFirst() {
    const leftover = this.sortedTags.filter(t => !this.tagsInActiveTags.includes(t));
    return this.tagsInActiveTags.concat(leftover);
  }
}
</script>

<style scoped lang="stylus">
a
  display block

.h4
  margin-bottom -0.3em

.employment
  +$print()
    font-size 0.9em

  &__title
  &__company
    display inline-block
    margin-bottom 0

  &__title
    color: $theme.colors.secondary

  &__dateRange
    color: $theme.colors.accent
    font-family: $theme.font.family.secondary
    font-size 1.1em
    // font-weight: $theme.font.weight.bold
    margin-bottom 0.2em

    +$print()
      font-size 0.9em

  &__summary
    +$print()
      font-size 0.8em

  &__tags
    margin-bottom 1em
</style>
