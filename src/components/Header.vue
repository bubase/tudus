<template>
  <el-header
    class="header">
    <a 
      class="header__link"
      v-for="link in links"
      :key="link.id"
      :href="link.href">
      <img 
        class="header__link-img"
        :src="link.logoSrc" 
        :alt="link.name">
    </a>
  </el-header>
</template>

<script>
export default {
  computed: {
    links() {
      return this.$store.state.headerLinks.links;
    }
  }
}
</script>

<style lang='scss' scoped>

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  .header__link {
    transition: opacity .2s ease-in;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    opacity: 0.7;
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 1;
    }
  }

  .header__link-img {
    width: 100%;
    height: 100%;
  }
</style>
