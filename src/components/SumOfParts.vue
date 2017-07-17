<template lang="html">
  <div class="sumOfParts">
    <h2>
      Sum <span class="hidden-sm-down">of Parts</span>
    </h2>
    <img src="/static/balance.png" alt="">
  </div>
</template>

<script>
const _name = 'sumOfPaerts'

export default {
  name: _name
}
</script>

<style lang="scss" scoped>
@import "../components";

.sumOfParts {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
