<template>
  <div class="page-content music-page">
    <h1 id="music-title">Music</h1>
    <div class="album-release-container">
      <h2>Year of the Dragon 3</h2>
      <p class="release-date">January 28, 2025</p>
      <div class="album-card">
        <div class="album-card-inner" :class="{ 'is-flipped': isFlipped }">
          <div class="album-card-front">
            <img
              src="@/assets/YOTD3.jpg"
              alt="Year of the Dragon 3 Album Art"
              class="album-art"
            />
            <div class="album-hover-overlay">
              <ol class="tracklist">
                <li>Arch</li>
                <li>Stomp Me Out</li>
                <li>Persephone</li>
                <li>Think and Breathe</li>
                <li>I Don't Want to Leave</li>
                <li>Degree (Interlude)</li>
                <li>Photosynthesis</li>
                <li>Hephaestus</li>
                <li>Starkville / Los Angeles</li>
                <li>Helene</li>
                <li>Ghost in the Machine</li>
                <li>Year of the Dragon 3</li>
              </ol>
              <button @click="isFlipped = true" class="about-btn">About</button>
            </div>
          </div>
          <div class="album-card-back">
            <img
              src="@/assets/yotd3-bg.jpg"
              alt="Year of the Dragon 3 Background"
              class="album-art-bg"
            />
            <div class="album-info">
              <h3>About the Album</h3>
              <p>
                This is a filler blurb about the creation of the album. We
                poured our hearts and souls into these tracks in a garage in
                Fayetteville, AR, drawing inspiration from late nights and
                early mornings.
              </p>
              <button @click="isFlipped = false" class="back-btn">
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isFlipped = ref(false);
</script>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}

.music-page {
  text-align: center;
}
.album-release-container h2 {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.release-date {
  font-size: 1.2rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
}
.album-card {
  background-color: transparent;
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 1 / 1;
  perspective: 1000px;
  margin: 2rem auto;
  position: relative;
}
.album-card-inner,
.album-card-front,
.album-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
}
.album-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.album-card-inner.is-flipped {
  transform: rotateY(180deg);
}
.album-card-front,
.album-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
}
.album-card-back {
  transform: rotateY(180deg);
}
.album-art {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 4px solid #e6fffa;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
}
.album-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
.album-card-front:hover .album-hover-overlay {
  opacity: 1;
}
.tracklist {
  color: #7bc8afff;
  list-style-position: inside;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  padding: 0;
}
.about-btn,
.back-btn {
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #e6fffa;
  color: #111;
  text-shadow: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.album-art-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  filter: brightness(0.7);
}
.album-info {
  position: relative;
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.album-info h3 {
  font-size: 1.8rem;
}
.album-info p {
  font-size: 1.1rem;
}
</style>