<template>
  <div class="todo__input-wrapper">
    <el-input
      class="todo__input"
      placeholder="Какие планы?"
      v-model="input"
      clearable
      @keyup.exact.enter.native="inputHandler()"
      >
    </el-input>
    <el-button 
      icon="el-icon-plus"
      type="primary"
      @click="inputHandler()">
    </el-button>
  </div>
 
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      input: '',
    }
  },

  methods: {
    ...mapActions(['addTodo']),
    inputHandler() {
      if (this.input === '') {
        return;
      }
      this.addTodo({
        id: Date.now(),
        text: this.input,
        isCompleted: false,
        priority: null
      });
      this.input = '';
    },
  }
}
</script>

<style lang="scss">
  .todo__input-wrapper {
    display: flex;
    margin-bottom: 10px;

    & .el-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .todo__input .el-input__inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: calc(50px + 2vw);
    font-family: 'Roboto', 'Courier New', Courier, monospace;
    font-size: calc(20px + .5vw);
      &::placeholder {
        font-weight: 300;
    }
  }
</style>
