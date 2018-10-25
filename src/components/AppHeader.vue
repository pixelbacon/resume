<template lang="pug">
  div(:class="cssClass").header.print-page
    div.header__bg.screen
    LinkedInIconVue(:large="true")
    v-container()
      v-layout(align-center justify-center row wrap)
        v-flex(xs10 sm6 md4 lg3).p4
          img(src="../assets/me.jpg").me
        v-flex(xs12)
          h1.name Michael Minor
          div.subTitle.h2 {{currentPersona.subTitle}}
        v-flex(xs12 sm10 md9).summary.p10
          div.header__description
            p(v-for="(p, index) in currentPersona.description" :key="index") {{p}}
          //- p.summary__detail I have high functioning <a :href="aspergersUrl" target="_blank" class="aspergers">Aspergers</a>. It's a bit weird but I've focussed on its strengths since I was a child, so that's a thing.
        v-flex(xs12).screen
          a.pdfLink(:href="pdfUrl.url") Download PDF
        v-flex(xs12).print.printFooter
          hr
          p
            //- a(href="tel:3125766767") 312.576.6767
            //- br
            a(:href="emailHref") {{emailAddress}}
            br
            a(:href="linkedIn") {{linkedInLiteral}}
          hr
          p.interactive For the interactive version, head to:
            br
            a(:href="resumeUrl") {{url}}
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { aspergersUrl, linkedIn, emailAddress, linkedInLiteral, resumeUrl } from '@/data';
import { IPersona, IPdfUrl } from '@/@types';
import LinkedInIconVue from '@/components/LinkedInIcon.vue';

const cssName = 'header';
const personaModule = namespace('persona');

@Component({
  components: {
    LinkedInIconVue,
  },
})
export default class AppHeader extends Vue {
  public aspergersUrl: string = aspergersUrl;
  public emailAddress: string = emailAddress;
  public linkedIn: string = linkedIn;
  public linkedInLiteral: string = linkedInLiteral;
  public resumeUrl: string = resumeUrl;
  public yearsIn: number = moment().diff(moment('19981001'), 'years');

  @personaModule.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @personaModule.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @personaModule.Getter('isPersonaMaker') public isPersonaMaker!: boolean;
  @personaModule.Getter('pdfUrl') public pdfUrl!: IPdfUrl;
  @personaModule.State('currentPersona') public currentPersona!: IPersona;

  public get cssClass(): object {
    return {
      [cssName]: true,
      [`${cssName}--developer`]: this.isPersonaDeveloper,
      [`${cssName}--maker`]: this.isPersonaMaker,
      [`${cssName}--founder`]: this.isPersonaFounder,
    };
  }

  get emailHref(): string {
    return `mailto:${emailAddress}`;
  }

  get url(): string {
    return `${this.resumeUrl}/#${this.currentPersona.slug}`;
  }
}
</script>

<style scoped lang="stylus">
$printBg = linear-gradient(135deg, rgba($theme.colors.accent, 0.6), rgba($theme.colors.secondary, 0.9)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.7)), url("../assets/backgrounds/andre-benz-1092194-unsplash.jpg")

+b('header')
  background-image: $printBg
  background-image: linear-gradient(to bottom, rgba(black, 0.25) 0%, rgba(black, 0.5) 100%), linear-gradient(135deg, rgba($theme.colors.accent, 0.6), rgba($theme.colors.secondary, 0.9)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.1))
  background-position center center
  color white
  display flex
  text-align center
  text-shadow 0.1em 0.1em 1em rgba(black, 0.3)
  min-height 100vh
  padding 2em 0
  position relative
  transition all 0.5s

  +$print()
    background none
    border: 1px solid $theme.colors.primary
    color black
    text-shadow none

  +above(2)
    // background-image: linear-gradient(135deg, rgba($theme.colors.accent, 0.6), rgba($theme.colors.secondary, 0.9)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.1))

  +m('developer')
    +e('bg')
      // background-image url("../assets/backgrounds/david-kovalenko-414249-unsplash.jpg")
      background-image url("../assets/backgrounds/developer-mixed.jpg")

  +m('founder')
    +e('bg')
      background-image url("../assets/backgrounds/andre-benz-1092194-unsplash.jpg")
      // background-image url("../assets/backgrounds/tabea-damm-579138-unsplash.jpg")

  +m('maker')
    +e('bg')
      background-image url("../assets/backgrounds/emmad-216134-unsplash.jpg")
      background-position center center
      // background-image url("../assets/backgrounds/developer.jpg")

  +e('bg')
    background-position center center
    background-size cover
    content ' '
    display block
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1

  +e('description')
    font-size 1.2em

    p
      $smallerByTypeOf()
    // p
    //   for $num in (1..6)
    //     $fontSize = (1 - (0.1 * $num)) * 1em
    //     &:nth-of-type({$num})
    //       font-size $fontSize

a
  +$print()
    color: lighten($theme.colors.primary, 20%) !important

p
  +$print()
    // font-size 0.5em

h1
  border-bottom none

hr
  border-color: $theme.colors.secondary
  width 50%
  margin-left auto
  margin-right auto

.me
  border-radius 999px
  box-shadow: 0 0 3em rgba(black, 0.3), 0 0 6em rgba($theme.colors.secondary, 0.33), 0 0 100vw rgba($theme.colors.secondary, 1)
  overflow hidden
  margin-bottom 1em
  width 100%
  height auto

  +$print()
    border 0.33em solid white
    box-shadow none
    margin-bottom 0

  img
    width 100%
    height auto

.name
  color white
  font-size 2em
  margin 0
  margin-bottom -0.5em

  +above(2)
    font-size 4em

  +$print()
    color black
    font-size 4em

.aspergers
  color: lighten($theme.colors.primary, 20%)
  font-weight: $theme.font.weight.extraBold

.subTitle
  color: $theme.colors.info
  // color: lighten($theme.colors.secondary, 80%)
  font-size 2em
  font-weight: $theme.font.weight.bold
  margin-bottom 1em

.linkedInIcon
  $screen-only()
  position absolute
  top 1em
  right 1em
  color #0077B5
  z-index 1

.interactive
  +$print()
    font-weight normal
    color black

    a
      color: $theme.colors.primary
      font-weight: $theme.font.weight.bold

.summary
  &__header
    +$screen()
      font-size 1.2em

  &__detail
    $centerWidth(80%)

    +$screen()
      font-weight: $theme.font.weight.bold

.pdfLink
  border: 1px solid $theme.colors.primary
  display inline-block
  margin 0 auto
  margin-top 1em
  padding 0.4em 0.6em
  font-size 1.2em
  font-weight bold
  // letter-spacing 0.1em
  transition all 0.25s

  &:hover
    color white
    background: $theme.colors.primary
    border-radius 0.33em
    box-shadow 0 0 1em rgba(white, 0.25)
    letter-spacing 0.1em
    text-decoration none
    text-shadow 0 0 0.33em rgba(black, 0.25), 0 0 1em rgba(white, 0.5)
    transform scale(1.1)

.printFooter
  color: lighten($theme.colors.primary, 33%)
  font-weight: $theme.font.weight.extraBold
  letter-spacing 0.1em
  line-height 2em
</style>
