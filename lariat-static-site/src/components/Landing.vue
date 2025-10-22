<template>
  <div ref="landingPageRef" class="page-content landing-page">
    <section class="band-photo-section">
      <img :src="bandImg" alt="Lariat band photo" class="band-photo" :style="{ opacity: bandOpacity }" />
      <img :src="bandsolarImg" alt="Lariat band photo solarized" class="band-photo" :style="{ opacity: solarOpacity }" />
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
        <img :src="allheadsImg" alt="All band members" />
      </div>
    </section>

    <section class="why-lariat-section">
      <h2>Why "Lariat"?</h2>
      <div class="lariat-image-container">
        <img :src="lariatImg" alt="Lariat" class="lariat-image" />
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
              In 2012 we lived together in an old mining town turned ski town called Red River, NM. If anything happened and
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
LARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLATE
IATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLARIATLAR
          </pre>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import bandImgSrc from '@/assets/band.png'
import bandsolarImgSrc from '@/assets/bandsolar.png'
import allheadsImgSrc from '@/assets/allheads.png'
import lariatImgSrc from '@/assets/lariat.jpg'

const BASE = (import.meta.env.BASE_URL as string) ?? '/'

const landingPageRef = ref<HTMLElement | null>(null)

const bandOpacity = ref(1)
const solarOpacity = ref(0)

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset
  const fadeDistance = 350
  const progress = Math.min(scrollY / fadeDistance, 1)
  bandOpacity.value = 1 - progress
  solarOpacity.value = progress
}

type Member = {
  name: string
  image: string
  bio: string
  intervalId?: number
}

const members = ref<Member[]>([
  {
    name: 'trip',
    image: `${BASE}assets/trip.png`,
    bio: 'Trip - lead vocals and rhythm guitar. If Lariat was ninja turtles hes like Leonardo.',
    intervalId: undefined,
  },
  {
    name: 'win',
    image: `${BASE}assets/win.png`,
    bio: 'Win - producer, keys, and bass. If Lariat was ninja turtles hes like Michelangelo. He also made this website so he gets this extra sentence >:).',
    intervalId: undefined,
  },
  {
    name: 'coleman',
    image: `${BASE}assets/coleman.png`,
    bio: 'Coleman - Lead guitar, bass, backing vocals. If Lariat was ninja turtles hes like Raphael.',
    intervalId: undefined,
  },
  {
    name: 'andrew',
    image: `${BASE}assets/andrew.png`,
    bio: 'Andrew - drums. If Lariat was ninja turtles hes like Donatello.',
    intervalId: undefined,
  },
])

const activeBio = ref('')

function cycleImages(member: Member) {
  if (member.intervalId) {
    clearInterval(member.intervalId)
  }
  let count = 1
  member.intervalId = window.setInterval(() => {
    member.image = `${BASE}assets/${member.name}${count}.png`
    count = (count % 7) + 1
  }, 200)
}

function stopCycle(member: Member) {
  if (member.intervalId) {
    clearInterval(member.intervalId)
    member.intervalId = undefined
  }
  member.image = `${BASE}assets/${member.name}.png`
}

const handleMouseEnter = (member: Member) => {
  stopCycle(member)
  activeBio.value = member.bio
}

const handleMouseLeave = (member: Member) => {
  cycleImages(member)
  activeBio.value = ''
}

const handleClick = (member: Member) => {
  stopCycle(member)
  activeBio.value = member.bio
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  members.value.forEach((m) => cycleImages(m))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  members.value.forEach((m) => {
    if (m.intervalId) clearInterval(m.intervalId)
  })
})

const bandImg = bandImgSrc
const bandsolarImg = bandsolarImgSrc
const allheadsImg = allheadsImgSrc
const lariatImg = lariatImgSrc
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
   mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
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
  background: rgba(0, 0, 0, 0.6);
  color: #c6ece0;
  text-shadow: -2px 2px 2px black;
  padding: 0 1rem;
  box-sizing: border-box;
  font-size: clamp(1rem, 2.2vw, 1.5rem);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c6ece0 transparent;
}

.text-overlay::-webkit-scrollbar {
  width: 8px;
}

.text-overlay::-webkit-scrollbar-track {
  background: transparent;
}

.text-overlay::-webkit-scrollbar-thumb {
  background-color: #c6ece0;
  border-radius: 10px;
  border: 3px solid transparent;
  background-clip: content-box;
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
    background: rgba(0, 0, 0, 0.7);
  }
  .desktop-text {
    display: none;
  }
  .mobile-text {
    display: block;
    font-size: clamp(1rem, 4.5vw, 2.3rem);
    font-family: Arial, sans-serif;
    text-align: center;
  }

  .ascii-portrait pre {
    font-size: 1.2vw;
    line-height: 0.9;
  }
}
</style>