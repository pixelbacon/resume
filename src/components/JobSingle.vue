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
      {{calculatedDate(job)}}
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
// import Moment from 'moment'
// import { extendMoment } from 'moment-range'
import data from '@/data'

const _name = 'jobSingle'
// const moment = extendMoment(Moment)

export default {
  name: _name,
  props: ['job'],
  methods: {
    calculatedDate(job) {
      return job.dateRange ? job.dateRange : `${this.dateStartStop(job)} ${this.dateRange(job)}`
    },
    dateRange(job) {
      let diff = job.dateEnd ? Math.round(job.dateEnd.diff(job.dateStart, 'months', true)) : null
      if (diff) {
        let years = diff >= 12 ? Math.floor(diff / 12) : null
        let months = diff - (12 * years)
        diff = years ? `${years} year${years > 1 ? 's' : ''}, ${months} months` : `${months} months`
      }
      return job.dateRange || `(${diff})`
    },
    dateStartStop(job) {
      return `${job.dateStart.format(data.dateFormat)} - ${job.dateEnd.format(data.dateFormat)}`
    }
  }
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
    font-size: 1em;
    font-weight: bold;
  }

  .dateRange {

  }

  .summary {
    font-size: 0.9em;
  }

  @include print(){
    .title {
      font-size: 1.1em;
      font-weight: bold;
    }
  }
}
</style>
