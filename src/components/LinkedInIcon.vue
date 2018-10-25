<template lang="pug">
  a.linkedInIcon.screen(alt="View Michael Minor's LinkedIn profile" :href="linkedIn" target="_blank")
    v-icon(color="primary" :large="large") mdi-linkedin-box
</template>

<script lang="ts">
import { linkedIn, linkedInLiteral } from '@/data';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LinkedInIcon extends Vue {
  @Prop(Boolean) public large!: boolean;

  public linkedIn: string = linkedIn;
}
</script>
