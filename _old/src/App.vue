<template lang="pug">
  div#app
    debug
    router-view
</template>

<script>
import Debug from '@/components/Debug'

const name = 'app'

export default {
  name,
  components: {
    Debug
  }
}
</script>

<style lang="stylus">
@require('@/assets/styles/main')

#app
  background: linear-gradient(135deg, rgba(white, 0.6), rgba(white, 0.3)) repeat, url("assets/patterns/concrete_seamless.png");
  //   color: #2c3e50;

// #app {
//   font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   background: linear-gradient(135deg, rgba(white, 0.6), rgba(white, 0.3)) repeat, url("assets/patterns/concrete_seamless.png");
//   color: #2c3e50;
//
//   .bodyContainer {
//     h2 {
//       border-bottom: 1px solid rgba(black, 0.05);
//       padding-bottom: 0.25em;
//       margin-top: 1em;
//       margin-bottom: 0.5em;
//     }
//   }
//
//   @include print(){
//     background: white;
//   }
// }
</style>
