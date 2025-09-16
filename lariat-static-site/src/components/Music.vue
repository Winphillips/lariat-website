<template>
  <div class="page-content music-page">
    <div class="album-release-container">
      <h2>Year of the Dragon 3</h2>
      <p class="release-date">January 28, 2025</p>

      <div
        class="album-card"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="album-card-inner" :class="{ 'is-flipped': isFlipped }">
          <!-- FRONT -->
          <div class="album-card-front" @click.stop="handleFrontClick">
            <img
              :src="albumCover"
              alt="Year of the Dragon 3 Album Art"
              class="album-art"
            />

            <div
              class="album-hover-overlay"
              :class="{ 'show-overlay': showOverlay }"
            >
              <ol
                ref="tracklistEl"
                class="tracklist"
                :class="{ 'space-between': tracklistSpaceBetween }"
              >
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

              <button class="about-btn" @click.stop="openAbout">About</button>
            </div>
          </div>

          <!-- BACK -->
          <div class="album-card-back">
            <img :src="albumBg" alt="Year of the Dragon 3 Background" class="album-art-bg" />
            <div class="album-info">
              <p>
                Our first real project, YOTD3 is the concretion of years of making music. Some songs were 5 years old and some were barely a month old. Conceptually we attempted to capture the seasons we grew up together with and went through individually as we aged.
              </p>
            </div>

            <button class="back-btn" @click.stop="closeAbout" aria-label="Back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="external-links">
        <a
          href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2"
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn stream-btn"
        >
          Stream
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn merch-btn"
        >
          Purchase
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import cover from "@/assets/YOTD3.jpg";
import bg from "@/assets/yotd3-bg.jpg";

const albumCover = cover;
const albumBg = bg;

const isFlipped = ref(false);
const showOverlay = ref(false);
const isTouch = ref(false);

const tracklistEl = ref<HTMLElement | null>(null);
const tracklistSpaceBetween = ref(false);

function detectTouch() {
  isTouch.value =
    !!window.matchMedia &&
    (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches);
}

function checkTracklistLayout() {
  const el = tracklistEl.value;
  if (!el) return;
  const fits = el.scrollHeight <= el.clientHeight + 1;
  tracklistSpaceBetween.value = !fits;
}

let ro: ResizeObserver | null = null;

onMounted(async () => {
  detectTouch();
  showOverlay.value = false;
  await nextTick();
  checkTracklistLayout();
  ro = new ResizeObserver(() => checkTracklistLayout());
  if (tracklistEl.value) ro.observe(tracklistEl.value);
  window.addEventListener("resize", checkTracklistLayout, { passive: true });
});

onBeforeUnmount(() => {
  if (ro && tracklistEl.value) ro.unobserve(tracklistEl.value);
  ro = null;
  window.removeEventListener("resize", checkTracklistLayout);
});

function handleMouseEnter() {
  if (!isTouch.value) {
    showOverlay.value = true;
    nextTick(checkTracklistLayout);
  }
}
function handleMouseLeave() {
  if (!isTouch.value) showOverlay.value = false;
}
function handleFrontClick() {
  if (isTouch.value) {
    showOverlay.value = !showOverlay.value;
    nextTick(checkTracklistLayout);
  }
}
function openAbout() {
  isFlipped.value = true;
  showOverlay.value = false;
}
function closeAbout() {
  isFlipped.value = false;
  showOverlay.value = false;
}
</script>

<style scoped>
.music-page {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  color: #e6fffa;
  text-align: center;
}

.album-release-container h2 {
  color: #7bc8af;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.release-date {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
  color: #7bc8af;
}

.album-card {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  perspective: 1200px;
  margin: 2rem auto;
  position: relative;
  cursor: pointer;
}

.album-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.75s cubic-bezier(.2,.9,.3,1);
  transform-style: preserve-3d;
  will-change: transform;
}
.album-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.album-card-front,
.album-card-back {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  box-sizing: border-box;
  transform: translateZ(0.1px);
}

.album-card-front { z-index: 2; transform: rotateY(0deg) translateZ(0.1px); }
.album-card-back { transform: rotateY(180deg) translateZ(0.1px); z-index: 1; }
.album-card-inner.is-flipped .album-card-back { z-index: 3; }
.album-card-inner.is-flipped .album-card-front { z-index: 1; pointer-events: none; }


.album-art {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.album-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.52);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.28s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  box-sizing: border-box;
  z-index: 6;
}
.album-hover-overlay.show-overlay,
.album-card-front:hover .album-hover-overlay { opacity: 1; }
.album-card-inner.is-flipped .album-hover-overlay { opacity: 0 !important; pointer-events: none !important; }

.tracklist {
  color: #7bc8afff;
  list-style-position: inside;
  padding: 6px 14px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px; /* Reduced space between tracks */
  justify-content: center;
  align-items: center;
  font-size: clamp(0.78rem, 2.2vw, 1.05rem);
  line-height: 1.5;
  text-align: center;
  max-height: calc(100% - 50px);
  overflow: auto;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #7bc8af transparent;
}
.tracklist.space-between {
  justify-content: space-between;
}
.tracklist::-webkit-scrollbar { width: 5px; }
.tracklist::-webkit-scrollbar-thumb { background: #7bc8af; border-radius: 10px;}

.about-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 8px 16px;
  background-color: transparent;
  color: #e6fffa;
  text-shadow: none;
  border: 1px solid #e6fffa;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  transition: all 0.2s ease;
  z-index: 7;
}
.about-btn:hover {
  background-color: #e6fffa;
  color: #111;
}

.album-art-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.68); z-index: 1; }
.album-info { position: relative; z-index: 2; padding: 2rem; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; box-sizing:border-box; }
.album-info p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(1rem, 2.8vw, 1.25rem); /* Increased font size */
  margin:0;
  max-height: calc(100% - 80px);
  overflow:auto;
  color: #ccf3e7;
  text-shadow: 0 0 8px rgba(255, 190, 11, 0.7);
}

.back-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 4;
  background: none;
  border: none;
  color: #e6fffa;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.7));
  transition: transform 0.2s ease;
}
.back-btn:hover {
  transform: scale(1.1);
}
.back-btn svg { width: 100%; height: 100%; display:block; }

.external-links { display:flex; justify-content:center; gap:1rem; margin-top:1.5rem; }
.link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: none;
  transition: all 0.2s ease;
  font-family: 'New Rocker', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: transparent;
  color: #7bc8af;
  border: 2px solid #7bc8af;
  font-weight: normal;
  font-size: clamp(1rem, 3vw, 1.2rem);
  padding: 0.5em 1.5em; /* Thinner padding */
  height: 45px; /* Thinner height */
  line-height: 1;
}
.link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}
.stream-btn:hover {
  background-color: #7bc8af;
  color: #111;
}
.merch-btn {
  opacity: 0.6;
  pointer-events: none;
  cursor: default;
}
</style>

