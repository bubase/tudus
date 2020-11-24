import Vue from 'vue';
import Vuex from 'vuex';

import headerLinks from './modules/header-links.js';
import { todosModule as todos, todosPlugin } from './modules/todos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    headerLinks
  },
  mutations: {
    initialiseStore() {
      if (localStorage.getItem('todos')) {
        const storageTodos = JSON.parse(localStorage.getItem('todos'));
        this.commit('loadTodos', {todos: storageTodos});
      }
    }
  },
  plugins: [todosPlugin]
})