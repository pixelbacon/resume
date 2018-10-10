<template lang="pug">
  div.moreOn
    h5.screen More on <a href="linkedIn">LinkedIn</a>.
    h5.print More on <a href="linkedIn">{{linkedInLiteral}}</a>.
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from './../data';

@Component({})
export default class MoreOn extends Vue {
  public linkedIn = data.linkedIn;
  public linkedInLiteral = data.linkedInLiteral;
}
</script>
