<template>
  <el-container
    class="todos">
    <ul>
      <transition-group name="todos">
        <todo
          v-for="(todo, index) in todos"
          :key="todo.id"
          :index="index"
          >
        </todo>
      </transition-group>
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
    },
  }
}
</script>

<style lang="scss" scoped>

  .todos ul {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    position: relative;
  }

// transition-group animation classes

  .todos-enter {
    opacity: 0;
    transform: translateY(-30px);
  }

  .todos-enter-active {
    transition: all .7s cubic-bezier(.13,.8,.31,.94);
  }

  .todos-leave-active {
    transition: all .2s ease-out;
    position: absolute;
    width: 100%;
  }

  .todos-leave-to {
    opacity: 0;
    transform: translateY(-90px)
  }
</style>
