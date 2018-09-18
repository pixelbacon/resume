<template lang="html">
  <div class="references">
    <h2>
      References
      <small><i>Contact details upon request.</i></small>
    </h2>
    <div class="people">
      <div class="person" v-for="(person, index) in $root.$data.references  " :key="index">
        <h4 class="name">
          <a target="_blank" :href="person.linkedIn">{{person.name}}</a>
        </h4>
        <div class="company">
          <a target="_blank" :href="person.companyLink">{{person.company}}</a>
        </div>
        <div class="title">
          {{person.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const NAME = 'references'

export default {
  name: NAME
}
</script>

<style lang="scss" scoped>
@import "../components";

.references {

    small {
        font-size: 0.4em
    }

    .people {
        display: flex;
        flex-wrap: wrap;
    }

    .person {
        // flex-grow: 2;
        text-align: center;
        width: 100%;
        margin-bottom: 1.5em;

        @include breakpoint($screen-sm) {
          width: 50%;
        }

        @include breakpoint($screen-md) {
          width: 33%;
        }

        @include print() {
          width: 25%;

          .name {
            font-size: 1em;
          }

          .company {
            font-size: 0.7em;
          }

          .title {
            font-size: 0.6em;
          }
        }

        .name {
            margin-bottom: 0;
        }

        .company {
            font-size: 0.9em;
            font-weight: bold;

            a {
                color: darken(blue, 40);
            }
        }

        .title {
          font-size: 0.8em;
        }
    }
}
</style>
