<template lang="pug">
  div.reachOut
    v-container(:fluid="useFluid")
      h2 Reach Out
      p I would love to hear from you! Whether it's a new opportunity, seeking advice, anything that comes to mind is something I am glad to discuss.
      v-form(:action="action" v-model="valid" method="POST")
        v-container(fluid).container--noPadding
          v-layout(row wrap grid-list-lg="$vuetify.breakpoint.mdAndUp")
            v-flex(xs12 md4)
              v-text-field(v-model="name" label="Name" name="name" dark)
            v-flex(xs12 md4)
              v-text-field(v-model="email" label="Email" name="_replyto" dark)
            v-flex(xs12 md4)
              v-text-field(v-model="phoneNumber" label="Phone Number" name="phoneNumber" dark)
            v-flex(xs12)
              v-textarea(v-model="comment" label="Comment/Inquiry" name="comment" dark)
            v-flex(xs12)
              v-btn(type="submit" color="primary").ml-0 Submit
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue } from 'vue-property-decorator';
import { emailAddress } from '@/data';
import { UseFluid } from '@/mixins/UseFluid';

@Component({})
export default class ReachOut extends Mixins(UseFluid) {
  public action = `https://formspree.io/${emailAddress}`;
  public comment = '';
  public email = '';
  public name = '';
  public phoneNumber = '';
  public valid = null;
}
</script>

<style scoped lang="stylus">
+b('reachOut')
  background: $backgrounds.secondary
  color white
  padding 2em 0

  +$hTags()
    color white
</style>
