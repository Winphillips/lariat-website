<template>
  <div
    class="album-card"
    :class="{ flipped: isFlipped }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="album-front">
      <img :src="album.cover" :alt="album.title" class="album-cover" />

      <div v-if="!isFlipped" class="finger-icon">
        <i class="fas fa-hand-pointer"></i>
      </div>
    </div>

    <div class="album-back">
      <div class="album-info">
        <h2>{{ album.title }}</h2>
        <p>{{ album.description }}</p>

        <div class="button-group">
          <a
            class="stream-button"
            :href="album.streamUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stream
          </a>
          <button class="about-button" @click="toggleAbout">
            About
          </button>
        </div>
      </div>

      <button class="back-button" @click="flipBack">
        <i class="fas fa-arrow-left"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Album {
  title: string;
  cover: string;
  description: string;
  streamUrl: string;
}

const props = defineProps<{ album: Album }>();

const isFlipped = ref(false);

// Detect if user is on touch/mobile
const isTouchDevice = window.matchMedia("(hover: none)").matches;

function handleMouseEnter() {
  if (!isTouchDevice) {
    isFlipped.value = true;
  }
}
function handleMouseLeave() {
  if (!isTouchDevice) {
    isFlipped.value = false;
  }
}

function toggleAbout() {
  if (isTouchDevice) {
    isFlipped.value = true;
  }
}

function flipBack() {
  isFlipped.value = false;
}
</script>

<style scoped>
.album-card {
  width: 300px;
  height: 300px;
  perspective: 1000px;
  position: relative;
}

.album-front,
.album-back {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.6s;
}

.album-front {
  transform: rotateY(0deg);
  background: #000;
}

.album-back {
  transform: rotateY(180deg);
  background: rgba(20, 20, 20, 0.95);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.album-card.flipped .album-front {
  transform: rotateY(-180deg);
}

.album-card.flipped .album-back {
  transform: rotateY(0deg);
}

.album-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.finger-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.85);
  animation: clickHint 1.2s infinite ease-in-out;
}
@keyframes clickHint {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.2); opacity: 0.6; }
}

.album-info {
  flex-grow: 1;
  text-align: left;
  overflow-y: auto;
}
.album-info h2 {
  margin-top: 0;
  font-size: 1.2rem;
}
.album-info p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}
.stream-button,
.about-button {
  flex: 1;
  padding: 0.5rem;
  background: #629aa9;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}
.stream-button:hover,
.about-button:hover {
  background: #4f7d88;
}

.back-button {
  background: none;
  border: none;
  color: white;
  font-size: clamp(1.2rem, 4vw, 2rem);
  align-self: flex-start;
  cursor: pointer;
}
</style>
