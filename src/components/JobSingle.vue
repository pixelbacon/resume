<template lang="html">
  <div class="job">
    <h4 class="title">
      {{job.title}}
    </h4>
    <div class="company">
      <a target="_blank" v-if="job.companyUrl" :href="job.companyUrl">
        {{job.company}}
      </a>
      <span v-if="!job.companyUrl">
        {{job.company}}
      </span>
    </div>
    <div class="dateRange">
      {{job.dateRange}}
    </div>
    <div class="summary">
      <p>
        {{job.summary}}
      </p>
    </div>
    <div class="tags" v-if="job.tags">
      <ul>
        <li v-for="(tag, index) in job.tags" :key="index">{{tag}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const _name = 'jobSingle'

export default {
  name: _name,
  props: ['job']
}
</script>

<style lang="scss" scoped>
@import "../components";

.job {
  margin-bottom: 1.5em;

  .title {
    margin-bottom: 0.1em;
  }

  .company {
    font-size: 1.1em;
    font-weight: bold;
  }

  .dateRange {

  }

  .summary {
    font-size: 0.9em;
  }
}
</style>
