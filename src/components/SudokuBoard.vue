<script setup lang="ts">
import SudokuCell from './SudokuCell.vue'
import { onBeforeMount } from 'vue'
import { store, type PossibleColumn, type PossibleRow } from '@/store'
import NumberSelctor from './NumberSelctor.vue'
import TogglePencilModeButton from './TogglePencilModeButton.vue'

const calculateRow = (blockNumber: number, cellNumber: number): PossibleRow =>
  (Math.ceil(cellNumber / 3) + 3 * Math.floor((blockNumber - 1) / 3)) as PossibleRow
const calculateColumn = (blockNumber: number, cellNumber: number): PossibleColumn =>
  (((cellNumber - 1) % 3) + 1 + 3 * ((blockNumber - 1) % 3)) as PossibleColumn

onBeforeMount(() => store.LoadNewBoard())
</script>

<template>
  <div class="game">
    <div class="board">
      <div class="cell-block" v-for="n in 9" :key="n">
        <SudokuCell
          v-for="m in 9"
          :key="m"
          :row="calculateRow(n, m)"
          :column="calculateColumn(n, m)"
          :block="n"
        />
      </div>
    </div>
    <NumberSelctor />
    <TogglePencilModeButton />
  </div>
</template>

<style scoped>
.game {
  max-height: 100vh;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.1rem;
  aspect-ratio: 1;
}
.cell-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--primary-text);
}
</style>
