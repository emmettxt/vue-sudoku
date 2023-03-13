<script setup lang="ts">
import themeStore from '../../stores/themeStore'
import type { Theme } from '../../stores/themeStore'
import NumberWraperVue from '../SudokuBoard/NumberWraper.vue'

const onClick = (themeName: Theme, event: Event) => {
  const button = event.currentTarget as HTMLButtonElement
  if (themeName !== themeStore.currentTheme) {
    themeStore.setCurrentTheme(themeName)
    button.blur()
  }
}
</script>

<template>
  <div class="theme-selector">
    <div
      v-for="(themeName, index) in themeStore.availableThemes"
      :key="index"
      :class="`theme-selector-button-container ${
        themeName === themeStore.currentTheme ? 'theme-selector-btn-selected' : ''
      }`"
    >
      <button
        :class="`${themeName} theme-selector-btn ${
          themeName === themeStore.currentTheme ? 'theme-selector-btn-selected' : ''
        }`"
        @click="(event) => onClick(themeName, event)"
      >
        <NumberWraperVue :value="null" bordered />
      </button>
    </div>
  </div>
</template>

<style scoped>
.theme-selector-button-container {
  visibility: collapse;
  transform: scale(0);
  transition: transform 100ms ease-out;
}
/* .theme-selector-button-container:not()  */
.theme-selector-btn-selected,
.theme-selector:focus-within .theme-selector-button-container {
  visibility: visible;
  transform: scale(1);
}
.theme-selector-button-container {
  min-width: 11.1%;
}

.theme-selector-btn {
  display: block;
  margin: auto;
  width: 90%;
  background-color: var(--primary-bg);
  color: var(--primary-text);
  aspect-ratio: 1;
  border-radius: 1rem;
  border: 2px solid var(--primary-text);
}
.theme-selector-btn:hover,
.theme-selector:focus-within .theme-selector-btn:hover {
  transform: scale(0.9);
}

.theme-selector {
  display: flex;
  grid-template-columns: repeat(9, 1fr);
  gap: 0;
  margin-block: 1rem;
}
</style>
