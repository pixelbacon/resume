<template lang="pug">
  section.reachOut
    h2 Reach Out
    p I would love to hear from you! Whether it's a new opportunity, seeking advice, anything that comes to mind is something I am glad to discuss.
    v-form(:action="action" v-model="valid" method="POST")
      v-container(fluid).container--noPadding
        v-layout(row wrap grid-list-lg="$vuetify.breakpoint.mdAndUp")
          v-flex(xs12 md4)
            v-text-field(v-model="name" label="Name" name="name")
          v-flex(xs12 md4)
            v-text-field(v-model="email" label="Email" name="_replyto")
          v-flex(xs12 md4)
            v-text-field(v-model="phoneNumber" label="Phone Number" name="phoneNumber")
          v-flex(xs12)
            v-textarea(v-model="comment" label="Comment/Inquiry" name="comment")
          v-flex(xs12)
            v-btn(type="submit" color="primary").ml-0 Submit
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from '@/data';

@Component({})
export default class ReachOut extends Vue {
  public action = `https://formspree.io/${data.email}`;
  public comment = '';
  public email = '';
  public name = '';
  public phoneNumber = '';
  public valid = null;
}
</script>

<style scoped lang="stylus"></style>
