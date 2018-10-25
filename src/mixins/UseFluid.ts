// UseFluid.js
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class UseFluid extends Vue {
  public get useFluid() {
    return this.$vuetify.breakpoint.mdAndDown;
  }
}

export default UseFluid;
