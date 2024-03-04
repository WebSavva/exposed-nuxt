<template>
  <h1>
    Exposed Nuxt name: {{ globalName }}
  </h1>
</template>

<script setup lang="ts">
const globalName = process.client ? window.$nuxt.globalName : 'unknown';
</script>
