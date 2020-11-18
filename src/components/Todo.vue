<template>
  <el-card
  @mouseover.native="isHovered=true"
  @mouseleave.native="isHovered=false"
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
    <li
      :class="todoTextClass">
      {{ todoText }}
    </li>
    <div class="todo__delete-box">
      <el-button
        plain
        circle
        class="todo__delete"
        v-show="isHovered"
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
      isHovered: false
    }
  },
  props: ['index'],
  methods: {
    ...mapActions(['deleteTodo', 'toggleCompleted']),
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
    }
  }
}
</script>

<style lang="scss">
  $deleteBtnWidth: 33px;

  .todo__item .el-card__body {
    display: flex;
    align-items: center;
    padding: 8px 12px ;
    border-radius: 4px;
    min-height: 36px;

    &:last-child {
      border-bottom: none;
    }
  }

  .todo__text {
    list-style-type: none;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 24px;
    width: calc(100% - #{$deleteBtnWidth});
    text-overflow: ellipsis;
    overflow: hidden;

    &_crossed {
      text-decoration: line-through;
      opacity: 0.6;
    }
  }

  .todo__delete-box {
    width: $deleteBtnWidth;
  }

  .todo__delete {
    height: 33px;
  }

  .todo__completed {
    margin-right: 8px;
  }
</style>
