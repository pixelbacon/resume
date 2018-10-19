<template lang="pug">
  div(:class="classes" v-scroll="onScroll")
    v-container(fluid).filterBar__container
      div(ref="progressBar").filterBar__progressBar
      v-layout(row wrap align-center justify-space-between)
        v-flex
          h1.filterBar__title Michael Minor
        v-flex.filterBar__tools
          ul
            li
              LinkedInIconVue(:large="largeIcons")
            li
              a(title="Toggle Filters" @click.stop="toggleFilters")
                v-icon(color="primary" :large="largeIcons") mdi-filter-outline
      ExpandVue
        div(v-if="showFilters").filterBar__filters
          hr
          PersonaTagsVue.filterBar__filters__set.filterBar__personas
          ExpandVue
            div(v-if="!hasActivePersona").filterBar__filters__set.filterBar__employment
              h4 Responsibilities
              p There's a lot going on in this resume... May be easier to use some filtering.
              p
                EmploymentTagVue(v-for="(tag, key) in tags" :key="key" :tag-text="tag")

</template>

<script lang="ts">
import { TweenMax } from 'gsap';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import {
  namespace,
} from 'vuex-class';
import { personas } from '@/data/personas';
import PersonaTagsVue from '@/components/PersonaTags.vue';
import ExpandVue from '@/components/Expand.vue';
import LinkedInIconVue from '@/components/LinkedInIcon.vue';
import EmploymentTagVue from '@/components/EmploymentTag.vue';

const employmentModule = namespace('employment');
const personaModule = namespace('persona');
const cssName: string = 'filterBar';

@Component({
  components: {
    EmploymentTagVue,
    ExpandVue,
    LinkedInIconVue,
    PersonaTagsVue,
  },
})
export default class FilterBar extends Vue {
  @employmentModule.State('tags') public tags!: string[];
  @personaModule.Getter('hasActivePersona') public hasActivePersona!: boolean;

  public personas = personas;
  public showFilters: boolean = false;
  public scrollDirection: string = '';
  public scrollPer: number = 0;
  public scrollPosition: number = 0;
  public scrolledPast: boolean = false;
  public scrolledUp: boolean = false;

  public get classes(): object {
    return {
      [`${cssName}`]: true,
      [`${cssName}--scroll`]: this.scrolled,
      // [`${cssName}--scroll`]: this.scrolled && this.scrollDirection === 'up',
    };
  }

  public get documentHeight(): number {
    const body: HTMLElement = document.querySelector('body') || document.body;
    return body.offsetHeight;
    // const body = document.body;
    // const html = document.documentElement;
    // return Math.max(body.scrollHeight, body.offsetHeight, body.getBoundingClientRect().height, html.clientHeight, html.scrollHeight, html.offsetHeight) || 0;
  }

  public get perRotation(): number {
    return (3.6 * this.scrollPer) - 90;
  }

  public get largeIcons(): boolean {
    return this.$vuetify.breakpoint.smAndUp;
  }

  public get scrolled(): boolean {
    return !!this.scrollPosition;
  }

  public get windowHeight(): number {
    return window.innerHeight;
  }

  @Watch('scrollPer')
  public onScrollPerChange(val: number, oldVal: number): void {
    TweenMax.to(this.$refs.progressBar, 0.2, {
      width: `${val}%`,
    });
  }

  public mounted(): void {
    this.checkScroll(0);
  }

  public checkScroll(yPos: number): void {
    this.scrollDirection = this.scrollPosition > yPos ? 'up' : 'down';
    this.scrollPosition = yPos;
    this.scrolledPast = this.scrollPosition > this.$el.clientHeight / 2;
    this.scrollPer = Math.ceil(yPos / (this.documentHeight - this.windowHeight) * 100);
    if (!this.scrolledPast) {
      this.showFilters = false;
    }
  }

  public toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  public onScroll(e: Event): void {
    const yPos: number = window.scrollY || (e.target as any).documentElement.scrollTop;
    this.checkScroll(yPos);
  }
}
</script>

<style lang="stylus" scoped>
+b('filterBar')
  position fixed
  top 0
  left 0
  width 100%
  z-index: $depths.filterBar

  +m('scroll')
    +e('tools')
      opacity 1

    +e('container')
      opacity 1
      transform translateY(0)

  +e('progressBar')
    background black
    opacity 0.2
    position absolute
    top 0
    left 0
    width 100%
    bottom 0
    display block
    content ' '
    z-index -1

  +e('container')
    background: darken($theme.colors.secondary, 20%)
    box-shadow 0 0 2em rgba(black, 0.5)
    color white
    opacity 0
    transform translateY(-100%)
    transition all 0.5s
    // top 0
    // left 0
    // width 100%

  +e('filters')
    +e('set')
      margin-bottom 2em

  +e('progress')
    position relative
    // top -1em
    // transform translateY(-10px)

    > svg
      transition all 1s

  +e('tools')
    opacity 0
    text-align right

    > ul li
      display inline
      margin-left 0.33em

      +above(3)
        margin-left 1em

  +e('title')
    font-size 12px
    font-size 6vw
    line-height 1em
    padding-bottom 0

    +above(3)
      font-size 2em

// .filterBar
//   &--scrolled

//     transform translateY(0)

//   &__container
//     background: $theme.colors.secondary
//     box-shadow 0 0 2em rgba(black, 0.5)
//     color white
//     position fixed
//     // top 0
//     // left 0
//     // width 100%
//     // transform translateY(-100%)
//     z-index: $depths.filterBar

hr
  margin 1em 0
  opacity 0.1

+$hTags()
  color white
  line-height 1em
</style>

