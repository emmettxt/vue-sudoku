<script setup lang="ts">
import { store } from '../stores/store'
import { ref } from 'vue'
const props = defineProps<{ hasWarning?: boolean }>()

const intialContent = 'new game'
const content = ref(intialContent)

const newGame = () => {
  if (content.value !== intialContent || !props.hasWarning) {
    content.value = intialContent
    store.LoadNewBoard()
  } else {
    content.value = 'are you sure?'
  }
}
</script>

<template>
  <button class="btn" @click="newGame">{{ content }}</button>
</template>

<style scoped>
.btn {
  background-color: var(--primary-bg);
  border: 2px solid var(--primary-text);
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: var(--primary-text);
  transition: transform 50ms;

  position: relative;
}
.btn:hover {
  transform: scale(0.9);
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}
</style>
