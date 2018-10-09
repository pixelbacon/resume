<template lang="pug">
  div.header
    a.linkedInIcon(alt="View Michael Minor's LinkedIn profile" :href="$root.$data.linkedIn")
      icon(name="linkedin-square" scale="2")
    v-container
      v-layout(align-center justify-center wrap)
        v-flex(xs10 sm8 md6)
          img(src="../assets/me.jpg").me
        v-flex(xs12)
          h1.name Michael Minor
          div.ct Creative Technologist
        v-flex(md11 lg9).summary__head
          p Creative Brand Technologist using vast amounts of energy to pursue new business ventures. The fields have varied greatly to which I have been involved, strongly sustaining enthusiasm and passion in my work.
        v-flex(sm10 lg7).summary__head
          p From guerrilla marketing to big budget ad campaigns I have helped in one way major or another. Planning, designing, developing, pitching, and brand analysis/improvement have all been major requirements within my pursuits that started when I was 16 years old; {{yearsIn}} years. And what I do know... there is no value in being right. However there is immense in knowing when you're wrong and having a team to figure out what's right; titles be damned.
          p I also have high functioning Aspergers. It's weird, to say the least.
        v-flex(xs12).screen-only
          a.pdfLink(:href="$root.$data.pdf") Download PDF
        v-flex.print-only.printFooter
          hr
          a(href="tel:3125766767") 312.576.6767
          a(:href="('mailto:' + $root.$data.email)") {{$root.$data.email}}
          a(:href="$root.$data.linkedIn") {{$root.$data.linkedInLiteral}}
</template>

<script>
import moment from 'moment'
const name = 'appHeader'

export default {
  name,
  data: () => ({
    yearsIn: moment().diff(moment('19981001'), 'years')
  })
}
</script>

<style lang="stylus" scoped>
.header
  background linear-gradient(0deg, rgba(black, 1), rgba(black, 0.33)), url("../assets/patterns/footer_lodyas.png")
  color white
  padding 4em 0em
  text-align center

  .me
    border-radius 999px
    overflow hidden
    box-shadow 0 0 2em rgba(black, 0.66)
    content ' '
    margin-bottom 1em

    img
      width 100%
      height auto

  .name
    color white
    font-size 2.2em
    margin 0

  .ct
    color lighten(blue, 30)
    font-size 1.33em
    margin-bottom 1em

  .linkedInIcon
    $screen-only()
    position absolute
    top 1em
    right 1em
    color #0077B5

  .summaryDetail
    font-size 0.9em

  .pdfLink
    border 1px solid $link-color
    margin 0 auto
    padding 0.4em 0.6em
    font-size 0.75em
    font-weight bold
    letter-spacing 0.1em
    transition all 0.25s

    &:hover
      color white
      background: $link-color
      border-color rgba(black, 0.15)
      box-shadow 0 0 1em rgba(white, 0.25)
      letter-spacing 0.2em
      text-decoration none
      text-shadow 0 0 0.33em rgba(black, 0.25), 0 0 1em rgba(white, 0.5)

  .printFooter
    $print-only()

  $print()
    border 1px solid lighten(black, 80)
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
