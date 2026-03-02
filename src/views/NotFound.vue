<template>
  <main class="not-found">
    <div class="not-found-shell">
      <p class="eyebrow">404</p>
      <h1>Wrong Turn</h1>
      <p class="copy">That page is not here. Head back to the lot and pick a different route.</p>
      <router-link to="/" class="home-link">Back to LARIAT</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
defineOptions({
  name: "NotFoundPage",
});
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background:
    radial-gradient(circle at top, rgba(99, 151, 101, 0.18), transparent 42%),
    linear-gradient(180deg, #050505, #111);
}

.not-found-shell {
  width: min(100%, 560px);
  padding: 2.4rem 2rem;
  border: 1px solid rgba(99, 151, 101, 0.45);
  border-radius: 24px;
  background: rgba(10, 10, 10, 0.82);
  text-align: center;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.32);
}

.eyebrow {
  margin: 0 0 0.65rem;
  font-family: "New Rocker", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.14em;
  color: rgb(99, 151, 101);
}

h1 {
  margin: 0;
  font-family: "New Rocker", sans-serif;
  font-size: clamp(2rem, 6vw, 3.4rem);
  color: #fafafa;
}

.copy {
  margin: 1rem 0 0;
  color: rgba(250, 250, 250, 0.8);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

.home-link {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  border: 1px solid rgb(99, 151, 101);
  background: rgb(99, 151, 101);
  color: #101010;
  font-family: "New Rocker", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.home-link:hover {
  transform: translateY(-2px);
  background: rgb(118, 174, 120);
}
</style>
