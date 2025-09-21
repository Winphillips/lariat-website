<template>
  <div ref="landingPageRef" class="page-content landing-page">
    <section class="band-photo-section">
      <img
        src="@/assets/band.png"
        alt="Lariat band photo"
        class="band-photo"
        :style="{ opacity: bandOpacity }"
      />
      <img
        src="@/assets/bandsolar.png"
        alt="Lariat band photo solarized"
        class="band-photo"
        :style="{ opacity: solarOpacity }"
      />
    </section>

    <section class="who-lariat-section">
      <h2>Who is Lariat?</h2>
      <div class="desktop-members">
        <div class="member-grid">
          <div
            v-for="member in members"
            :key="member.name"
            class="member-card"
            @mouseenter="handleMouseEnter(member)"
            @mouseleave="handleMouseLeave(member)"
            @click="handleClick(member)"
          >
            <img :src="member.image" :alt="member.name" />
          </div>
        </div>
        <div class="member-bio" :class="{ show: activeBio }">
          <p>{{ activeBio }}</p>
        </div>
      </div>
      <div class="mobile-members">
        <img src="@/assets/allheads.png" alt="All band members" />
      </div>
    </section>

    <section class="why-lariat-section">
      <h2>Why "Lariat"?</h2>
      <div class="lariat-image-container">
        <img src="@/assets/lariat.jpg" alt="Lariat" class="lariat-image" />
        <div class="text-overlay">
          <div class="desktop-text">
            <p>
              We grew up together and have always been very close, but in 2012 we got to
              live together in Red River, NM which really cemented our bonds. We spent most days goofin around, making
              up stories, havin the times of our lives, and hitting the slopes. On the mountain if anything happened and
              we just needed the safest way to the bottom, we’d take the trail called Lariat.
            </p>
            <p>
              For a lot of things in our life the best way to figure things out and deal with them is writing and
              through music. Our “Easiest Way Down” or our “Lariat”. If you relate to any of our music or just enjoy
              the sound, then welcome to the family. We’re glad to have you here :)
            </p>
          </div>
          <div class="mobile-text">
            <p>
              In 2012 we lived together in an old mining town turned small ski town called Red River, NM. On the mountain if anything happened and
              we just needed the safest way to the bottom, we’d take the trail called Lariat.
            </p>
            <p>
              For a lot of things in our life the best way to figure things out and deal with them is writing and
              through music. Our “Easiest Way Down”; our “Lariat”. If you relate to any of our music or just enjoy
              the sound, then welcome to the family. We’re glad to have you here :)
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="ascii-art-section">
      <div class="wrapper">
        <div class="ascii-portrait">
          <pre>
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIAT///GETSTANKEDON!</pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const landingPageRef = ref<HTMLElement | null>(null);

// --- Image Crossfade Logic ---
const bandOpacity = ref(1);
const solarOpacity = ref(0);

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const fadeDistance = 350;
  const progress = Math.min(scrollY / fadeDistance, 1);
  bandOpacity.value = 1 - progress;
  solarOpacity.value = progress;
};

// --- Member Image Cycle Logic ---
const members = ref([
  {
    name: 'trip',
    image: '/assets/trip.png',
    bio: 'Trip - lead vocals and rhythm guitar. If Lariat was ninja turtles hes like Leonardo.',
    intervalId: undefined as number | undefined,
  },
  {
    name: 'win',
    image: '/assets/win.png',
    bio: 'Win - producer, keys, and bass. If Lariat was ninja turtles hes like Michelangelo. He also made this website so he gets this extra sentence >:).',
    intervalId: undefined as number | undefined,
  },
  {
    name: 'coleman',
    image: '/assets/coleman.png',
    bio: 'Coleman - Lead guitar, bass, backing vocals. If Lariat was ninja turtles hes like Raphael.',
    intervalId: undefined as number | undefined,
  },
  {
    name: 'andrew',
    image: '/assets/andrew.png',
    bio: 'Andrew - drums. If Lariat was ninja turtles hes like Donatello.',
    intervalId: undefined as number | undefined,
  },
]);

const activeBio = ref('');

const cycleImages = (member: any) => {
  if (member.intervalId) clearInterval(member.intervalId);
  let count = 1;
  member.intervalId = window.setInterval(() => {
    member.image = `/assets/${member.name}${count}.png`;
    count = (count % 7) + 1;
  }, 200);
};

const stopCycle = (member: any) => {
  if (member.intervalId) {
    clearInterval(member.intervalId);
    member.intervalId = undefined;
  }
  member.image = `/assets/${member.name}.png`;
};

const handleMouseEnter = (member: any) => {
  stopCycle(member);
  activeBio.value = member.bio;
};

const handleMouseLeave = (member: any) => {
  cycleImages(member);
  activeBio.value = '';
};

const handleClick = (member: any) => {
  stopCycle(member);
  activeBio.value = member.bio;
};

// --- Lifecycle Hooks ---
onMounted(() => {
  // listen on window instead of a parent element
  window.addEventListener('scroll', handleScroll);

  // start cycling member images
  members.value.forEach(cycleImages);
});

onUnmounted(() => {
  // remove window scroll listener
  window.removeEventListener('scroll', handleScroll);

  // clear all member intervals
  members.value.forEach((member) => {
    if (member.intervalId) {
      clearInterval(member.intervalId);
    }
  });
});
</script>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.band-photo-section {
  position: relative;
  width: 80%;
  max-width: 1000px;
  margin: 8rem auto 4rem auto;
  aspect-ratio: 16 / 9;
}

.band-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.who-lariat-section {
  margin-bottom: 4rem;
}

.desktop-members {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.member-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
}

.member-card {
  cursor: pointer;
}

.member-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
}

.member-bio {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.75);
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  padding: 1rem;
  border-radius: 8px;
    color: #8ed5bf;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 1.2rem;
  text-align: center;
  pointer-events: none;
}

.member-bio.show {
  opacity: 1;
}

.mobile-members {
  display: none;
}

.why-lariat-section {
  margin-bottom: 4rem;
}

.lariat-image-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.lariat-image {
  width: 100%;
  height: auto;
  display: block;
}

.text-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #8fdcc4;
  text-shadow: black;
;
  padding: 2rem;
  box-sizing: border-box;
  font-size: 1.2rem; /* Increased size */
}

.mobile-text {
  display: none;
}

.desktop-text {
  display: block;
}

.ascii-art-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem 0;
}

.wrapper {
  width: 90vw;
  height: 90vh;
}

.ascii-portrait {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/assets/stanky.GIF');
  background-size: 60%;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.ascii-portrait pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  line-height: 0.8;
  font-size: 0.75vw;
  text-align: center;
  overflow: hidden;
  word-break: break-all;
}

@media (max-width: 768px) {
  .desktop-members {
    display: none;
  }

  .mobile-members {
    display: block;
  }

  .mobile-members img {
    width: 100%;
    height: auto;
  }

  .lariat-image-container {
    overflow: hidden;
  }

  .lariat-image {
    width: 200%;
    transform: translateX(-25%);
    filter: blur(2px) darken(0.8);
  }

  .text-overlay {
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .desktop-text {
    display: none;
  }
  .mobile-text {
    display: block;
    font-size: clamp(0.7rem, 3.5vw, 1.55rem);
  }

  .ascii-portrait pre {
    font-size: 1.2vw;
    line-height: 0.9;
  }
}
</style>