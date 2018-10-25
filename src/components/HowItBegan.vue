<template lang="pug">
  section.experience
    h2 How It Began
    div(v-if="isPersonaDeveloper")
      p KidPix, Legos, Pi, Sega, Sketchpad, Superglue, and a hell of a lot of imagination. My parents knew something was different when I permanently glued legos together after months of revisions. At first they were annoyed; then they realized it was my ticket out.
      p I played sports and excelled, it wasn't enough. I became a photographer, and that wasn't enough. I took on massive projects without even knowing how to finish them, but that wasn't enough. It wasn't until I helped others by building their ideas that I was was satisfied.
      p I found purpose in learning code, connecting dots, and never letting technology get in the way of an individual's progress. A longing to impact this world started to take shape. For years I kept teaching myself, I kept saying "yes" to anyone who wanted to try something new. I never settled on a tool or a framework or a language.
      p
        strong And now {{yearsIn}} years later, I'm just as thrilled to make things via code and grit as I've ever been.

    div(v-else-if="isPersonaFounder")
      p A very long time ago my long time friend Joshua Gore had a few other friends that played paintball... A lot. We were all teenagers, all from small towns, and there weren't many productive things to do. Drinking, drugs, and all thaty goes along with that was the menu. But not with that group. That group practiced playing paintball as a squad, a tribe, every weekend, multiple days after school.
      p There was a simple problem; the equipment bought by these teenagers was astronomically priced. A weekend practice came at a cost of hundreds of dollars for simple, tiny, round balls of paint. And the "markers", sometimes in the thousands. The market justified their prices, because people paid those prices, there were few challengers.
      p Joshua didn't think it needed to be this way, and he had self taught engineering skills to challenge it. He just needed someone to help, just like he wanted to help his friends.
      p
        i He asked, and I said yes.
      p What that kicked off was a desire to create companies that represented the good in people, the under representation, the grit that nobody else recognizes let alone rewards. We had no business starting out so young; we were bold, ragged, and didn't want to understand why we were the only ones to see the blindspots.
      p
        strong We just wanted to build for those who could not. He hasn't stopped, and neither have I.

    div(v-else)
      p It started with designing through the original 3D printer: Legos. From sketch to meticulous crafting, what was in my brain as a simple idea was built out to a complex and tangible object. Eventually the Web came along and Legos were not part of the W3C standard; it was time to upgrade my skill set.
      p That skill set expanded to Design, Photography, HTML, CSS, Javascript, PHP, ActionScript, Coding Design Patterns, User Interfaces, User Experience Design. Marketing, Print, Web Standards, Motion graphics, Mobile, and all the in betweens. It took learning a lot of tools, working with a multitude of personality types to make sure things went smoothly.
      p That skill set has lead to working with multi-national companies and individuals alike to them new ways to interact internally, with their customers, and gain customers through genuine experiences.
      //- p More importantly, leveling individuals up all along the way. And to this day, that is the most important part of my career.
      p
        strong Most importantly, it started a career of leveling people up, all the time. Whether they were fellow founders, partners, employees, affiliates, or otherwise... That became my purpose.
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { yearsIn } from '@/data';

const persona = namespace('persona');

@Component
export default class HowItBeganComponent extends Vue {
  @persona.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @persona.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @persona.Getter('isPersonaMaker') public isPersonaMaker!: boolean;

  public yearsIn: number = yearsIn;
}
</script>
