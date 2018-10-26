<template lang="pug">
  div(:class="classes" v-scroll="onScroll")
    div(@click.stop="onFilterToggleClick").filterBar__cover
    v-container(fluid).filterBar__container
      div.filterBar__bg
        div(ref="progressBar").filterBar__progressBar
      v-layout(row wrap align-center justify-space-between)
        v-flex
          h1.filterBar__name Michael Minor
          ExpandVue
            div(v-if="scrolled").filterBar__title {{currentPersona.title}}
        v-flex.filterBar__tools
          ul
            li
              LinkedInIconVue(large)
            li
              a(title="Toggle Filters" @click.stop="onFilterToggleClick")
                v-icon(color="primary" large) mdi-filter-outline
      ExpandVue
        div(v-if="showFilters").filterBar__filters
          hr
          PersonaTagsVue.filterBar__filters__set.filterBar__personas
</template>

<script lang="ts">
import { TweenMax } from 'gsap';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { personas } from '@/data';
import { IPersona } from '@/@types';
import PersonaTagsVue from '@/components/PersonaTags.vue';
import ExpandVue from '@/components/Expand.vue';
import LinkedInIconVue from '@/components/LinkedInIcon.vue';
import EmploymentTagVue from '@/components/EmploymentTag.vue';

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

  @Watch('showFilters')
  public onShowFiltersChanged(val: boolean, oldVal: boolean) {
    const db = document.body as HTMLElement;
    const dde = document.documentElement as HTMLElement;
    db.style.overflowY =
    dde.style.overflowY = val ? 'hidden' : 'auto';

    if (val) {
      document.body.addEventListener('touchmove', this.onBodyTouch, { passive: false });
    } else {
      document.body.removeEventListener('touchmove', this.onBodyTouch);
    }
  }

  public get classes(): object {
    return {
      [`${cssName}`]: true,
      [`${cssName}--scroll`]: this.scrolled || this.showFilters,
      [`${cssName}--showFilters`]: this.showFilters,
      // [`${cssName}--scroll`]: this.scrolled && this.scrollDirection === 'up',
    };
  }

  public onBodyTouch(e: Event): void {
    if (this.showFilters) {
      e.preventDefault();
    }
  }

  public get documentHeight(): number {
    const db = document.body as HTMLElement;
    const dde = document.documentElement as HTMLElement;
    return Math.max(db.scrollHeight, dde.scrollHeight, db.offsetHeight, dde.offsetHeight, db.clientHeight, dde.clientHeight);
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
    const yPos: number = window.scrollY;
    this.scrollDirection = this.scrollPosition > yPos ? 'up' : 'down';
    this.scrollPosition = yPos;
    this.scrolledPast = this.scrollPosition > 100;
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
  position fixed
  top -1px
  left 0
  width 100%
  z-index: $depths.filterBar
  max-height 100vh
  overflow visible
  padding-top 0.5em
  transition all 0.5s

  +above(3)
    padding-top 1em

  +above(4)
    padding-top 2em

  +m('scroll')
    padding-top 0

    +e('filters')
      opacity 1
      transform translateY(0)

    +e('bg')
      opacity 1
      transform translateY(0)

  +m('showFilters')
    +e('cover')
      opacity 0.75
      top 0

  +e('bg')
    // background: darken($theme.colors.secondary, 20%)
    background: $backgrounds.primary
    box-shadow 0 0 3em rgba(black, 0.5)
    transform translateY(-100%)
    transition all 0.5s
    display block
    content ' '
    opacity 0
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    z-index -1

  +e('cover')
    background black
    display block
    content ' '
    opacity 0
    position fixed
    top 100%
    left 0
    right 0
    bottom 0
    transition all 0.5s
    z-index -1

  +e('progressBar')
    background black
    border-right: 1px solid $theme.colors.secondary
    box-shadow 0 0 2em rgba(black, 1)
    opacity 0.2
    position absolute
    top 0
    left 0
    width 0
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
    opacity 0
    transform translateY(-15%)
    transition all 0.5s

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

  +e('name')
    font-size 12px
    font-size 6vw
    line-height 0.8em
    padding-bottom 0

    +above(3)
      font-size 5vw

    +above(4)
      font-size 2em

  +e('title')
    color: $theme.colors.info
    font-weight: $theme.font.weight.extraBold
    font-size 0.8em
    font-size 4vw
    // font-style italic
    // opacity 0.8

    +above(3)
      font-size 2.5vw

    +above(4)
      font-size 1.5em

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

