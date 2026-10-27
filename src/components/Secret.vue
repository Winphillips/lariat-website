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

      <article
        class="ep-card"
        aria-labelledby="twenty-four-hours-title"
        :style="epCardStyle"
      >
        <div class="ep-details">
          <h2 id="twenty-four-hours-title">{{ twentyFourHours.title }}</h2>
          <p>{{ twentyFourHours.description }}</p>

          <ol class="ep-track-list" aria-label="24 Hours track list">
            <li
              v-for="(track, index) in twentyFourHours.tracks"
              :key="track.title"
              class="ep-track"
            >
              <div class="ep-track-header">
                <div class="ep-track-title">
                  <span class="ep-track-number">{{ String(index + 1).padStart(2, "0") }}</span>
                  <span>{{ track.title }}</span>
                </div>

                <a
                  :href="track.url"
                  :download="track.title"
                  class="ep-download"
                  :aria-label="`Download ${track.title}`"
                  title="Download track"
                >
                  <i class="fa-solid fa-download" aria-hidden="true"></i>
                  <span class="sr-only">Download {{ track.title }}</span>
                </a>
              </div>

              <audio
                controls
                preload="none"
                controlsList="nodownload"
                :src="track.url"
              >
                Your browser does not support audio playback.
              </audio>

              <p
                v-if="index === twentyFourHours.tracks.length - 1"
                class="ep-outro-note"
              >
                Made after the stream for funsies
              </p>
            </li>
          </ol>
        </div>
      </article>

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
import { secretTracks as songs, twentyFourHours } from "@/data/secretTracks";

const epCardStyle = {
  backgroundImage: `url("${twentyFourHours.artwork}")`,
};

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

.ep-card {
  margin-bottom: 2.5rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  overflow: hidden;
  background-color: #191b19;
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(99, 151, 101, 0.38);
  border-radius: 18px;
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
}

.ep-details {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.ep-details h2 {
  margin: 0 0 0.65rem;
  color: #fff;
  font-family: "Stamp-Gothic", "Arial Black", sans-serif;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  line-height: 1;
  text-shadow:
    0 2px 3px rgba(0, 0, 0, 0.95),
    0 5px 18px rgba(0, 0, 0, 0.8);
}

.ep-details > p {
  max-width: 490px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.72);
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  text-shadow:
    0 1px 2px #000,
    0 3px 10px rgba(0, 0, 0, 0.95);
}

.ep-track-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 1.75rem 0 0;
  padding: 0;
  list-style: none;
}

.ep-track {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.ep-track:last-child {
  padding-bottom: 0;
}

.ep-track-header,
.ep-track-title {
  display: flex;
  align-items: center;
}

.ep-track-header {
  justify-content: space-between;
  gap: 1rem;
}

.ep-track-title {
  min-width: 0;
  gap: 0.8rem;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.35;
  text-shadow:
    0 1px 2px #000,
    0 3px 9px rgba(0, 0, 0, 0.95);
}

.ep-track-number {
  flex-shrink: 0;
  color: rgb(99, 151, 101);
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
  text-shadow:
    0 1px 2px #000,
    0 2px 8px rgba(0, 0, 0, 0.95);
}

.ep-download {
  display: grid;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  place-items: center;
  background: rgb(99, 151, 101);
  border: 1px solid rgb(99, 151, 101);
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.35);
  color: #8f360f;
  font-size: 0.75rem;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.ep-download:hover {
  background: rgb(118, 175, 120);
  border-color: rgb(118, 175, 120);
  color: #712707;
  transform: translateY(-1px);
}

.ep-download:focus-visible {
  outline: 3px solid rgba(99, 151, 101, 0.4);
  outline-offset: 3px;
}

.ep-outro-note {
  margin: 0.1rem 0 0 2.15rem;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.78rem;
  font-style: italic;
  line-height: 1.4;
  text-shadow:
    0 1px 2px #000,
    0 3px 8px rgba(0, 0, 0, 0.95);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

  .ep-details h2 {
    font-size: 3rem;
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
