<template>
  <div class="site-container">
    <header class="site-header">
      <TopNav :currentSection="currentSection" @navigate="scrollTo" />
    </header>

    <div class="wheel-stops-track" :style="{ transform: `translateX(-${wheelStopOffset}px)` }">
      <!-- Wheel Stop 1 (Shows) -->
      <div class="wheel-stop-item ws-1">
        <img src="@/assets/wheelstop1.png" alt="Shows Parking Stop" />
      </div>
      <!-- Wheel Stop 2 (Music) -->
      <div class="wheel-stop-item ws-2">
        <img src="@/assets/wheelstop2.png" alt="Music Parking Stop" />
      </div>
      <!-- Wheel Stop 3 (Landing) - Interactive Block -->
      <div class="wheel-stop-item ws-3 interactive-item">
        <img src="@/assets/wheelstop3.png" alt="Lariat Parking Stop" class="wheelstop-base" />
        <img v-if="isBlockVisible" src="@/assets/wheelstop3block.png" alt="Interactive Block" class="wheelstop-block"
          :class="{ shake: isShaking }" @click="handleBlockClick" />
        <div class="clickable-area-right" @click="openSecretPagePrompt"></div>
      </div>
      <!-- Wheel Stop 4 (Store) -->
      <div class="wheel-stop-item ws-4">
        <img src="@/assets/wheelstop4.png" alt="Store Parking Stop" />
      </div>
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

    <!-- Password Modal -->
    <div v-if="showPasswordModal" class="password-modal-overlay" @click.self="showPasswordModal = false">
      <div class="password-modal">
        <h3>Enter Password</h3>
        <input type="password" v-model="passwordInput" @keyup.enter="checkPassword" placeholder="***" />
        <div class="modal-buttons">
          <button @click="checkPassword">Enter</button>
          <button @click="showPasswordModal = false" class="cancel-btn">Cancel</button>
        </div>
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
    </div>

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
import { ref, onMounted, onUnmounted, nextTick, shallowRef } from 'vue';
import { useRouter } from "vue-router";
import Footer from '@/components/Footer.vue';
import TopNav from '@/components/TopNav.vue';
import Shows from '@/components/Shows.vue';
import Music from '@/components/Music.vue';
import Landing from '@/components/Landing.vue';
import Store from '@/components/Store.vue';

const spots = shallowRef([{ component: Shows }, { component: Music }, { component: Landing }, { component: Store }]);
const scrollContainer = ref<HTMLElement | null>(null);
const currentSection = ref(2);
const isMobile = ref(window.innerWidth <= 820);
const router = useRouter();
const wheelStopOffset = ref(0);

// Wheel stop 3 animations
const blockClickCount = ref(0);
const isBlockVisible = ref(true);
const isShaking = ref(false);

const handleBlockClick = () => {
  if (!isBlockVisible.value) return;
  blockClickCount.value++;
  isShaking.value = true;
  setTimeout(() => { isShaking.value = false; }, 500);
  if (blockClickCount.value >= 3) {
    setTimeout(() => { isBlockVisible.value = false; }, 250);
  }
};

// ---------------------PASSWORD---------------------------
const showPasswordModal = ref(false);
const passwordInput = ref('');
const passwordError = ref('');
const SECRET_PASSWORD = 'yotd3';

const openSecretPagePrompt = () => {
  passwordInput.value = '';
  passwordError.value = '';
  showPasswordModal.value = true;
};

const checkPassword = () => {
  if (passwordInput.value.toLowerCase() === SECRET_PASSWORD) {
    showPasswordModal.value = false;
    router.push('/secret-music');
  } else {
    passwordError.value = 'Incorrect Password';
    setTimeout(() => { passwordError.value = ''; }, 2000);
  }
};

const scrollTo = (index: number) => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ left: index * scrollContainer.value.clientWidth, behavior: 'smooth' });
  }
};

const handleScroll = () => {
  if (!scrollContainer.value) return;
  const { scrollLeft, clientWidth } = scrollContainer.value;
  scrollContainer.value.style.backgroundPositionX = `-${scrollLeft}px`;
  wheelStopOffset.value = scrollLeft;
  
  const idx = Math.round(scrollLeft / clientWidth);
  if (currentSection.value !== idx) currentSection.value = idx;
};

const onResize = () => {
  isMobile.value = window.innerWidth <= 820;
  if (scrollContainer.value) {
    const newScrollLeft = currentSection.value * scrollContainer.value.clientWidth;
    scrollContainer.value.scrollLeft = newScrollLeft;
    handleScroll();
  }
};

