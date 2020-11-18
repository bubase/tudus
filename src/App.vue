<template>
  <div id="app">
    <app-header></app-header>
    <el-main>
      <todo-input />
      <todos />
    </el-main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TodoInput from './components/TodoInput.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    'appHeader': Header,
    TodoInput,
    Todos,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

  #app {
    max-width: 600px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 60px auto 0;
    color: #303133
  }
</style>
