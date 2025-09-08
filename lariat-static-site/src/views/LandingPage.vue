<template>
  <div class="landing-page">
    <header>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="Band Logo" id="logo" />
        <span class="logo-text">LARIAT</span>
      </router-link>
      <TopNav />
    </header>

    <main>
      <section id="hero">
        <h1>Lariat</h1>
        <p>Catch our latest music, shows, and merch here. peepeepoopoo</p>
      </section>
      <section id="hero">
        <h1>Blahblah</h1>
        <p>Lorem impsum blah blo goopie bopp grundle grop
            Lorem impsum blah blo goopie bopp grundle grop.
            Lorem impsum blah blo goopie bopp grundle grop.
            Lorem impsum blah blo goopie bopp grundle grop.
            Lorem impsum blah blo goopie bopp grundle grop.</p>
      </section>
      <section id="photo">
        <img src="@/assets/YOTD3.jpg" alt="Year of the Dragon 3 Album Art" class="album-art" />
      </section>
      <section id="hidden-fun" v-show="showHidden">
        <h2>Hidden Easter Egg</h2>
        <p>Fun content goes here later.</p>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LandingPage",
  components: { TopNav, Footer },
  data() {
    return { showHidden: false };
  },
};
</script>

<style scoped>
#hero {
  max-width: 800px;
  margin: 2rem auto;
}

#hero p {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>