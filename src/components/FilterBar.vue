<template lang="pug">
  div(:class="classes" v-scroll="onScroll")
    v-container(fluid).filterBar__container
      div(ref="progressBar").filterBar__progressBar
      v-layout(row wrap align-center justify-space-between)
        v-flex
          h1.filterBar__title {{title}}
        v-flex.filterBar__tools
          ul
            li
              LinkedInIconVue(:large="largeIcons")
            li
              a(title="Toggle Filters" @click.stop="onFilterToggleClick")
                v-icon(color="primary" :large="largeIcons") mdi-filter-outline
      ExpandVue
        div(v-if="showFilters").filterBar__filters
          hr
          PersonaTagsVue.filterBar__filters__set.filterBar__personas
          //- ExpandVue
          //-   div(v-if="!hasActivePersona").filterBar__filters__set.filterBar__employment
          //-     h4 Responsibilities
          //-     p There's a lot going on in this resume... May be easier to use some filtering.
          //-     p
          //-       EmploymentTagVue(v-for="(tag, key) in tags" :key="key" :tag-text="tag")

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
import IPersona from '@/types/IPersona';

const appModule = namespace('app');
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
  @appModule.Action('hideFilters') public hideFilters!: () => void;
  @appModule.Action('toggleFilters') public toggleFilters!: () => void;
  @appModule.State('showFilters') public showFilters!: boolean;
  @employmentModule.State('tags') public tags!: string[];
  @personaModule.Getter('hasActivePersona') public hasActivePersona!: boolean;
  @personaModule.State('currentPersona') public currentPersona!: IPersona;

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

  public get title(): string {
    let t = 'Michael Minor';
    if (this.hasActivePersona) {
      t += `: ${this.currentPersona.title}`;
    }
    return t;
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
    this.checkScroll();
  }

  public checkScroll(e?: Event): void {
    const yPos: number = e ? (e.target as any).documentElement.scrollTop : window.scrollY;
    this.scrollDirection = this.scrollPosition > yPos ? 'up' : 'down';
    this.scrollPosition = yPos;
    this.scrolledPast = this.scrollPosition > this.$el.clientHeight / 2;
    this.scrollPer = Math.ceil(yPos / (this.documentHeight - this.windowHeight) * 100);
    // if (this.scrolledPast) {
    //   this.hideFilters();
    // }
  }

  public onFilterToggleClick(e: Event): void {
    this.toggleFilters();
  }

  public onResize = (e: Event) => this.checkScroll(e);

  public onScroll(e: Event): void {
    this.checkScroll(e);
  }
}
</script>

<style lang="stylus" scoped>
+b('filterBar')
  background: darken($theme.colors.secondary, 20%)
  box-shadow 0 0 2em rgba(black, 0.5)
  position fixed
  top 0
  left 0
  width 100%
  z-index: $depths.filterBar
  max-height 100vh
  overflow visible
  opacity 0
  transform translateY(-100%)
  transition all 0.5s

  +m('scroll')
    opacity 1
    transform translateY(0)

    // +e('tools')
    //   opacity 1

    // +e('container')

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
    color white
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

