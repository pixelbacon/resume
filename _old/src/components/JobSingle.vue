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
      <p>]
        {{job.summary}}
      </p>
    </div>
    <div v-if="tags">
      <span class="badge badge-pill" :class="getBtnClass(tag)" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
    </div>
  </div>
</template>

<script>
// import Moment from 'moment'
// import { extendMoment } from 'moment-range'
import data from '@/data'

const NAME = 'jobSingle'
// const moment = extendMoment(Moment)

export default {
  name: NAME,
  props: {
    filteredTags: {
      type: Array,
      required: false,
      default: []
    },
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    tags() {
      return this.job.tags.sort()
    }
  },
  methods: {
    getBtnClass(tag) {
      // return 'btn-dark'
      return (this.filteredTags && this.filteredTags.includes(tag)) ? 'badge-primary' : 'badge-secondary'
    },
    calculatedDate(job) {
      return job.dateRange ? job.dateRange : `${this.dateStartStop(job)} ${this.dateRange(job)}`
    },
    dateRange(job) {
      let diff = job.dateEnd ? Math.round(job.dateEnd.diff(job.dateStart, 'months', true)) : null
      if (diff) {
        let years = diff >= 12 ? Math.floor(diff / 12) : null
        let months = diff - (12 * years)
        diff = years ? `${years} year${years > 1 ? 's' : ''}` : ''
        diff += years && months ? ', ' : ''
        diff += months ? `${months} months` : ''
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

  .badge {
    margin-bottom: 0.1em;
    margin-right: 0.5em;
  }

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
