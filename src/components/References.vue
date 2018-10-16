<template lang="pug">
  section.references
    h2 References
    p Due to the high profile of references (respectfully), contact information is available upon request. Thank you for your understanding.
    //- v-container(fluid)
    ReferenceItemVue(v-for="(reference, index) in references" :key="index" :reference="reference")
    MoreOnVue
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
