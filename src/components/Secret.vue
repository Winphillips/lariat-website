<template>
  <div class="secret-music-page">
    <header class="page-header">
      <router-link to="/" class="logo-link">
        <span class="logo-text">LARIAT</span>
      </router-link>
    </header>

    <main class="container">
      <h1>Secret Tracks</h1>
      <p class="subtitle">A collection of demos and unreleased songs. Free if u want em :P</p>

      <ul class="song-list">
        <li
          v-for="song in songs"
          :key="song.title"
          class="song-item"
        >
          <div class="song-header">
            <span class="song-title">{{ song.title }}</span>

            <a
              :href="song.url"
              :download="song.title"
              class="download-button"
              :aria-label="`Download ${song.title}`"
              title="Download track"
            >
              <i
                class="fa-solid fa-download"
                aria-hidden="true"
              ></i>
              <span>Download</span>
            </a>
          </div>

          <audio
            controls
            preload="none"
            controlsList="nodownload"
            :src="song.url"
          >
            Your browser does not support audio playback.
          </audio>
        </li>
      </ul>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import { secretTracks as songs } from "@/data/secretTracks";

defineOptions({
  name: "SecretPage",
});
</script>

<style scoped>
.secret-music-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
}

.page-header {
  padding: 1rem 2rem;
  text-align: center;
}

.logo-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: #fff;
  font-family: "Stamp-Gothic", "Arial Black", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.container {
  width: 100%;
  max-width: 1000px;
  flex-grow: 1;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}

h1 {
  margin-top: 0;
  text-align: center;
  color: rgb(99, 151, 101);
  font-size: 3rem;
}

.subtitle {
  margin-top: -1rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  text-align: center;
}

.song-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.song-item {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 5px solid rgb(99, 151, 101);
  border-radius: 12px;
}

.song-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.song-title {
  min-width: 0;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

audio {
  display: block;
  width: 100%;
  max-width: none;
  height: 48px;
  border-radius: 50px;
}

.download-button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.7rem 1rem;
  background-color: rgb(99, 151, 101);
  border: 1px solid rgb(99, 151, 101);
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.download-button:hover {
  background-color: rgb(118, 175, 120);
  border-color: rgb(118, 175, 120);
  transform: translateY(-1px);
}

.download-button:focus-visible {
  outline: 3px solid rgba(99, 151, 101, 0.4);
  outline-offset: 3px;
}

@media (max-width: 650px) {
  .page-header {
    padding: 1rem;
  }

  .container {
    padding: 1.25rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  .song-item {
    padding: 1.25rem;
  }

  .song-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }

  .download-button {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>