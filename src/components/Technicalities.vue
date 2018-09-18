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
const NAME = 'technicalities'

export default {
  name: NAME
}
</script>

<style lang="scss" scoped>
@import "../components";

.technicalities {
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        position: relative;
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
        // text-indent: 0;

        &:before {
          content: '\203A';
          content: '\2022';
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        @include breakpoint ($screen-sm) {
            width: 50%
        }

        @include breakpoint ($screen-md) {
            width: 33%
        }
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
