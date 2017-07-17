<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const _name = 'app'

export default {
  name: _name
}
</script>

<style lang="scss">
@import 'main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, rgba(white, 0.6), rgba(white, 0.3)) repeat, url("/static/patterns/concrete_seamless.png");
  color: #2c3e50;

  .bodyContainer {
    h2 {
      border-bottom: 1px solid rgba(black, 0.05);
      padding-bottom: 0.25em;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }
  }
}
</style>
