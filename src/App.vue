<template lang="pug">
  v-app
    DebugVue.screen
    FilterBar.screen
    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DebugVue from '@/components/Debug.vue';
import FilterBar from '@/components/FilterBar.vue';

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
}
</script>

<style lang="stylus" scoped>
.filterBar
  position
</style>

