<template lang="pug">
a(v-if="enableDebug" @click="toggle").debug.screen-only
  div(v-if="toggleDebug" key="info").debug__info
    div version:
      span.val {{version}}
    div $vuetify:
      span.val {{ $vuetify.breakpoint.name }}
    div breakpoint:
      span.val {{ $vuetify.breakpoint }}
  div(v-else key="cta").debug__cta
    v-icon(dark small) bug_report
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  namespace,
} from 'vuex-class';

const appModule = namespace('app');

@Component({})
export default class Debug extends Vue {
  @appModule.State('version') public version: string;

  public enableDebug: boolean = process.env.VUE_APP_ENABLE_GUI_DEBUG || false;
  public toggleDebug: boolean = false;

  public toggle(): void {
    this.toggleDebug = !this.toggleDebug;
  }
}
</script>

<style lang="stylus" scoped>
.debug
  position fixed
  top 0
  left 0
  z-index 100

  +at(3)
    max-width 50%

  +above(4)
    max-width 100%

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
