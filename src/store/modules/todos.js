export default {
  state: () => ({
    todos: []
  }),
  getters: {
    todos(state) {
      return state.todos
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.unshift(payload);
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload.index, 1);
    },
    toggleCompleted(state, payload) {
      state.todos[payload.index].isCompleted = !(state.todos[payload.index].isCompleted)
    }
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload);
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo', payload);
    },
    toggleCompleted(context, payload) {
      context.commit('toggleCompleted', payload);
    }
  }
}
