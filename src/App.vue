<template>
  <div id="app">
    <app-header></app-header>
    <el-main
      class="todos__container">
      <todos-title />
      <todo-input />
      <todos />
    </el-main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TodosTitle from './components/TodosTitle.vue';
import TodoInput from './components/TodoInput.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    'appHeader': Header,
    TodosTitle,
    TodoInput,
    Todos,
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

  body {
    margin: 0;
  }

  #app {
    min-height: 101vh;
    max-width: 600px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
    color: #303133
  }
  
  .todos__container {
    border: 1px solid #eee;
    box-shadow: 0 2px 12px #eee;

    @media (max-width: 500px) {
      padding: 8px;
    }
  }
</style>
