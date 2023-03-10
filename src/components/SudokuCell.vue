<script setup lang="ts">
defineProps<{
  isStatic: boolean
  value?: number
}>()
</script>

<template>
  <div>{{ value }}</div>
</template>
