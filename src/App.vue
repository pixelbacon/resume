<template lang="pug">
  v-app
    DebugVue.screen
    FilterBar.screen
    v-content
      router-view
    AppFooterVue.screen
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import moment from 'moment';
import AppFooterVue from '@/components/AppFooter.vue';
import DebugVue from '@/components/Debug.vue';
import FilterBar from '@/components/FilterBar.vue';
import UseFluid from '@/mixins/UseFluid';

const appModule = namespace('app');

@Component({
  components: {
    AppFooterVue,
    DebugVue,
    FilterBar,
  },
})
export default class App extends Mixins(UseFluid) {
  public clipped = false;
  public drawer = true;
  public fixed = false;
  public miniVariant = false;
  public right = true;
  public rightDrawer = false;
}
</script>

<style lang="stylus" scoped>
// .v-content
  // margin-bottom -1px
</style>

