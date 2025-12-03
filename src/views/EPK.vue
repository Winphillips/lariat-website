<template>
  <div class="epk-page">
    <header class="epk-header">
      <router-link to="/" class="back-btn">
        <i class="fas fa-arrow-left"></i> Back to Site
      </router-link>
    </header>

    <main class="epk-container">

      <section id="photos" class="grid-section">
        <div class="section-label">
          <h2>Photos</h2>
          <span class="divider-line"></span>
        </div>
        <div class="asset-grid">
          <div class="grid-item" v-for="(photo, index) in photos" :key="'photo-'+index">
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <div class="download-overlay">
              <a :href="photo.src" download target="_blank">Download</a>
            </div>
          </div>
        </div>
      </section>

      <section id="artwork" class="grid-section">
        <div class="section-label">
          <h2>Artwork</h2>
          <span class="divider-line"></span>
        </div>
        <div class="asset-grid">
          <div class="grid-item" v-for="(art, index) in artwork" :key="'art-'+index">
            <img :src="art.src" :alt="art.alt" loading="lazy" />
            <div class="download-overlay">
              <a :href="art.src" download target="_blank">Download</a>
            </div>
          </div>
        </div>
      </section>

      <section id="bio" class="text-section">
        <div class="section-label">
          <h2>Biography</h2>
          <span class="divider-line"></span>
        </div>

        <div class="bio-container">
          <div class="bio-block">
            <div class="bio-header">
              <h3>Short Bio</h3>
              <button @click="copyToClipboard(shortBio, 'short')" :class="{ copied: copyStatus['short'] }">
                {{ copyStatus['short'] ? 'Copied!' : 'Copy Text' }} <i class="fas fa-copy"></i>
              </button>
            </div>
            <p class="bio-text">{{ shortBio }}</p>
          </div>

          <div class="bio-block">
            <div class="bio-header">
              <h3>Long Bio</h3>
              <button @click="copyToClipboard(longBio, 'long')" :class="{ copied: copyStatus['long'] }">
                {{ copyStatus['long'] ? 'Copied!' : 'Copy Text' }} <i class="fas fa-copy"></i>
              </button>
            </div>
            <p class="bio-text">{{ longBio }}</p>
          </div>
        </div>
      </section>

      <section id="song-bios" class="text-section">
        <div class="section-label">
          <h2>Song Bios</h2>
          <span class="divider-line"></span>
        </div>
        <div class="song-list">
          <div class="song-item" v-for="(song, index) in songBios" :key="index">
            <div class="song-header">
              <h3>{{ song.title }}</h3>
              <button @click="copyToClipboard(song.desc, 'song-'+index)" :class="{ copied: copyStatus['song-'+index] }">
                <i class="fas fa-copy"></i>
              </button>
            </div>
            <p>{{ song.desc }}</p>
          </div>
        </div>
      </section>

      <section id="highlights" class="list-section">
        <div class="section-label">
          <h2>Highlights</h2>
          <span class="divider-line"></span>
        </div>
        <ul class="clean-list">
          <li v-for="(item, index) in highlights" :key="index">
            <span class="bullet">•</span> {{ item }}
          </li>
        </ul>
      </section>

      <section id="music" class="media-section">
        <div class="section-label">
          <h2>Music</h2>
          <span class="divider-line"></span>
        </div>
        <div class="music-links">
           <a href="https://open.spotify.com/artist/5BIlBjorSOpyXndhZfBUKM" target="_blank" class="music-card">
              <i class="fab fa-spotify"></i>
              <span>Listen on Spotify</span>
           </a>
           <a href="https://music.apple.com/us/artist/lariat/1582553734" target="_blank" class="music-card">
              <i class="fab fa-apple"></i>
              <span>Listen on Apple Music</span>
           </a>
           <a href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2" target="_blank" class="music-card">
              <i class="fas fa-link"></i>
              <span>Other Streaming</span>
           </a>
        </div>
      </section>

      <section id="videos" class="media-section">
  <div class="section-label">
    <h2>Videos</h2>
    <span class="divider-line"></span>
  </div>

