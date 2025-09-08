<template>
  <nav class="top-nav">
    <router-link to="/shows">Shows</router-link>
    <router-link to="/music">Music</router-link>
    <router-link to="/merch">Merch</router-link>
    <a href="https://www.youtube.com/@lariat333" target="_blank" rel="noopener noreferrer">
      Videos
    </a>
  </nav>
</template>

<script lang="ts">
export default { name: "TopNav" };
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.top-nav a {
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}
.top-nav a.router-link-exact-active {
  color: rgb(99, 151, 101) !important;
  border-bottom-color: rgb(99, 151, 101);
}
.top-nav a:hover:not(.router-link-exact-active) {
  color: rgb(99, 151, 101);
  transform: scale(1.05);
}
</style>