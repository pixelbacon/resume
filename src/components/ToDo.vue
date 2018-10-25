<template lang="pug">
  section.toDo
    h2 To-Do
    ol
      li(v-for="(item, index) in toDos" :key="index") {{ item.description }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IToDo from '@/types/IToDo';
import { toDos } from '@/data';

@Component({})
export default class ToDo extends Vue {
  public toDos: IToDo[] = toDos;
}
</script>
