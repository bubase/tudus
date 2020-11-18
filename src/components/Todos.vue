<template>
  <el-container
    class="todos">
    <ul>
      <todo
        v-for="(todo, index) in todos"
        :key="todo.id"
        :index="index"
        >
      </todo>
    </ul>
  </el-container>
</template>

<script>
import Todo from './Todo.vue';

export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  }
}
</script>

<style lang="scss" scoped>

  .todos {
    // border: 1px solid #eee;

    & ul {
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }

</style>
