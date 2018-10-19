<template lang="pug">
transition(name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave")
  slot
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Expand',
  methods: {
    enter(element: HTMLElement): void {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = '0';

      // Trigger the animation.
      // We use `setTimeout` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element: HTMLElement): void {
      element.style.height = 'auto';
    },
    leave(element: HTMLElement): void {
      const height = getComputedStyle(element).height;

      element.style.height = height;

      setTimeout(() => {
        element.style.height = '0';
      });
    },
  },
});
</script>

<style scoped lang="stylus">
*
  will-change height
  transform translateZ(0)
  backface-visibility hidden
  perspective 1000px
</style>
