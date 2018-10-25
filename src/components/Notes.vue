<template lang="pug">
div.notes
  h2 Notes
  p Hope at this point, there's a few things ya want to jot down. Here ya go! Or doodle... Or play tick tack toe... Enjoy!
  hr(v-for="n in 40")
</template>

<style scoped lang="stylus" scoped>
.notes
  max-height 95vh
  overflow hidden

p
  font-size 0.8em
  margin-bottom 3em

hr
  margin 0
  margin-bottom 1.6em
  border none
  border 1px dotted lighten(black, 75%)
</style>
