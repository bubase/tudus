<template>
  <el-input
    class="todo__input"
    placeholder="Какие планы?"
    v-model="input"
    clearable
    @keyup.exact.enter.native="enterHandler()"
    >
  </el-input>
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
    enterHandler() {
      if (this.input === '') {
        return;
      }
      this.addTodo({
        id: Date.now(),
        text: this.input,
        isCompleted: false,
      });
      this.input = '';
    },
  }
}
</script>

<style lang="scss">

  .todo__input {
    margin-bottom: 10px;
  }

  .todo__input .el-input__inner {
    height: calc(50px + 2vw);
    font-family: 'Roboto', 'Courier New', Courier, monospace;
    font-size: calc(20px + .5vw);
      &::placeholder {
        font-weight: 300;
    }
  }


</style>
