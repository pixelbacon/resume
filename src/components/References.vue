<template lang="html">
  <div class="references">
    <h2>References</h2>
    <div class="people">
      <div class="person" v-for="(person, index) in $root.$data.references  " :key="index">
        <h4 class="name">
          <a target="_blank" :href="person.linkedIn">{{person.name}}</a>
        </h4>
        <div class="title">
          {{person.title}}
        </div>
        <div class="company">
          <a target="_blank" :href="person.companyLink">{{person.company}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const _name = 'references'

export default {
  name: _name
}
</script>

<style lang="scss" scoped>
@import "../components";

.references {
    .person {
        margin-bottom: 1.5em;

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
    }
}
@include print() {
    .person {
        float: left;
        width: 33%;

        .name {
            font-size: 1em;
        }

        .title {
          font-size: 0.8em;
        }
    }
}
@include breakpoint($screen-md) {
    .person {
        float: left;
        width: 50%;
    }
}
@include breakpoint($screen-lg) {
    .person {
        width: 33%;
    }
}
</style>
