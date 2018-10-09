<template lang="html">
  <div class="passions">
    <h2>Passions</h2>
    <img src="../assets/passions.png" alt="">
  </div>
</template>

<script>
const NAME = 'passions'

export default {
  name: NAME
}
</script>

<style lang="scss" scoped>
@import "../components";

.passions {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
