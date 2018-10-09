<template lang="pug">
  section.references
    h2 References
    p Due to the high profile of references, contact information is available upon request. Thank you for your understanding.
    //- v-container(fluid)
    ReferenceItemVue(v-for="(reference, index) in references" :key="index" :reference="reference")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from './../data';
import ReferenceItemVue from '@/components/ReferenceItem.vue';

@Component({
  components: {
    ReferenceItemVue,
  },
})
export default class References extends Vue {
  public references = data.references;
}
</script>