onMounted(async () => {
  window.addEventListener('resize', onResize);
  await nextTick();
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft = currentSection.value * scrollContainer.value.clientWidth;
    scrollContainer.value.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  if (scrollContainer.value) scrollContainer.value.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.site-container {
  --header-height: 8vh; /* ----DIAL: HEADER HEIGHT */
  --wheel-stop-top-offset: 1vh; /* ----DIAL: WHEEL STOP Y POSITION */
  --content-top-padding: 20vh; /* ----DIAL: CONTENT TOP PADDING */
  --footer-top-margin: 0vh; /* ----DIAL: FOOTER TOP MARGIN */
  --fade-starts-at: 10vh; /* ----DIAL: CONTENT FADE START */
  --fade-ends-at: 20vh; /* ----DIAL: CONTENT FADE END */
  --wheel-stop-height: 22vh; /* ----DIAL: WHEEL STOP VERTICAL STRETCH */
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

.wheel-stops-track {
  position: fixed;
  top: var(--wheel-stop-top-offset);
  left: 0;
  display: flex;
  width: 400vw;
  height: var(--wheel-stop-height);
  z-index: 5;
}
.wheel-stop-item {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}
.wheel-stop-item img {
  width: 90vw;
  height: auto;
  object-fit: contain;
  transform: rotate(-0.5deg) scaleY(1.1) translateY(-2vh);
  pointer-events: none;
}

.interactive-item .wheelstop-base,
.interactive-item .wheelstop-block {
  position: absolute;
}
.interactive-item .wheelstop-block {
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}

.ws-3 {
  transform: translateY(-3vh); /* ----DIAL: WHEEL STOP 3 Y-AXIS OFFSET */
}

/* Right of wheel stop 3 clickable */
.ws-3 .clickable-area-right {
  position: absolute;
  top: 0;
  left: 80%;
  width: 20%;
  height: 100%;
  z-index: 1;
  pointer-events: auto;
  cursor: pointer;
  background: transparent;
}

.shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0) rotate(-0.5deg); }
  20%, 80% { transform: translate3d(2px, 0, 0) rotate(-0.5deg); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0) rotate(-0.5deg); }
  40%, 60% { transform: translate3d(4px, 0, 0) rotate(-0.5deg); }
}

.top-nav {
  position: relative;
  z-index: 20;
  width: 100%;
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
  margin-bottom: var(--footer-top-margin);
}
.scroll-container::-webkit-scrollbar { display: none; }
.parking-spot {
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: start;
  overflow-y: auto;
  -webkit-mask-image: linear-gradient(to bottom, transparent var(--fade-starts-at), black var(--fade-ends-at));
  mask-image: linear-gradient(to bottom, transparent var(--fade-starts-at), black var(--fade-ends-at));
}
.scrollable-content {
  padding-top: var(--content-top-padding);
}
.page-content {
  padding: 20px;
  box-sizing: border-box;
}

.site-footer {
  width: 100%;
}
.password-modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8);
  display: flex; justify-content: center; align-items: center; z-index: 100; backdrop-filter: blur(5px);
}
.password-modal {
  background: #1a1a1a; padding: 2rem 2.5rem; border-radius: 12px; text-align: center;
  border: 2px solid rgb(99, 151, 101); box-shadow: 0 5px 25px rgba(0,0,0,0.5);
}
.password-modal input {
  background-color: #333; border: 2px solid #555; color: #fff; padding: 0.75rem; border-radius: 6px;
  text-align: center; font-size: 1.1rem; margin: 1rem 0; width: 100%; box-sizing: border-box;
}
.modal-buttons { display: flex; gap: 1rem; justify-content: center; }
.password-modal button {
  background: rgb(99, 151, 101); border: none; color: #fff; padding: 0.75rem 1.5rem;
  border-radius: 6px; cursor: pointer; font-weight: bold;
}
.password-modal button.cancel-btn { background: #444; }

.arrow {
  position: fixed; top: 55%; transform: translateY(-50%); z-index: 70; background-color: rgba(0, 0, 0, 0.3);
  width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  cursor: pointer; user-select: none; opacity: 0.5;
}
.arrow svg { fill: white; width: 30px; height: 30px; }
.arrow:hover { opacity: 1; background-color: rgba(0, 0, 0, 0.5); }
.arrow.left { left: 20px; }
.arrow.right { right: 20px; }


@media (max-width: 780px) {
  .site-container { --content-top-padding: 15vh; }
  .wheel-stop-item img {
    transform: rotate(-0.5deg) scaleY(1.7) translateY(-1vh);
    transform-origin: top center;
  }
}
@media (max-width: 660px) {
  .site-container { --content-top-padding: 10vh; }
   .wheel-stop-item img {
    transform: rotate(-0.5deg) scaleY(1.8) translateY(-1vh);
    transform-origin: top center;
  }
}
@media (max-width: 460px) {
  .site-container { --content-top-padding: 10vh; }
   .wheel-stop-item img {
    transform: rotate(-0.5deg) scaleY(1.9) translateY(-1vh);
    transform-origin: top center;
  }
}
</style>