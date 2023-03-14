<script setup lang="ts">
import NewGameButton from './NewGameButton.vue'
import { store } from '../stores/store'
</script>

<template>
  <div :class="`modal ${store.won ? '' : 'modal-hidden'}`">
    <div class="modal-box">
      <h2>You Won!</h2>
      <NewGameButton />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-hidden {
  display: none;
}
.modal-box {
  background-color: var(--primary-bg);
  border: var(--primary-text) 2px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
