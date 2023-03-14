<script setup lang="ts">
import { store } from '../../stores/store'
import PencilSVG from '@/assets/PencilSVG.vue'
</script>

<template>
  <button
    :class="store.isPencilMode ? 'btn btn-selected' : 'btn'"
    @click="store.toggleIsPencileMode()"
  >
    <PencilSVG />
    <!-- PENCIL -->
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
.btn-selected {
  color: var(--secondary-text);
  background-color: var(--secondary-bg);
}
</style>
