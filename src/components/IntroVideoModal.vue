<template lang="pug">
  v-container(fluid fill-height).introVideo
    v-layout(align-center fill-height justify-space-between)
      v-flex.introVideo__contentContainer
        span.introVideo__videoContainer
          div.icon.introVideo__close
            v-btn(color="primary" fab ripple :small="$vuetify.breakpoint.xsAndDown")
              v-icon close
          video(controls).introVideo__video
            source(src="/media/michael-minor-resume-intro.mov")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class IntroVideoModalComponent extends Vue {}
</script>

<style scoped lang="stylus">
+b('introVideo')
  background: linear-gradient(45deg, rgba($theme.colors.secondary, 0.5) 0%, rgba($theme.colors.info, 0.5) 100%), linear-gradient(135deg, rgba($theme.colors.primary, 0.9) 0%, rgba($theme.colors.secondary, 0.9) 100%), black
  display block
  position fixed
  top 0
  left 0
  height 100%
  width 100%
  z-index 1000

  // +e('close')
  //   position absolute
  //   top 0
  //   right 0

  +e('contentContainer')
    position relative
    text-align center

  +e('videoContainer')
    display inline-block
    position relative

  +e('close')
    position absolute
    top 0
    right 0
    transform translate(50%, -50%)

  +e('video')
    background black
    border-radius 1em
    box-shadow 0 0 3em rgba(black, 0.33), 0 0 6em rgba(black, 0.33)
    overflow hidden
    width auto
    height 100%
    max-width 100%
</style>
