<template lang="pug">
a(v-resize="onResize" v-if="enableDebug" @click="toggleDebug = !toggleDebug").debug.screen-only
  div(v-if="toggleDebug" key="info").debug__info
    div version:
      span.val {{$root.version}}
    div bp:
      span.val {{ $vuetify.breakpoint.name }}
  div(v-else key="cta").debug__cta
    v-icon(dark small) bug_report
</template>

<script>
export default {
  data: () => ({
    enableDebug: process.env.ENABLE_GUI_DEBUG,
    toggleDebug: false
  }),
  mounted() {
    window.dynepic_debug = toggle => {
      const tog = toggle || !this.enableDebug
      this.enableDebug = tog
      return tog
    }
  },
  methods: {
    onResize() {}
  }
}
</script>

<style lang="stylus" scoped>
.debug
  position fixed
  top 0
  left 0
  z-index 100

  // +at(3)
  //   max-width 50%
  //
  // +above(4)
  //   max-width 100%

  &__cta,
  &__info
    padding 0.5em 0.66em
    background alpha(black, 80%)
    border-radius 0 0 4px 0
    color white
    font-size 12px
    font-weight $fontWeight-bold
    max-width: 80vw

  .val
    font-weight $fontWeight-light
    margin-left 0.33em
</style>
