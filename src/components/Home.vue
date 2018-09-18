<template>
  <div class="home">
    <appHeader />
    <div class="bodyContainer container">
      <div class="row">
        <experience class="col-12 col-md-6"/>
        <whatIKnow class="col-12 col-md-6"/>
      </div>
      <div class="row print-pageBreakBefore">
        <technicalities class="col-12 "/>
      </div>
      <div class="row">
        <process class="col-12 col-sm-6 col-print-6"/>
        <toDo class="col-12 col-sm-6 col-print-6"/>
      </div>
      <div class="row justify-content-center">
        <sumOfParts class="col-12 col-md-4 col-print-4"/>
        <drive class="col-12 col-md-4 col-print-4"/>
      </div>
      <div class="row page print-pageBreakBefore">
        <references class="col-12"/>
        <employmentHistory class="col-12 lastSectionBeforeNotes"/>
      </div>
      <div class="row page">
        <contactForm class="col-12"/>
      </div>
      <div class="row page">
        <notes class="col-12"/>
      </div>
    </div>
  </div>
</template>

<script>
const NAME = 'home'

export default {
  name: NAME,
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
      page-break-after: always;
      // overflow: hidden;
    }
  }
}
</style>