<div class="full-video-wrapper">
    <iframe 
      src="https://www.youtube.com/embed/lpmYaweIBKM" 
      title="Hill Records Spotlights Lariat" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>

  <div class="video-grid">
    <div class="video-item">
      <div class="video-wrapper short-ratio">
        <iframe 
          src="https://www.youtube.com/embed/brW1AuU28c4" 
          title="YouTube short Lariat" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <div class="video-item">
      <div class="video-wrapper short-ratio">
        <iframe 
          src="https://www.youtube.com/embed/h2Vd9s65BdY" 
          title="Placeholder Short 2" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>

  </div>
</section>

    </main>

    <footer class="epk-footer">
      <p>&copy; {{ new Date().getFullYear() }} Lariat. All Assets Cleared for Press Use.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// --- IMPORTS 4 PHOTOS ---
import bandImg from '@/assets/band.webp';
import poster2 from '@/assets/poster2.webp';
import poster3 from '@/assets/poster3.webp';
import yotd3 from '@/assets/YOTD3.webp';
const fishBeetles = '/assets/TheFishesandtheBeetles.webp';

// --- PHOTOS ---
const photos = ref([
  { src: bandImg, alt: 'Lariat Band Photo Main' },
  { src: poster2, alt: 'Lariat Live Poster' },
  { src: poster3, alt: 'Lariat Promo Shot' },
]);

// --- ARTWORK ---
const artwork = ref([
  { src: yotd3, alt: 'Year of the Dragon 3 Cover' },
  { src: fishBeetles, alt: 'The Fish and The Beetles Cover' },
]);

// --- BIOS/TEXT ---
const shortBio = `Lariat is a genre-blending band from Fayetteville, AR, merging folk rock, alt-pop, and electronic indie into a "fun quilt of sound." Formed by brothers Trip and Win, cousin Coleman, and adopted brother Andrew, they create music born from years of friendship and unfiltered creativity.`;

const longBio = `Lariat is a band from Fayetteville, AR. We've been making music together for many years, but just became an active band earlier this year. Trip and Win are brothers, Coleman is our cousin, but is more so a brother, and we adopted Andrew from the Ozark National Forest, and he quickly became like a brother. As boys in the woods with unfiltered internet access, Lariat merges folk rock, alt pop, and electronic indie into a fun quilt of sound. We released an LP at the end of January! “So if things never get better, at least I’m by your side. I hope we live forever, or die at the same time.”`;

const songBios = ref([
  { title: "Year of the Dragon 3", desc: "Our first real project, YOTD3 is the concretion of years of making music. Some songs were 5 years old and some were barely a month old. Conceptually we attempted to capture the seasons we grew up together with and went through individually as we aged. In 2000 Win and Coleman were born, completing the trio. That’s the first Year of the Dragon! In 2012 the three of us lived together for the first time with our grandparents in Red River, NM. Lariat is the name of the easiest way down the ski valley there. That’s Year of the Dragon 2! In 2024 Coleman moved to Fayetteville and we made this album. THATS YEAR OF THE DRAGON 3. Year of the Dragon 3 is a testament to each other and to you." },
  { title: "The Fish and the Beetles", desc: "The Fish and the Beetles is our first song born on the stage and then raised in the stu. In the face of global mismanagement and injustice, there is an odd comfort in knowing life will continue on, even if we are unable to be there. The song is meant to serve as a unifying rallying cry, one that hopes to reorder our social priorities as wholistically humanitarian. It is intended to celebrate the strength of the biological world and humanity's place within it." },
]);

const highlights = ref([
  "2025 U of A Battle of the Bands winner.",
  "Released first album 'Year of the Dragon 3' in Janruary 2025 (Fully DIY)",
  "Started playing active scene shows in March 2025",
  "Played w/ Big Fat Cow, Idle Valley, Ted Hammig and The Campaign, and other local bands",
  "Played Sunday on the Square for the city of Fayetteville August 2025",
  "Played Good Day NWA October 2025"
]);

// --- COPY TEXT ---
const copyStatus = reactive<Record<string, boolean>>({});

