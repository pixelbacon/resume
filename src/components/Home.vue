<template>
  <div class="home">
    <appHeader />
    <div class="bodyContainer container">
      <div class="row print-pageBreakAfter page">
        <experience class="col-12 col-md-6"></experience>
        <whatIKnow class="col-12 col-md-6"></whatIKnow>
      </div>
      <div class="row justify-content-center page">
        <sumOfParts class="col-12 col-md-4 col-print-6"></sumOfParts>
        <drive class="col-12 col-md-4 col-print-6"></drive>
      </div>
      <div class="row print-pageBreakAfter page">
        <technicalities class="col-12 col-lg-4 col-print-12" />
        <process class="col-12 col-sm-6 col-lg-3 col-print-6"></process>
        <toDo class="col-12 col-sm-6 col-lg-5 col-print-6"></toDo>
      </div>
      <div class="row page">
        <references class="col-12"></references>
        <employmentHistory class="col-12 lastSectionBeforeNotes"></employmentHistory>
      </div>
      <div class="row page">
        <notes class="col-12"></notes>
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

<style lang="scss" scoped>
@import "../components";
.home {
  @include print(){
    .lastSectionBeforeNotes {
      margin-bottom: 0;
    }
  };

  .page {
    @include print(){
      max-height: 100vh;
      overflow: hidden;
    }
  }
}
</style>
