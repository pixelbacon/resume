<template lang="pug">
  v-app
    DebugVue.screen
    FilterBar.screen
    v-content
      router-view
    v-footer(app dark height="auto").footer
      v-container(fluid)
        v-layout(align-center justify-space-between)
          div.item Copyright {{year}}
          div.item Built w/ Typescript & Vue.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import moment from 'moment';
import DebugVue from '@/components/Debug.vue';
import FilterBar from '@/components/FilterBar.vue';

const appModule = namespace('app');

@Component({
  components: {
    DebugVue,
    FilterBar,
  },
})
export default class Home extends Vue {
  public clipped = false;
  public drawer = true;
  public fixed = false;
  public miniVariant = false;
  public right = true;
  public rightDrawer = false;

  public get year(): string {
    return moment().format('YYYY');
  }
}
</script>

<style lang="stylus" scoped>
.footer
  font-size 0.8em !important

.container
  padding 0 1em
</style>

