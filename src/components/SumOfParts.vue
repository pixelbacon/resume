<template lang="html">
  <div class="sumOfParts">
    <h2>
      Sum <span class="hidden-sm-down">of Parts</span>
    </h2>
    <img src="../assets/balance.png" alt="">
  </div>
</template>

<script>
const NAME = 'sumOfParts'

export default {
  name: NAME
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
