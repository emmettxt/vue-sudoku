<script setup lang="ts">
import SudokuBoardVue from './components/SudokuBoard.vue'
</script>

<template>
  <main class="main">
    <SudokuBoardVue />
  </main>
</template>

<style scoped>
main {
  margin-inline: auto;
  max-width: 100%;
  padding-top: 100px;
}

main {
  max-width: 600px;
  min-width: 336px;
}
</style>
