<script setup lang="ts">
import { store, type PossibleCellValues } from '../store'
import { computed } from 'vue'
const props = defineProps<{ value: PossibleCellValues; bordered: boolean }>()

const className = computed(() => {
  let className = 'circle'
  if (props.bordered) className += ' circle-bordered'
  if (props.value === store.SelectedValue) className += ' circle-highlighted'
  return className
})
</script>

<template>
  <div :class="className">
    {{ value }}
  </div>
</template>

<style scoped>
.circle {
  border-radius: 50%;
  width: 50%;
  aspect-ratio: 1;
  max-width: 100%;
  color: var(--vt-c-white-mute);
  text-align: center;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-bordered {
  border: 2px solid var(--vt-c-white-mute);
}

.circle-highlighted,
.circle:hover {
  background-color: var(--vt-c-white-mute);
  color: var(--vt-c-black-soft);
}
.numberSelector button {
  aspect-ratio: 1;
  align-items: center;
}
</style>
