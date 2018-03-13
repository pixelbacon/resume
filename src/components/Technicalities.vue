<template lang="html">
  <div class="technicalities">
    <h2>Platter</h2>
    <ul>
      <li v-for="(item, index) in $root.$data.technicalities  " :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
const _name = 'technicalities'

export default {
  name: _name
}
</script>

<style lang="scss" scoped>
@import "../components";

.technicalities {
    @include breakpoint ($screen-sm) {
        ul > li {
            float: left;
            width: 50%;
        }
    }
    @include breakpoint ($screen-md) {
        ul > li {
            float: left;
            width: 33%;
        }
    }
    @include print() {
         @include clearfix();

        margin-bottom: 2em;

        ul > li {
            float: left;
            width: 50%;
            font-size: 0.8em;
        }
    }
}
</style>
