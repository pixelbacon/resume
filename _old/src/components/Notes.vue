<template lang="html">
  <div class="notes">
    <h4>Notes</h4>
    <p>I hope at this point, there's a few things ya want to jot down. Here ya go! Or doodle... Or play tick tack toe... Enjoy!</p>
    <hr v-for="n in 50"/>
  </div>
</template>

<script>
const NAME = 'notes'

export default {
  name: NAME
}
</script>

<style lang="scss" scoped>
@import "../components";
.notes {
  @include print-only();

  p {
    border-bottom: 1px solid black;
    font-size: 0.8em;
      margin-bottom: 1.4em;
  }

  hr {
    margin-bottom: 1.4em;
  }
}
</style>
