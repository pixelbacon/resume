<template lang="pug">
  section.theInbetween
    h2 The Inbetween
    div(v-if="isPersonaDeveloper")
      p When I started the landscape had few rockstars; Billy Bussey, 2Advanced... There were no examples of Creative Technologist. You went to college, got your degree in design or computer science, then landed an internship, promoted to full time hire. You had to choose...
      p But I never did. By understanding design as well as I did code, I could create things that are built easier and inherently improved upon faster. By understanding code, I could see how to build a team, when to cut a corner, and what the hiccups in the pipeline would be. It taught me to think ahead, to think around, to keep moving toward the solution no matter how many problems sprout up.
      p I've made a career as a top Actionscript/PHP developer then transitioned to a top JavaScript developer, while making APIs in between. The tools and frameworks have changed countless times, and all while I can barely count my blessings for being able to make a career at building.
      p
        strong {{yearsIn}} years ago I wouldn't be able to guess how it was all going to change... And excited to help it change for another {{yearsIn}}.

    div(v-else-if="isPersonaFounder")
      p Beautiful ideas take a certain amount of chaos. That chaos needs to be respected and guidelines setup whenever possible. It requires resonating with the unknown, appreciation for the known, and comfort in acknowledging the blind spots. All of those require a team and an open mind.
      p With a team, a tribe, anything is possible. Technology does not limit humans, it allows us to thrive. It allows us the best ways to support each other, minimize risk, while urging us to value how individuals think over what they know. When it comes to trends, social or technical or otherwise, "what" we know can become obsolete with a single day.
      p This isn't just a job or a career, it is a genuine passion and curiosity that bucks complacency. It's a hell of a ride and worth the extra hours when required.
      p It's a responsibility to new ideas, cultivating their existence, and growing makers and process and I do not take it lightly.
      p Beyond that, I've learned that there are almost no other places other than the startup world that the "strays" like myself can go. There are a few places yes, but the best garauntee for that is making your own, for others.
      p
        strong And when you can, you should.

    div(v-else)
      p It's been quite the rollercoaster and it will continue to be. The biggest lesson was realizing what I signed up for a long time ago; to never find safe harbor in complacency. Languages come, go, and back again. Methods however start in the garage, and eventually return to the garage.
      p I've been fortunate enough to help Fortune 100 companies, individuals and their small businesses, and startups in various stages. That's how I know it's important to emotionally and intellectually stay on your toes while doing your best to know where the ground is. Keep an eye on your blindspots, and be your best competition.
      p Industry standards have helped along the way, consistently pushing their purpose and customizing them for teams, for individuals. There is never a perfect out-of-the-box process, I've always needed to make it my own.
      p
        strong I've humbled myself in having to consistently learn new languages, frameworks, and methods as I work with different products and people. And in that nuance of unknown, I've always been rewarded with finding out new ways to solve problems that nobody else sees.

    //- div(v-else)
    //-   p Beautiful ideas take a certain amount of chaos. That chaos needs to be respected and guidelines setup whenever possible. It requires resonating with the unknown, appreciation for the known, and comfort in acknowledging the blind spots. All of those require a team and an open mind.
    //-   p With a team, a tribe, anything is possible. Technology does not limit humans, it allows us to thrive. It allows us the best ways to support each other, minimize risk, while urging us to value how individuals think over what they know. When it comes to trends, social or technical or otherwise, "what" we know can become obsolete with a single day.
    //-   p This isn't just a job or a career, it is a genuine passion and curiosity that bucks complacency. It's a hell of a ride and worth the extra hours when required.
    //-   p It's a responsibility to new ideas, cultivating their existence, and growing makers and process.
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { yearsIn } from '@/data';

const persona = namespace('persona');

@Component
export default class TheInbetweenComponent extends Vue {
  @persona.Getter('isPersonaDeveloper') public isPersonaDeveloper!: boolean;
  @persona.Getter('isPersonaFounder') public isPersonaFounder!: boolean;
  @persona.Getter('isPersonaMaker') public isPersonaMaker!: boolean;

  public yearsIn: number = yearsIn;
}
</script>
