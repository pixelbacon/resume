<template lang="pug">
  div.header.print-page
    a.linkedInIcon.screen(alt="View Michael Minor's LinkedIn profile" :href="linkedIn" target="_blank")
      v-icon(color="primary" large) mdi-linkedin-box
    v-container()
      v-layout(align-center justify-center row wrap)
        v-flex(xs10 sm6 md5 lg3).p4
          img(src="../assets/me.jpg").me
        v-flex(xs12)
          h1.name Michael Minor
          div.ct.h2 Maker of Things + Creative Technologist
        v-flex(xs12).summary.p10
          p.summary__header Planning, designing, developing, pitching, and sustaining brand creation/analysis/improvement are all within my pursuits. I started learning all the things {{yearsIn}} years ago. And what I keep noticing; there is little value in being right. There is however, far greater value in knowing when you're wrong and having a team to figure out what is right.
          p.summary__detail I have high functioning <a :href="aspergers" target="_blank" class="aspergers">Aspergers</a>. It's a bit weird but I've focussed on it's strengths since I was a child, so that's a thing.
        v-flex(xs12).screen
          a.pdfLink(:href="pdf") Download PDF
        v-flex(xs12).print.printFooter
          p
            a(href="tel:3125766767") 312.576.6767
            br
            a(:href="('mailto:' + email)") {{email}}
            br
            a(:href="linkedIn") {{linkedInLiteral}}
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import data from './../data';

@Component({})
export default class AppHeader extends Vue {
  public aspergers = 'https://www.autismspeaks.org/what-asperger-syndrome';
  public email = data.email;
  public linkedIn = data.linkedIn;
  public linkedInLiteral = data.linkedInLiteral;
  public pdf = data.pdf;
  public yearsIn = moment().diff(moment('19981001'), 'years');
}
</script>

<style scoped lang="stylus">
.header
  display flex
  text-align center
  height 100vh
  min-height 100vh

  +$screen()
    background: linear-gradient(135deg, rgba($theme.colors.accent, 0.3), rgba($theme.colors.secondary, 0.0)), linear-gradient(0deg, rgba($theme.colors.secondary, 0.7), rgba($theme.colors.primary, 0.1)), url("../assets/patterns/footer_lodyas.png")
    color white
    text-shadow 0.1em 0.1em 1em rgba(black, 0.3)

  +$print()
    border: 1px solid $theme.colors.accent

p
  +$print()
    // font-size 0.5em

.printFooter
  line-height 2em

h1
  border-bottom none

hr
  border-color: $theme.colors.secondary
  width 50%
  margin-left auto
  margin-right auto

.me
  border-radius 999px
  overflow hidden
  content ' '
  margin-bottom 1em
  width 100%
  height auto

  +$screen()
    box-shadow 0 0 2em rgba(black, 0.66)

  img
    width 100%
    height auto

.name
  margin 0

  +$screen()
    color white

.aspergers
  font-weight: $theme.font.weight.extraBold

.ct
  color: lighten($theme.colors.primary, 50%)
  font-size 1.33em
  margin-bottom 1em

  +$print()
    color: $theme.colors.secondary

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
    $print-only()

    $print()
      border 1px solid $theme.colors.secondary
      color black
      height 100vh
      width 100vw
      padding 0
      margin 0

      .container
        width 76vw
        height auto
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

      .name
        color black

      .summaryDetail
        color lighten(black, 20)
</style>
