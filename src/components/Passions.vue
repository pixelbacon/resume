<template lang="html">
  <div class="passions">
    <h2>Passions</h2>
    <img src="static/passions.png" alt="">
  </div>
</template>

<script>
const _name = 'passions'

export default {
  name: _name
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
