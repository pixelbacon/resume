<template lang="html">
  <div class="employmentHistory">
    <h2>Employment</h2>
    <div class="jobs">
      <job :job="job" v-if="index < 5" v-for="(job, index) in $root.$data.employmentHistory" :key="index"></job>
    </div>
    <p class="linkedInIcon">
      <a :href="$root.$data.linkedIn"><icon name="linkedin-square" scale="2"></icon></a>
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
const _name = 'employmentHistory'

export default {
  name: _name
}
</script>

<style lang="scss" scoped>
@import "../components";

.employmentHistory {
    .linkedInIcon {
        @include screen-only();
    }
    .linkedInFull {
        @include print-only();
    }
    @include print {
        font-size: 0.8em;
        height: 100vh;
    }
}
</style>
