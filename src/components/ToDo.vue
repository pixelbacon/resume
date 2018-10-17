<template lang="pug">
  section.toDo
    h2 To-Do
    ol
      li(v-for="(item, index) in todos" :key="index") {{ item.description }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IToDo } from '@/types';
import { todos } from '@/data/todos';

@Component({})
export default class ToDo extends Vue {
  public todos: IToDo[] = todos;
}
</script>
