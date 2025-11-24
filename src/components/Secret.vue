<template>
  <div class="secret-music-page">
    <header>
      <router-link to="/" class="logo-link">
        <span class="logo-text">LARIAT</span>
      </router-link>
    </header>
    <main class="container">
      <h1>Secret Tracks</h1>
      <p class="subtitle">A collection of demos and unreleased songs.</p>
      <ul class="song-list">
        <li v-for="song in songs" :key="song.title" class="song-item">
          <span class="song-title">{{ song.title }}</span>
          <audio controls :src="song.url"></audio>
        </li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

interface Song {
  title: string;
  url: string;
}

// SONGS
const songs = ref<Song[]>([
  { title: "Stomp Me Out - Alt Demo", url: "/audio/Stomp Me Out - Alt.wav" },
  { title: "Cut from Year of the Dragon 3 - 'Prometheus Demo'", url: "/audio/Prometheus.wav" },
  { title: "Unreleased beat we made in one night in like 2019 - 'Elysium Alps'", url: "/audio/Elysium Alps.wav" },
]);
</script>

<style scoped>
.secret-music-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
}
.container {
  flex-grow: 1;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
header {
  padding: 1rem 2rem;
  text-align: center;
}
.logo-link {
  font-family: 'Stamp-Gothic', 'Arial Black', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  margin-bottom: 2rem;
}
h1 {
  text-align: center;
  font-size: 3rem;
  color: rgb(99, 151, 101);
}
.subtitle {
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  color: rgba(255,255,255,0.7);
}
.song-list {
  list-style: none;
  padding: 0;
}
.song-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 1rem;
  border-left: 5px solid rgb(99, 151, 101);
}
.song-title {
  font-weight: bold;
  font-size: 1.1rem;
  flex-grow: 1;
}
audio {
  width: 100%;
  max-width: 350px;
  border-radius: 50px;
}
</style>
