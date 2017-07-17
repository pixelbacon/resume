<template lang="html">
  <div class="toDo">
    <h2>To Do</h2>
    <ul>
      <li v-for="(todo, index) in $root.$data.todos" :key="index">
        {{todo[1]}}
      </li>
    </ul>
  </div>
</template>

<script>
const _name = 'toDo'

export default {
  name: _name
}
</script>

<style lang="scss" scoped>
@import "../components";

.toDo {

}
</style>
