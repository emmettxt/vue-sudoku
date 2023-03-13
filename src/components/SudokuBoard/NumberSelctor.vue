<script setup lang="ts">
import { PossibleCellValuesArray, store, type PossibleCellValues } from '../../stores/store'
import NumberWraper from './NumberWraper.vue'

const onClick = (n: PossibleCellValues) => {
  if (store.SelectedValue === n) return store.setSelectedValue(0)
  store.setSelectedValue(n)
}
</script>

<template>
  <div class="numberSelector">
    <button
      v-for="n in PossibleCellValuesArray.filter((n) => n > 0)"
      :key="n"
      @click="() => onClick(n)"
    >
      <NumberWraper :value="n" bordered />
    </button>
  </div>
</template>

<style scoped>
.numberSelector {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.numberSelector button {
  aspect-ratio: 1;
  align-items: center;
}
</style>
