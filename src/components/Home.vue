<template>
  <div class="home">
    <!-- <coverLetter></coverLetter> -->
    <appHeader />
    <div class="bodyContainer container">
      <div class="row print-pageBreakAfter">
        <experience class="col-12 col-md-6"></experience>
        <whatIKnow class="col-12 col-md-6"></whatIKnow>
      </div>
      <div class="row justify-content-center">
        <sumOfParts class="col-12 col-md-4 col-print-6"></sumOfParts>
        <drive class="col-12 col-md-4 col-print-6"></drive>
      </div>
      <div class="row print-pageBreakAfter">
        <technicalities class="col-12 col-lg-4 col-print-12"></technicalities>
        <process class="col-12 col-sm-6 col-lg-3 col-print-6"></process>
        <toDo class="col-12 col-sm-6 col-lg-5 col-print-6"></toDo>
      </div>
      <div class="row">
        <references class="col"></references>
      </div>
      <!-- <div class="row">
          <work class="col"></work>
      </div> -->
      <div class="row">
        <employmentHistory class="col"></employmentHistory>
      </div>
    </div>
  </div>
</template>

<script>
const _name = 'home'

export default {
  name: _name,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
