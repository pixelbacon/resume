<template lang="pug">
  v-app
    DebugVue.screen
    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DebugVue from '@/components/Debug.vue';

@Component({
  components: {
    DebugVue,
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
