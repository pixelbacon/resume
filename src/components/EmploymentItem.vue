<template lang="pug">
  div.employment
    div.h4
      //- span.atBreaker @
      div.employment__company
        a(v-if="employment.companyUrl" :href="employment.companyUrl" target="_blank") {{employment.company}}
        span(v-else) {{employment.company}}
      div.employment__title {{employment.title}}
    //- div.employment__dateRange {{calculatedDate(employment)}}
    div.employment__dateRange {{formattedDates}}
    div.employment__summary
      p {{employment.summary}}
    ul.employment__bulletPoints
      li(v-for="(point, index) in employment.bulletPoints" :key="index").employment__bulletPoints__point {{point}}
    ExpandVue
      div(v-if="hasFilters && !hasActivePersona").employment__tags
        EmploymentTagVue(v-for="(tag, index) in tags" :key="index" small :tag-text="tag")
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { dateFormat } from '@/data/dateFormat';
import EmploymentTagVue from '@/components/EmploymentTag.vue';
import ExpandVue from '@/components/Expand.vue';
import IEmployment from '@/types/IEmployment';
import IMomentRange from '@/types/IMomentRange';

const employmentModule = namespace('employment');
const personaModule = namespace('persona');

@Component({
  components: {
    EmploymentTagVue,
    ExpandVue,
  },
})
export default class EmploymentItem extends Vue {
  @Prop({required: true}) public employment!: IEmployment;

  @employmentModule.State('activeTags') public activeTags!: string[];
  @employmentModule.Getter('hasFilters') public hasFilters!: boolean;
  @personaModule.Getter('hasActivePersona') public hasActivePersona!: boolean;

  public monthsBetweenDates(dateSet: IMomentRange): number {
    const diff = Math.floor(moment.duration(dateSet[1].diff(dateSet[0])).as('months'));
    return diff;
  }

  get formattedDates(): string {
    let months = 0;
    this.employment.dates.forEach( (startEnd: IMomentRange) => {
      months += this.monthsBetweenDates( startEnd );
    });

    let datesString = '';
    this.employment.dates.forEach((startEnd: IMomentRange, index: number) => {
      if (this.employment.dates.length > 1 && (index) < this.employment.dates.length && index > 0) {
        datesString += ', ';
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

  get tags(): string[] {
    return this.includesActiveTags ? this.tagsInActiveTags : this.sortedTags;
    // return this.includesActiveTags ? this.hasActivePersona ? this.activeTagsFirst : this.tagsInActiveTags : this.sortedTags;
  }

  get sortedTags(): string[] {
    return this.employment.tags.sort() || [];
  }

  get tagsInActiveTags(): string[] {
    return this.activeTags.filter((t: string) => this.sortedTags.includes(t)).sort();
  }

  get activeTagsFirst(): string[] {
    const leftover = this.sortedTags.filter((t: string) => !this.tagsInActiveTags.includes(t));
    return this.tagsInActiveTags.concat(leftover);
  }
}
</script>

<style scoped lang="stylus">
a
  display block

.h4
  margin-bottom -0.3em

+b('employment')
  +$print()
    // font-size 0.9em

  +e('bulletPoints')
    margin-bottom 1.5em

    +e('point')
      font-style italic

  +e('title')
    color: $theme.colors.secondary
    // display inline-block
    margin-bottom 0

  +e('company')
    display inline-block
    margin-bottom 0

  +e('dateRange')
    color: $theme.colors.accent
    font-family: $theme.font.family.secondary
    font-size 1.1em
    // font-weight: $theme.font.weight.bold
    margin-bottom 0.2em

    +$print()
      font-size 0.9em

  +e('summary')
    +$print()
      font-size 0.8em

  +e('tags')
    margin-top -0.5em
    margin-bottom 1.5em
</style>