const copyToClipboard = async (text: string, id: string) => {
  try {
    await navigator.clipboard.writeText(text);
    copyStatus[id] = true;
    setTimeout(() => {
      copyStatus[id] = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>

<style scoped>
/* --- BASE & TYPOGRAPHY --- */
.epk-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.epk-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 8rem;
}

h2 {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 0;
  white-space: nowrap;
}

h3 {
  margin-top: 0;
  font-size: 1.2rem;
  color: rgb(99, 151, 101);
}

/* --- HEADER --- */
.epk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: #000;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #333;
}

.logo-text {
  font-family: 'New Rocker', cursive; 
  font-size: 1.8rem;
  color: #fff;
  letter-spacing: 2px;
  text-decoration: none;
}

.back-btn {
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-btn:hover {
  color: #fff;
}

/* --- SECTIONS COMMON --- */
section {
  margin-bottom: 6rem;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.divider-line {
  height: 1px;
  background: #333;
  width: 100%;
}

/* --- GRID SYSTEM (PHOTOS/ART) --- */
.asset-grid {
  display: grid;
  /* Mobile: 2 columns */
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.grid-item {
  position: relative;
  aspect-ratio: 1 / 1;
  background: #111;
  overflow: hidden;
  cursor: pointer;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover img {
  transform: scale(1.05);
  opacity: 0.7;
}

.download-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 5;
}

.grid-item:hover .download-overlay {
  opacity: 1;
}

.download-overlay a {
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border: 1px solid #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  z-index: 10;
}

/* --- BIO SECTIONS --- */
.bio-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.bio-block {
  background: #111;
  padding: 2rem;
  border-radius: 4px;
}

.bio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
}

.bio-text {
  line-height: 1.8;
  color: #ccc;
  white-space: pre-wrap;
}

button {
  background: transparent;
  border: 1px solid #444;
  color: #888;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

button:hover {
  border-color: #fff;
  color: #fff;
}

button.copied {
  background: rgb(99, 151, 101);
  border-color: rgb(99, 151, 101);
  color: #fff;
}

/* --- SONG BIOS --- */
.song-list {
  display: grid;
  gap: 1rem;
}

.song-item {
  background: #111;
  padding: 1.5rem;
  border-left: 3px solid rgb(99, 151, 101);
}

.song-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.song-header h3 {
  margin: 0;
  font-size: 1rem;
  color: #fff;
}

.song-item p {
  margin: 0;
  color: #aaa;
  font-size: 0.95rem;
}

/* --- HIGHLIGHTS --- */
.clean-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.clean-list li {
  padding: 1rem 0;
  border-bottom: 1px solid #222;
  color: #ddd;
  font-size: 1.1rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.bullet {
  color: rgb(99, 151, 101);
}

/* --- MUSIC LINKS --- */
.music-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.music-card {
  flex: 1;
  min-width: 200px;
  background: #111;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: background 0.3s;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.music-card:hover {
  background: #222;
  border-color: #444;
}

.music-card i {
  font-size: 2.5rem;
}

/* --- VIDEOS GRID --- */
.video-grid {
  display: grid;
  /* Mobile: 1 column */
  grid-template-columns: 1fr;
  gap: 1rem;
}

.video-item {
  width: 100%;
}

.video-wrapper {
  position: relative;
  height: 0;
  background: #000;
}

.video-wrapper:not(.short-ratio) {
  padding-bottom: 56.25%; 
}

.video-wrapper.short-ratio {
  padding-bottom: 177.77%; /* (16 / 9) * 100 */
}

.full-video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio (9 / 16 = 0.5625) */
  height: 0;
  margin-bottom: 3rem;
  background: #000;
}

.full-video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.epk-footer {
  text-align: center;
  color: #555;
  padding-top: 4rem;
  font-size: 0.8rem;
  text-transform: uppercase;
}

/* --- RESPONSIVE MEDIA QUERIES --- */
@media (min-width: 768px) {
  /* Desktop: 6 columns */
  .asset-grid {
    grid-template-columns: repeat(6, 1fr);
  }
  
  .bio-container {
    grid-template-columns: 1fr 2fr;
  }

  /* Desktop: 3 columns */
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .video-wrapper.short-ratio {
    max-width: none;
  }
}
</style>