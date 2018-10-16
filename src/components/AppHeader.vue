<template lang="pug">
  div.header.print-page
    a.linkedInIcon.screen(alt="View Michael Minor's LinkedIn profile" :href="linkedIn" target="_blank")
      v-icon(color="primary" large) mdi-linkedin-box
    v-container()
      v-layout(align-center justify-center row wrap)
        v-flex(xs10 sm6 md5 lg4).p3
          img(src="../assets/me.jpg").me
        v-flex(xs12)
          h1.name Michael Minor
          div.ct.h2 Maker of Things + Creative Technologist
        v-flex(xs12 sm10 md9 lg7 xl6).summary.p10
          p.summary__header Planning, designing, developing, pitching, and sustaining brand creation/analysis/improvement for {{yearsIn}} years... And what I keep seeing is there is little value in being right when there is far greater value in knowing when you're wrong. And most importantly having a team to figure out what that means.
          p.summary__detail I have high functioning <a :href="aspergersUrl" target="_blank" class="aspergers">Aspergers</a>. It's a bit weird but I've focussed on its strengths since I was a child, so that's a thing.
        v-flex(xs12).screen
          a.pdfLink(:href="pdfUrl") Download PDF
        v-flex(xs12).print.printFooter
          p
            a(href="tel:3125766767") 312.576.6767
            br
            a(:href="emailHref") {{emailAddress}}
            br
            a(:href="linkedIn") {{linkedInLiteral}}
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { aspergersUrl } from '@/data/aspergersUrl';
import { emailAddress } from '@/data/emailAddress';
import { linkedIn, linkedInLiteral } from '@/data/linkedIn';
import { pdfUrl } from '@/data/pdfUrl';

@Component({})
export default class AppHeader extends Vue {
  public aspergersUrl = aspergersUrl;
  public emailAddress = emailAddress;
  public linkedIn = linkedIn;
  public linkedInLiteral = linkedInLiteral;
  public pdfUrl = pdfUrl;
  public yearsIn = moment().diff(moment('19981001'), 'years');

  get emailHref() {
    return `mailto:${emailAddress}`;
  }
}
</script>

<style scoped lang="stylus">
$printBg = linear-gradient(135deg, rgba($theme.colors.accent, 0.6), rgba($theme.colors.secondary, 0.9)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.7)), url("../assets/backgrounds/andre-benz-1092194-unsplash.jpg")

.header
  background-image: $printBg
  background-image: linear-gradient(135deg, rgba($theme.colors.accent, 0.6), rgba($theme.colors.secondary, 0.9)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.1)), url("../assets/backgrounds/andre-benz-1092194-unsplash--mobile.jpg")
  background-size cover
  background-position center center
  color white
  display flex
  text-align center
  text-shadow 0.1em 0.1em 1em rgba(black, 0.3)
  min-height 100vh

  +above(2)
    background-image: linear-gradient(135deg, rgba($theme.colors.accent, 0.6), rgba($theme.colors.secondary, 0.9)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.1)), url("../assets/backgrounds/andre-benz-1092194-unsplash.jpg")

  +$print()
    background-image $printBg

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
    font-size 4em

.aspergers
  color: lighten($theme.colors.primary, 20%)
  font-weight: $theme.font.weight.extraBold

.ct
  // color: $theme.colors.secondary
  color: lighten($theme.colors.secondary, 80%)
  font-size 2em
  font-weight: $theme.font.weight.bold
  margin-bottom 1em

.linkedInIcon
  $screen-only()
  position absolute
  top 1em
  right 1em
  color #0077B5

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
  font-size 0.9em
  font-weight bold
  letter-spacing 0.1em
  transition all 0.25s

  &:hover
    color white
    background: $theme.colors.primary
    box-shadow 0 0 1em rgba(white, 0.25)
    letter-spacing 0.2em
    text-decoration none
    text-shadow 0 0 0.33em rgba(black, 0.25), 0 0 1em rgba(white, 0.5)
    transform scale(1.1)

.printFooter
  color: lighten($theme.colors.primary, 33%)
  font-weight: $theme.font.weight.extraBold
  letter-spacing 0.1em
  line-height 2em
</style>
