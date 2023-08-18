<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
</script>

<template>
  <div class="home">
    <Header> </Header>
    <Main></Main>
  </div>
</template>

<style lang="scss">
.home {
  margin: auto;
  max-width: 1440px;
  box-shadow: 0 1.5px 2px #0001;
  border-radius: 20px;
  overflow: hidden;

}
</style>
