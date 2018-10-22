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
import { namespace } from 'vuex-class';
import { references } from '@/data/references';
import IPersona from './../types/IPersona';
import MoreOnVue from '@/components/MoreOn.vue';
import ReferenceItemVue from '@/components/ReferenceItem.vue';
import IReference from '@/types/IReference';

const personaModule = namespace('persona');

@Component({
  components: {
    MoreOnVue,
    ReferenceItemVue,
  },
})
export default class References extends Vue {
  @personaModule.State('currentPersona') public currentPersona!: IPersona;
  @personaModule.Getter('references') public references!: IReference[];
}
</script>
