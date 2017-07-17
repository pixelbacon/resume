<template lang="html">
  <div class="employmentHistory">
    <h2>Employment</h2>
    <div class="jobs">
      <job :job="job" v-if="index < 6" v-for="(job, index) in $root.$data.employmentHistory" :key="index"></job>
    </div>
    <p>
      <a :href="$root.$data.linkedIn"><icon name="linkedin-square" scale="2"></icon></a>
    </p>
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
    }
</style>
