<template lang="pug">
div.personaTags
  //- h3 Hats
  p I've worn quite a lot hats in my many, many years of a self taught career. This may seem 'over the top' (pun intended) but it should be helpful.
  p
    PersonaTagVue(v-for="(persona, key) in personas" :key="key" outline :persona="persona")
    //- a(v-for="(PersonaTag, key) in PersonaTags" :key="key") {{PersonaTag.title}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { personas } from '@/data';
import PersonaTagVue from '@/components/PersonaTag.vue';

@Component({
  components: {
    PersonaTagVue,
  },
})
export default class SimpleComponent extends Vue {
  public personas = personas;
}
</script>

<style lang="stylus" scoped>
+b('personaTags')
  color white
  text-align center

+$hTags()
  color white
</style>
