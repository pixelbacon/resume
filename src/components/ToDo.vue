<template lang="pug">
  section.toDo
    h2 To-Do
    ol
      li(v-for="(item, index) in todos" :key="index") {{ item[1] }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from './../data';

@Component({})
export default class ToDo extends Vue {
  public todos = data.todos;
}
</script>
