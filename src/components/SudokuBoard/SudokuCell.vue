<script setup lang="ts">
import { store, type PossibleColumn, type PossibleRow } from '@/stores/store'
import { computed } from 'vue'
import NumberWraper from './NumberWraper.vue'
import PencilBox from './PencilBox.vue'
const props = defineProps<{ row: PossibleRow; column: PossibleColumn; block: number }>()
const isStatic = computed(() => store.getIsStatic(props.row, props.column))
const value = computed(() => {
  const numberValue = store.getValue(props.row, props.column)
  if (numberValue > 0) return numberValue
  else return null
})
const pencilClick = () => {
  if (store.SelectedValue) {
    store.updateHistory()
    store.togglePencilBoardCellValue(props.row, props.column, store.SelectedValue)
  }
}
const onClick = () => {
  if (store.isPencilMode) pencilClick()
  else if (store.SelectedValue && !isStatic.value) {
    const newValue = store.SelectedValue === value.value ? 0 : store.SelectedValue
    store.updateHistory()
    store.setValue(props.row, props.column, newValue)
  } else if (value.value) {
    const newSelectedValue = store.SelectedValue == value.value ? 0 : value.value
    store.setSelectedValue(newSelectedValue)
  }
}
</script>

<template>
  <button class="board-cell" @click="onClick()">
    <NumberWraper :value="value" :pencil="!isStatic" />
    <PencilBox :row="row" :column="column" />
  </button>
</template>

<style>
.board-cell {
  text-align: center;
  border: 1px dotted var(--accent-text);
  position: relative;
  z-index: 0;
}
</style>
