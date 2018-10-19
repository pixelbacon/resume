<template lang="pug">
  section.references
    MoreOnVue(top-right)
    h2 References
    p Due to the high profile of references (respectfully), contact information is available upon request. Thank you for your understanding.
    //- v-container(fluid)
    v-layout(row wrap).references__items
      v-flex(xs12 sm6 xl4 v-for="(reference, index) in references" :key="index").p6
        ReferenceItemVue(:reference="reference")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { references } from '@/data/references';
import MoreOnVue from '@/components/MoreOn.vue';
import ReferenceItemVue from '@/components/ReferenceItem.vue';

@Component({
  components: {
    MoreOnVue,
    ReferenceItemVue,
  },
})
export default class References extends Vue {
  public references = references;
}
</script>
