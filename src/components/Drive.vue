<template lang="html">
  <div class="drive">
    <h2>Drive</h2>

    <img src="../assets/importance.png" alt="">
  </div>
</template>

<script>
const NAME = 'drive'

export default {
  name: NAME
}
</script>

<style lang="scss" scoped>
@import "../components";

.drive {
  img {
    width: 100%;
    height: auto;
  }

  @include print(){
    img {
      max-height: 20vh;
      width: auto;
    }
  }
}
</style>
