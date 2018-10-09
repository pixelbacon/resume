<template lang="pug">
  div.employment
    div.h4
      div.employment__title {{employment.title}}
      span.atBreaker @
      div.employment__company
        a(v-if="employment.companyUrl" :href="employment.companyUrl" target="_blank") {{employment.company}}
        span(v-else) {{employment.company}}
    div.employment__dateRange {{calculatedDate(employment)}}
    div.employment__summary
      p {{employment.summary}}
    //- div.employment__tags(v-if="sortedTags")
    //-   div.employment__tags__tag(v-for="(t, i) in sortedTags" :key"i")
      //- v-chip.employment__tags__tag(v-for="(tag, index) in tags" :key"index") {{tag}}
    //- div {{sortedTags}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from '@/data';

@Component({})
export default class EmploymentItem extends Vue {
  @Prop() private employment!: any;

  public dateRange(job: any) {
    const diff = job.dateEnd ? Math.round(job.dateEnd.diff(job.dateStart, 'months', true)) : 0;
    let diffString = '';
    if (diff) {
      const years = diff >= 12 ? Math.floor(diff / 12) : 0;
      const months = diff - (12 * years);
      diffString = years ? `${years} year${years > 1 ? 's' : ''}` : '';
      diffString += years && months ? ', ' : '';
      diffString += months ? `${months} months` : '';
    }
    return job.dateRange || `(${diffString})`;
  }

  public dateStartStop(job: any) {
    return `${job.dateStart.format(data.dateFormat)} - ${job.dateEnd.format(data.dateFormat)}`;
  }

  public calculatedDate(job: any) {
    return job.dateRange ? job.dateRange : `${this.dateStartStop(job)} ${this.dateRange(job)}`;
  }

  public get sortedTags() {
    return this.employment.tags.sort() || [];
  }
}
</script>

<style scoped lang="stylus">
a
  display block

.h4
  margin-bottom -0.3em

.employment
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

  &__summary
    +$print()
      font-size 0.7em
    // color: $theme.colors.secondary

// .employment
//   &__name
//
//   &__company
//
//   &__title
</style>
