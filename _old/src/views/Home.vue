<template lang="pug">
  div.home
    AppHeader
    //- div.bodyContainer.container
    //-   div.row
    //-     experience
    //-     whatIKnow
    //-   div.row.print-pageBreakBefore
    //-     technicalities
    //-   div.row
    //-     process
    //-     toDo
    //-   div.row
    //-     sumOfParts
    //-     drive
    //-   div.row.page.print-pageBreakBefore
    //-     references
    //-     employmentHistory.lastSectionBeforeNotes
    //-   div.row.page
    //-     contactForm
    //-   div.row.page
    //-     notes
</template>

<script>
import AppHeader from '@/components/AppHeader'

const NAME = 'home'

export default {
  name: NAME,
  components: {
    AppHeader
  }
}
</script>

<style lang="stylus" scoped>
// @import "../components";
// .home {
//   @include print(){
//     .lastSectionBeforeNotes {
//       margin-bottom: 0;
//     }
//   };
//
//   .page {
//     @include print(){
//       max-height: 100vh;
//       page-break-after: always;
//       // overflow: hidden;
//     }
//   }
// }
</style>
