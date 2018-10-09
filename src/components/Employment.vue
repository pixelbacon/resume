<template lang="pug">
  section.employment
    h2 Employment
    v-layout(row wrap).employmentsContainer
      v-flex(xs12 v-for="(employment, index) in employment" :key="index")
        EmploymentItemVue(:employment="employment")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from './../data';
import EmploymentItemVue from '@/components/EmploymentItem.vue';

@Component({
  components: {
    EmploymentItemVue,
  },
})
export default class References extends Vue {
  public employment = data.employmentHistory;
}
</script>

<style scoped lang="stylus">
$padding = 0.2em

.employment
  +above(3)
    // padding 0 $padding 0 $padding
</style>
