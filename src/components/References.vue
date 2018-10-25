<template lang="pug">
  section.references
    v-container(:fluid="useFluid" grid-list-xl)
      MoreOnVue(top-right)
      h2 References
      p Due to the high profile of references (respectfully), contact information is available upon request. Feel free to contact them via their LinkedIn profile.
      //- v-container(fluid)
      v-layout(row wrap).references__items
        v-flex(xs12 sm6 xl4 v-for="(reference, index) in references" :key="index").p6
          ReferenceItemVue(:reference="reference")
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { references } from '@/data';
import { UseFluid } from '@/mixins/UseFluid';
import { IPersona, IReference } from '@/@types';
import MoreOnVue from '@/components/MoreOn.vue';
import ReferenceItemVue from '@/components/ReferenceItem.vue';

const personaModule = namespace('persona');

@Component({
  components: {
    MoreOnVue,
    ReferenceItemVue,
  },
})
export default class References extends Mixins(UseFluid) {
  @personaModule.State('currentPersona') public currentPersona!: IPersona;
  @personaModule.Getter('references') public references!: IReference[];
}
</script>
