<template lang="pug">
  div.fullComponent
    p {{msg}}
    p {{computedMessage}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HelloWorld extends Vue {
  // Variables replace
  public variableOne = false;

  @Prop() private msg!: string;

  /**
   * Called when Vue creates the component, before mounting it.
   * @return {Boolean} `true`
   */
  public created() {
    return true;
  }

  /**
   * Called when component is mounted.
   * @return {Boolean} `true`
   */
  public mounted() {
    return true;
  }

  /**
   * Methods can be declared outside of the methods{} per usual component.
   * @return {Boolean} `true`
   */
  public methodOne() {
    return true;
  }

  /**
   * Vue's `computed` are straight up `getters` when using TypeScript.
   * @return {string} Blank, example string.
   */
  get computedMsg() {
    return `${this.msg} - woot`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
