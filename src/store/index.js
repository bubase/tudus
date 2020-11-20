import Vue from 'vue';
import Vuex from 'vuex';

import headerLinks from './modules/header-links.js';
import todos from './modules/todos.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    headerLinks
  }
})
