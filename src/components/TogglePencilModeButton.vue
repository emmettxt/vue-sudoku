<script setup lang="ts">
import { store } from '../store'
</script>

<template>
  <button
    :class="store.isPencilMode ? 'btn btn-selected' : 'btn'"
    @click="store.toggleIsPencileMode()"
  >
    PENCIL
  </button>
</template>

<style scoped>
.btn {
  border: 1px solid var(--primary-text);
  border-radius: 0.2rem;
  padding: 0.2rem;
  transition: transform 100ms ease-in-out;
}
.btn:hover {
  transform: scale(0.9);
}
.btn-selected {
  color: var(--secondary-text);
  background-color: var(--secondary-bg);
}
</style>
