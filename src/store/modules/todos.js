const todosModule = {
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
    },
    loadTodos(state, payload) {
      state.todos = payload.todos;
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
const todosPlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('todos', JSON.stringify(state.todos.todos));
  });
};

export {todosModule, todosPlugin};

