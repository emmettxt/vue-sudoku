<script setup lang="ts">
import themeStore from '../../stores/themeStore'
</script>

<template>
  <div :class="themeStore.currentTheme">
    <slot></slot>
  </div>
</template>
