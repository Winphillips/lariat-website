<template>
  <nav class="top-nav">

    <button @click="toggleMenu" class="hamburger-button" aria-label="Open menu">
      <!-- TODO: Get own icons instead of using w3 ones. -->
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hamburger-icon">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hamburger-icon">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>

    <a @click="$emit('navigate', 0)" class="desktop-link">Shows</a>
    <a @click="$emit('navigate', 1)" class="desktop-link">Music</a>

    <a @click="navigateAndClose(2)" class="logo-link" :class="{ active: currentSection === 2 }">LARIAT</a>

    <a @click="$emit('navigate', 3)" class="desktop-link">Store</a>
    <a
      class="desktop-link"
      href="https://www.youtube.com/@lariat333"
      target="_blank"
      rel="noopener noreferrer"
      >Videos</a
    >
  </nav>

  <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
    <nav class="mobile-nav-links">
      <a @click="navigateAndClose(2)">Home</a>
      <a @click="navigateAndClose(0)">Shows</a>
      <a @click="navigateAndClose(3)">Store</a>
      <a @click="navigateAndClose(1)">Music</a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  currentSection: Number,
});

const emit = defineEmits(['navigate']);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navigateAndClose = (index: number) => {
  emit('navigate', index);
  isMenuOpen.value = false;
};
</script>

<style scoped>
.desktop-link {
  display: inline-block;
}

.hamburger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-icon {
  width: 12vw;
  height: 9vh;
  fill: rgb(99, 151, 101);
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0));
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.mobile-menu.is-open {
  opacity: 1;
  pointer-events: all;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-links a {
  color: rgb(99, 151, 101);
  font-family: 'Arial', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu.is-open .mobile-nav-links a {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.mobile-menu.is-open .mobile-nav-links a:nth-child(2) { transition-delay: 0.25s; }
.mobile-menu.is-open .mobile-nav-links a:nth-child(3) { transition-delay: 0.3s; }
.mobile-menu.is-open .mobile-nav-links a:nth-child(4) { transition-delay: 0.35s; }
.mobile-menu.is-open .mobile-nav-links a:nth-child(5) { transition-delay: 0.4s; }


@media (max-width: 980px) {
  .desktop-link {
    display: none;
  }

  .hamburger-button {
    width: 20vw;
    height: 20vh;
    margin-top: -6vh;
    margin-right: 5vw;
    align-items: left;
    display: inline-block;
  }
}

@media (max-width: 800px) {
  .desktop-link {
    display: none;
  }

  .hamburger-button {
    width: 20vw;
    height: 20vh;
    margin-top: -3vh;
    margin-right: 5vw;
    align-items: left;
    display: inline-block;
  }
}

@media (max-width: 680px) {
  .desktop-link {
    display: none;
  }

  .hamburger-button {
    width: 20vw;
    height: 20vh;
    margin-top: -5vh;
    margin-right: 3vw;
    align-items: right;
    display: inline-block;
  }
}

@media (max-width: 580px) {
  .desktop-link {
    display: none;
  }

  .hamburger-button {
    width: 20vw;
    height: 20vh;
    margin-top: -5vh;
    margin-right: 3vw;
    align-items: right;
    display: inline-block;
  }
}

@media (max-width: 460px) {
  .desktop-link {
    display: none;
  }

  .hamburger-button {
    width: 16vw;
    height: 20vh;
    margin-top: -5vh;
    display: inline-block;
  }
}
</style>