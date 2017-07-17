<template lang="html">
  <div class="process">
    <h2>Process</h2>
    <ol>
      <li v-for="(item, index) in $root.$data.process" :key="index">
        {{item}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../components";

.process {

}
</style>
