<script setup lang="ts">
import SudokuBoardVue from './components/SudokuBoard/SudokuBoard.vue'
import ThemeSelector from './components/ThemeSelector.vue/ThemeSelector.vue'
import ThemeWrapper from './components/ThemeSelector.vue/ThemeWrapper.vue'
import WonModal from './components/WonModal.vue'
</script>

<template>
  <ThemeWrapper>
    <main class="main">
      <div class="container">
        <ThemeSelector />
        <SudokuBoardVue />
      </div>
      <WonModal />
    </main>
  </ThemeWrapper>
</template>

<style scoped>
.container {
  margin-inline: auto;
  max-width: 600px;
  min-width: 336px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

main {
  color: var(--primary-text);
  background: var(--primary-bg);
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: clamp(0.75rem, 4vw, 1.5rem);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
