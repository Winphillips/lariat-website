<template>
  <div class="music-page">
    <header>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="Band Logo" id="logo" />
        <span class="logo-text">LARIAT</span>
      </router-link>
      <TopNav />
    </header>

    <main>
      <section id="music">
        <h1>Music</h1>

        <div class="album-release-container">
          <h2>Year of the Dragon 3</h2>
          <p class="release-date">January 28, 2025</p>

          <div class="album-card">
            <div class="album-card-inner" :class="{ 'is-flipped': isFlipped }">
              <div class="album-card-front">
                <img src="@/assets/YOTD3.jpg" alt="Year of the Dragon 3 Album Art" class="album-art" />
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
                <img src="@/assets/yotd3-bg.jpg" alt="Year of the Dragon 3 Background" class="album-art-bg" />
                <div class="album-info">
                  <h3>About the Album</h3>
                  <p>Filler info filler info filler info filler info filler info filler info filler info filler info filler info filler info</p>
                  <button @click="isFlipped = false" class="back-btn">← Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "MusicPage",
  components: { TopNav, Footer },
  data() {
    return {
      isFlipped: false,
    };
  },
};
</script>

<style scoped>
#music {
  max-width: 900px;
  margin: 0 auto;
}

.album-release-container {
  margin-top: 2rem;
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
  width: 500px;
  height: 500px;
  perspective: 1000px;
  margin: 0 auto;
}

.album-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform-origin: center center;
}

.album-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.album-card-front, .album-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
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
  border: 4px solid #E6FFFA;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
}

.album-card-front {
  position: relative;
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
  padding-left: 0;
  text-align: center;
  list-style-position: inside;
  font-size: 1.1rem;
  line-height: 1.6;
}

.about-btn {
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #E6FFFA;
  color: #111;
  text-shadow: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}
.about-btn:hover {
  background-color: #bfffe7;
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
.back-btn {
  margin-top: 1.5rem;
  padding: 10px 20px;
  background-color: rgba(230, 255, 250, 0.8);
  color: #111;
  text-shadow: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: center;
}
.back-btn:hover {
  background-color: #E6FFFA;
}
</style>