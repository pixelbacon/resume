<template lang="pug">
  button(type="button" :class="classes" @click="$emit('toggle', index)") {{title}}
</template>

<script>
const name = 'filterToggle'
const cssClass = 'btn'

export default {
  name,
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    collection: {
      type: [Array, Object],
      required: true
    },
    index: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    classes() {
      return {
        [name]: true,
        [`${cssClass}`]: true,
        [`${cssClass}-light`]: !this.active,
        [`${cssClass}-dark`]: this.active
      }
    },
    title() {
      return this.collection[this.index]
    }
  }
}
</script>

<style lang="css">
</style>
