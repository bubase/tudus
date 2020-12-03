<template>
  <el-card
    class="todo__item"
    shadow="hover">
    <el-button
      :plain="!todoIsCompleted"
      circle
      class="todo__completed"
      :type="completedButtonType"
      icon="el-icon-check"
      size="small"
      @click="toggleCompleted({index: index})">
    </el-button>
    <el-input
      class="todo__edit-input"
      ref="todoEditInput"
      v-show="isEdited"
      v-model="editedText"
      @keyup.exact.enter.native="editHandler">

    </el-input>
    <li
      v-show="!isEdited"
      :class="todoTextClass">
      {{ todoText }}
    </li>
    <div class="todo__config-box">
      <el-rate
        class="todo__priority"
        v-model="priorityValue"
        :max="3"
        :icon-classes="{3: 'el-icon-warning'}"
        void-icon-class="el-icon-warning-outline"
        :colors="{1: '#ffda00', 2: '#ec9b00', 3: '#ec2400'}">
      </el-rate>
      <el-button
        plain
        circle
        class="todo__edit"
        type="primary"
        icon="el-icon-edit"
        size="small"
        @click="editHandler">
      </el-button>
      <el-button
        plain
        circle
        class="todo__delete"
        type="danger"
        icon="el-icon-delete"
        size="small"
        @click="deleteTodo({index: index})">
      </el-button>
    </div>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isEdited: false,
      editedText: ''
    }
  },
  props: ['index'],
  methods: {
    ...mapActions(['deleteTodo', 'toggleCompleted', 'setPriority', 'editTodo']),
    editHandler() {
      this.isEdited = !this.isEdited;
      if (this.isEdited) {
        this.$nextTick(() => {
          this.$refs.todoEditInput.focus();
        });
      } else {
        this.editTodo({index: this.index, text: this.editedText});
      }
    }
  },
  computed: {
    todoText() {
      return this.$store.getters.todos[this.index].text
    },
    todoIsCompleted() {
      return this.$store.getters.todos[this.index].isCompleted
    },
    completedButtonType() {
      return this.todoIsCompleted ? 'success' : 'default';
    },
    todoTextClass() {
      return {
        'todo__text': true,
        'todo__text_crossed': this.todoIsCompleted
      }
    },
    priorityValue: {
      get() {
        return this.$store.getters.todos[this.index].priority
      },
      set(value) {
        this.setPriority({index: this.index, priority: value})
      }
    }
  },
  created() {
    this.editedText = this.todoText
  }
}
</script>

<style lang="scss">

  .todo__item {
      .el-card__body {
      display: flex;
      align-items: center;
      padding: 8px 12px ;
      border-radius: 4px;
      min-height: 36px;

      &:last-child {
        border-bottom: none;
      }
  
      @media (max-width: 500px) {
        padding: 5px;
      }
    }
  }

  .todo__text {
    list-style-type: none;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    
    &_crossed {
      text-decoration: line-through;
      opacity: 0.6;
    }
  }

  .todo__text, .todo__edit-input {
    font-size: calc(15px + .7vw);
    width: 70%;
  }

  .todo__edit-input .el-input__inner{
    padding: 5px;
  }


  .todo__config-box {
    width: 30%;
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
  }

  .todo__config-box .el-button+.el-button {
    margin-left: 0;
  }

  .todo__item .el-button--small.is-circle {
    padding: calc(5px + .2vw);
  }

  .todo__priority .el-rate__icon {
    margin-right: calc(1px + .1vw);
  }

  .todo__completed {
    margin-right: 8px;
  }
</style>
