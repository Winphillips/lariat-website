<template>
  <div class="page-content music-page">
    <section class="release single-release-container">
      <h2 class="release-title release-title--single">The Fishes and the Beetles - Single</h2>
      <p class="release-date release-date--single">November 25, 2025</p>

      <div
        class="album-card"
        @mouseenter="handleSingleMouseEnter"
        @mouseleave="handleSingleMouseLeave"
        @click.stop="handleSingleClick"
      >
        <div class="album-card-front">
          <img :src="singleCover" alt="The Fishes and the Beetles Single Art" class="album-art" />
          <div class="album-hover-overlay" :class="{ 'show-overlay': singleShowOverlay }">
            <p class="single-bio">
              The Fishes and the Beetles is our first song born on the stage and then raised in the stu. In the face of global mismanagement and injustice, there is an odd comfort in knowing life will continue on, even if we are unable to be there. The song is meant to serve as a unifying rallying cry, one that hopes to reorder our social priorities as wholistically humanitarian. It is intended to celebrate the strength of the biological world and humanity's place within it.
            </p>
          </div>
        </div>
      </div>

      <div class="external-links">
        <a :href="singleStreamLink" target="_blank" rel="noopener noreferrer" class="link-btn single-btn">Stream</a>
        <a :href="singlePurchaseLink" target="_blank" rel="noopener noreferrer" class="link-btn single-btn">Purchase</a>
      </div>
    </section>

    <section class="release album-release-container">
      <h2 class="release-title release-title--album">Year of the Dragon 3</h2>
      <p class="release-date release-date--album">January 28, 2025</p>

      <div
        class="album-card"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="album-card-inner" :class="{ 'is-flipped': isFlipped }">
          <div class="album-card-front" @click.stop="handleFrontClick">
            <img :src="albumCover" alt="Year of the Dragon 3 Album Art" class="album-art" />

            <div class="album-hover-overlay" :class="{ 'show-overlay': showOverlay }">
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

          <div class="album-card-back">
            <img :src="albumBg" alt="Year of the Dragon 3 Background" class="album-art-bg" />
            <div class="album-info">
              <p class="album-bio">
                Our first real project, YOTD3 is the concretion of years of making music. Some songs were 5 years old and some were barely a month old. Conceptually we attempted to capture the seasons we grew up together with and went through individually as we aged.
                In 2000 Win and Coleman were born, completing the trio. That’s the first Year of the Dragon!
                In 2012 the three of us lived together for the first time with our grandparents in Red River, NM. Lariat is the name of the easiest way down the ski valley there. That’s Year of the Dragon 2!
                In 2024 Coleman moved to Fayetteville and we made this album. THATS YEAR OF THE DRAGON 3. Year of the Dragon 3 is a testament to each other and to you.
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

      <div class="external-links external-links--album">
        <a
          href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2"
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn stream-btn"
        >
          Stream
        </a>
        <a
          href="https://music.apple.com/us/album/year-of-the-dragon-3/1788589474"
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn stream-btn"
        >
          Purchase
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import cover from "@/assets/YOTD3.webp";
import bg from "@/assets/yotd3-bg.webp";

const albumCover = cover;
const albumBg = bg;
const singleCover = "/assets/TheFishesandtheBeetles.webp";

const singleStreamLink = "https://distrokid.com/hyperfollow/lariat1/the-fish-and-the-beetles";
const singlePurchaseLink = "https://music.apple.com/us/album/the-fish-and-the-beetles-single/1848680022";

const isFlipped = ref(false);
const showOverlay = ref(false);
const singleShowOverlay = ref(false);
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
  tracklistSpaceBetween.value = el.scrollHeight > el.clientHeight + 1;
}

let ro: ResizeObserver | null = null;

onMounted(async () => {
  detectTouch();
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

function handleSingleMouseEnter() {
  if (!isTouch.value) singleShowOverlay.value = true;
}
function handleSingleMouseLeave() {
  if (!isTouch.value) singleShowOverlay.value = false;
}
function handleSingleClick() {
  if (isTouch.value) singleShowOverlay.value = !singleShowOverlay.value;
}
</script>

<style scoped>
.music-page {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  color: #e6fffa;
  text-align: center;
  display: grid;
  gap: 3rem;
}

.release {
  max-width: 860px;
  margin: 0 auto;
}

.release-title {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
}

.release-title--single {
  color: rgb(99, 151, 101);
  text-shadow: 1px 1px 2px rgba(0, 100, 203), 1px 1px 6px rgb(0, 0, 0), 1px 1px 3px rgb(0, 0, 0);
}

.release-title--album {
  color: #7bc8af;
}

.release-date--single {
  color: rgb(99, 151, 101);
  text-shadow: 1px 1px 2px rgba(0, 100, 203), 1px 1px 6px rgb(0, 0, 0), 1px 1px 3px rgb(0, 0, 0);
}

.release-date--album {
  color: #7bc8af;
}

.album-card {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  perspective: 1200px;
  margin: 1.5rem auto;
  position: relative;
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
}

.album-card-front {
  z-index: 2;
  transform: rotateY(0deg);
}

.album-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.album-art {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.album-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.68);
  opacity: 0;
  transition: opacity 0.28s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 6;
  text-align: center;
}

.album-hover-overlay.show-overlay,
.album-card-front:hover .album-hover-overlay {
  opacity: 1;
}

.album-info {
  position: relative;
  z-index: 2;
  padding: 2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  text-align:center;
  box-sizing:border-box;
}

.album-art-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.68);
  z-index: 1;
}

.album-bio {
  font-family: 'New Rocker', sans-serif;
  color: #c9f4e6;
  font-size: clamp(1rem, 2.6vw, 1.15rem);
  margin: 0 0 1rem 0;
  overflow:auto;
  max-height: calc(100% - 80px);
}

.single-bio {
  font-family: 'New Rocker', sans-serif;
  color: rgb(99, 151, 101);
  font-size: clamp(1.05rem, 2.8vw, 1.4rem);
  margin: 0;
  padding: 0 1rem;
  line-height: 1.4;
  max-height: 80%;
  overflow-y: auto;
  text-shadow: 1px 1px 2px rgba(0, 100, 203);
}

.tracklist {
  color: #7bc8afff;
  list-style-position: inside;
  padding: 2px 14px;
  margin: 0 0 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
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

.tracklist::-webkit-scrollbar {
  width: 5px;
}

.tracklist::-webkit-scrollbar-thumb {
  background: #7bc8af;
  border-radius: 10px;
}

.about-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 8px 16px;
  background-color: transparent;
  color: #e6fffa;
  border: 1px solid #e6fffa;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  transition: all 0.2s ease;
  z-index: 7;
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

.back-btn:hover { transform: scale(1.05); }

.external-links {
  display:flex;
  justify-content:center;
  gap:1rem;
  margin-top:1rem;
}

.external-links--album { margin-top: 0.75rem; }

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
  font-size: clamp(1rem, 3vw, 1.1rem);
  padding: 0.5em 1.25em;
  height: 44px;
  line-height: 1;
}

.link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  background-color: #7bc8af;
  color: #111;
}

.single-btn {
  color: rgb(99, 151, 101);
  border-color: rgb(99, 151, 101);
  text-shadow: 1px 1px 3px rgba(0, 100, 203);
}

.single-btn:hover {
  background-color: rgb(99, 151, 101);
  color: #111;
}

@media (min-width: 900px) {
  .music-page { display: grid; grid-template-columns: 1fr; gap: 4rem; }
  .album-card { max-width: 420px; }
}
</style>
