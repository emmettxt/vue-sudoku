<script setup lang="ts">
import { PossibleCoOrd, store, type PossibleColumn, type PossibleRow } from '../../stores/store'
import { computed } from 'vue'
import NumberWraper from './NumberWraper.vue'
const props = defineProps<{
  row: PossibleRow
  column: PossibleColumn
}>()
const pencilCell = computed(() => store.getPencilCell(props.row, props.column))
const getDisplayValue = (n: PossibleRow) => {
  if (store.getValue(props.row, props.column)) return null
  return pencilCell.value[n - 1] ? n : null
}
</script>
<template>
  <div class="pencil-box">
    <div v-for="n in PossibleCoOrd" :key="n">
      <NumberWraper :value="getDisplayValue(n)" pencil />
    </div>
  </div>
</template>
<style scoped>
.pencil-box {
  position: absolute;
  inset: 0;
  display: grid;
  grid:
    repeat(3, 1fr) /
    repeat(3, 1fr);
  font-size: 0.6em;
  z-index: -1;
  color: var(--accent-text);
}
</style>
