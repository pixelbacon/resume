<template lang="html">
  <div class="employmentHistory">
    <div class="header">
      <h2>Employment</h2>
      <button class="btn btn-info" data-toggle="collapse" data-target="#filterPanel" aria-expanded="false" aria-controls="filterPanel">
        filter
      </button>
    </div>
    <div class="collapse" id="filterPanel">
      <div class="tags">
        <FilterToggle class="tags__tag" v-for="(tag, index) in tags" :key="index" :active="filters.tags.includes(index)" :collection="$root.$data.employmentTags" :index="index" v-on:toggle="toggleFilter"/>
      </div>
    </div>
    <div class="jobs">
      <jobSingle :job="job" v-if="index < cap" v-for="(job, index) in jobs" :key="index" :filtered-tags="filters.tags"></jobSingle>
    </div>
    <p class="linkedInIcon" v-if="jobs.length > cap">
      <a class="linkedIn" :href="$root.$data.linkedIn">
        More on
        &nbsp;
        <icon name="linkedin-square" scale="2"></icon>
      </a>
    </p>
    <div class="linkedInFull text-center">
      <hr />
      <p>
        More details can be found on <a :href="$root.$data.linkedIn">{{$root.$data.linkedInLiteral}}</a>
      </p>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import FilterToggle from './FilterToggle'
const NAME = 'employmentHistory'

export default {
  name: NAME,
  components: {
    FilterToggle
  },
  data: () => ({
    cap: 99,
    filters: {
      query: '',
      tags: []
    }
  }),
  computed: {
    jobs() {
      if (this.filters.tags.length) {
        return this.$root.$data.employmentHistory.filter((job, key) => {
          // console.log('filters changed...')
          // console.log('this.filters.tags', this.filters.tags)
          // console.log('job.tags', job.tags)
          let matchedCount = 0
          this.filters.tags.forEach((key, tag) => {
            if (job.tags.includes(key)) {
              matchedCount++
            }
          })
          // return job.tags.includes(...this.filters.tags)
          return matchedCount === this.filters.tags.length
        })
      }
      return this.$root.$data.employmentHistory
    },
    tags() {
      return this.$root.$data.employmentTags
    }
  },
  methods: {
    toggleFilter(tagIndex) {
      if (this.filters.tags.includes(tagIndex)) {
        delete this.filters.tags.splice(this.filters.tags.indexOf(tagIndex), 1)
        return
      }
      this.filters.tags.push(tagIndex)
      // alert(`tagIndex: ${tagIndex}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../components";

.employmentHistory {
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #filterPanel > .card {
      margin-bottom: 2em;
      padding: 1em;
    }

    .linkedInIcon {
        @include screen-only();

        .linkedIn {
          background: black;
          color: white;
          font-weight: 700;
          padding: 1em;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          transition: all 0.3s;

          &:focus,
          &:hover {
            background: darken(blue, 20%);
            transform: scale(1.03);
            text-decoration: none;
          }
        }
    }
    .linkedInFull {
        @include print-only();
    }
    @include print {
        font-size: 0.8em;
        height: 100vh;
        min-height: 100vh;
        overflow: visible;
    }
}
</style>
