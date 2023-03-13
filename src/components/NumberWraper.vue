<script setup lang="ts">
import { store, type PossibleCellValues } from '../store'
import { computed } from 'vue'
const props = defineProps<{
  value: PossibleCellValues | null
  bordered?: boolean
  pencil?: boolean
}>()

const className = computed(() => {
  let className = 'circle'
  if (props.bordered) className += ' circle-bordered'
  if (props.value === store.SelectedValue) className += ' circle-highlighted'
  if (props.pencil) className += ' circle-pencil'
  if (props.value) className += ' circle-valued'
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
  max-width: 55%;
  max-height: 55%;

  aspect-ratio: 1;
  text-align: center;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-bordered {
  border: 2px solid var(--primary-text);
}
.circle {
  color: var(--primary-text);
}

.circle-highlighted,
.circle-valued:hover {
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.circle-pencil,
.circle.circle-pencil:hover {
  color: var(--accent-text);
}
</style>
