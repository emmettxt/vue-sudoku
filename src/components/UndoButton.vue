<script setup lang="ts">
import UndoSVG from '../assets/UndoSVG.vue'
import { store } from '../stores/store'
</script>

<template>
  <button class="btn" @click="store.undo()">
    <UndoSVG />
  </button>
</template>

<style scoped>
.btn {
  border: 2px solid var(--primary-text);
  border-radius: 0.2rem;
  padding: 0.2rem;
  transition: transform 100ms ease-in-out;
  color: var(--primary-text);
  width: 11.1%;
  aspect-ratio: 1;
}
.btn:hover {
  transform: scale(0.9);
}
</style>
