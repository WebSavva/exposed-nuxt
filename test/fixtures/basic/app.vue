<template>
  <div :id="`ready-cb-times-${count}`">
    Nuxt ready callback was called {{ count }} times
  </div>
</template>

<script setup>
import { ref } from '#imports';

const count = ref(0);

await new Promise((resolve) => setTimeout(resolve, 1e3));

if (process.client) {
  const cb = () => {
    count.value++;
  };

  for (const _ of Array.from(Array(5).keys())) {
    window.onNuxtReady(cb);
  }
}
</script>
