<template lang="pug">
  section.process
    h2 Process
    ol
      li(v-for="(item, index) in process" :key="index") {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from './../data';

@Component({})
export default class Platter extends Vue {
  public process = data.process;
}
</script>
