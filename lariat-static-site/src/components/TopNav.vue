<template>
  <nav class="top-nav">
    <a @click="$emit('navigate', 0)">Shows</a>
    <a @click="$emit('navigate', 1)">Music</a>
    <a @click="$emit('navigate', 2)" class="logo-link" :class="{ active: currentSection === 2 }">LARIAT</a>
    <a @click="$emit('navigate', 3)">Store</a>
    <a
      class="desktop-only"
      href="https://www.youtube.com/@lariat333"
      target="_blank"
      rel="noopener noreferrer"
      >Videos</a
    >
  </nav>
</template>

<script lang="ts">
export default {
  name: "TopNav",
  props: {
    currentSection: Number,
  },
};
</script>

<style scoped>
</style>
