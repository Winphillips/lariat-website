<template>
  <div class="site-container">
    <header class="site-header">
      <TopNav :currentSection="currentSection" @navigate="scrollTo" />
    </header>

    <div class="fixed-wheel" aria-hidden="true">
      <img src="@/assets/wheelstop1.png" alt="Wheel Stop" />
    </div>

    <div ref="scrollContainer" class="scroll-container">
      <section class="parking-spot" v-for="(spot, index) in spots" :key="index">
        <div class="scrollable-content">
          <div class="page-content">
            <component :is="spot.component" />
          </div>
        </div>
      </section>
    </div>

    <footer class="site-footer">
      <Footer />
    </footer>

    <div class="arrow left" v-show="currentSection > 0 && isMobile" @click="scrollTo(currentSection - 1)">
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
    <div class="arrow right" v-show="currentSection < spots.length - 1 && isMobile"
      @click="scrollTo(currentSection + 1)">
      <svg viewBox="0 0 24 24">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// No changes needed in the script section
import { ref, onMounted, onUnmounted, nextTick, shallowRef } from 'vue';
import Footer from '@/components/Footer.vue';
import TopNav from '@/components/TopNav.vue';
import Shows from '@/components/Shows.vue';
import Music from '@/components/Music.vue';
import Landing from '@/components/Landing.vue';
import Store from '@/components/Store.vue';

const spots = shallowRef([
  { component: Shows },
  { component: Music },
  { component: Landing },
  { component: Store },
]);

const scrollContainer = ref<HTMLElement | null>(null);
const currentSection = ref(2);
const isMobile = ref(window.innerWidth <= 820);

const scrollTo = (index: number) => {
  if (!scrollContainer.value) return;
  scrollContainer.value.scrollTo({ left: index * scrollContainer.value.clientWidth, behavior: 'smooth' });
};

const handleScroll = () => {
  if (!scrollContainer.value) return;
  const scrollLeft = scrollContainer.value.scrollLeft;
  scrollContainer.value.style.backgroundPositionX = `-${scrollLeft}px`;
  const idx = Math.round(scrollContainer.value.scrollLeft / scrollContainer.value.clientWidth);
  if (currentSection.value !== idx) currentSection.value = idx;
};

const onResize = () => { isMobile.value = window.innerWidth <= 820; };

onMounted(async () => {
  window.addEventListener('resize', onResize);
  await nextTick();
  if (!scrollContainer.value) return;
  scrollContainer.value.scrollLeft = currentSection.value * scrollContainer.value.clientWidth;
  scrollContainer.value.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  if (scrollContainer.value) scrollContainer.value.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.site-container {
  /* --- DIALS TO TUNE THE LAYOUT --- */
  --header-height: 8vh;
  --wheel-img-max-width: 88vw;
  --wheel-stop-top-offset: 1vh; /* Vertical offset of wheel stop from screen top */
  --content-top-padding: 15vh; /* Pushes content down from the top */
  --footer-top-margin: 0vh; /* Space between parking lot and footer */
  
  /* --- DIALS FOR THE FADE EFFECT --- */
  --fade-starts-at: 10vh; /* Point where content begins to fade */
  --fade-ends-at: 20vh; /* Point where content is fully visible */

  position: relative;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--header-height);
  width: 100%;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fixed-wheel {
  position: fixed;
  top: var(--wheel-stop-top-offset);
  left: 50%;
  transform: translateX(-50%);
  width: var(--wheel-img-max-width);
  max-width: 88vw;
  height: auto;
  z-index: 5;
  pointer-events: none;
}

.fixed-wheel img {
  max-height: 100%;
  max-width: var(--wheel-img-max-width);
  width: auto;
  height: auto;
  object-fit: contain;
  transform: rotate(-0.5deg);
}

.scroll-container {
  height: 100vh;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  background-image: url("@/assets/parkinglot.png");
  background-size: 400vw 100%;
  background-position: 0 0;
  /* CHANGE: This margin pushes the footer down */
  margin-bottom: var(--footer-top-margin);
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.parking-spot {
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: start;
  overflow-y: auto;
  position: relative;
  
  /* CHANGE: Simplified, reliable fade mask */
  -webkit-mask-image: linear-gradient(to bottom,
    transparent var(--fade-starts-at),
    black var(--fade-ends-at),
    black 100%
  );
  mask-image: linear-gradient(to bottom,
    transparent var(--fade-starts-at),
    black var(--fade-ends-at),
    black 100%
  );
}

.scrollable-content {
  position: relative;
  z-index: 10;
  padding-top: var(--content-top-padding);
}

.page-content {
  padding: 20px;
  box-sizing: border-box;
}

.site-footer {
  width: 100%;
}

.arrow {
  position: fixed;
  top: 55%;
  transform: translateY(-50%);
  z-index: 70;
  background-color: rgba(0, 0, 0, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s, background-color 0.3s;
  opacity: 0.5;
}

.arrow svg {
  fill: white;
  width: 30px;
  height: 30px;
}

.arrow:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.arrow.left {
  left: 20px;
}

.arrow.right {
  right: 20px;
}
</style>