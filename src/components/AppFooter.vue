<template lang="pug">
  v-footer(dark height="auto").footer.screen
    v-container(:fluid="useFluid")
      v-layout(align-center justify-space-between)
        div.item Copyright {{year}}
        div.item Built w/ Typescript & Vue.
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Mixins, Vue } from 'vue-property-decorator';
import UseFluid from '@/mixins/UseFluid';

@Component
export default class App extends Mixins(UseFluid) {
  public get year(): string {
    return moment().format('YYYY');
  }
  }
</script>

<style lang="stylus" scoped>
+b('footer')
  background: linear-gradient(-45deg, darken($theme.colors.primary, 90%), darken($theme.colors.secondary, 90%)) !important
  box-shadow 0 0 3em rgba(black, 0.5)
  // font-size 0.8em !important
  z-index 1
</style>
