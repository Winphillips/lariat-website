<template>
  <div class="epk-page">
    <header>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="Band Logo" id="logo" />
        <span class="logo-text">LARIAT</span>
      </router-link>
      <TopNav />
    </header>

    <main class="container">
      <section id="bio">
        <h1>Bio</h1>
        <h3>We are a band from Fayetteville, AR. We've been making music together for many years, but just became an active band 
            earlier this year. Trip and Win are brothers, Coleman is our cousin, but is more so a brother, and we adopted 
            Andrew from the Ozark National Forest, and he quickly became like a brother. As boys in the woods with unfiltered 
            internet access, Lariat merges folk rock, alt pop, and electronic indie into a fun quilt of sound. We released an 
            LP at the end of January!</h3>
            <h3>“So if things never get better, at least I’m by your side. I hope we live forever, or die at the same time.”</h3>
      </section>

      <section id="highlights">
        <h1>Highlights</h1>
        <ul>
          <li>Played first show at Corn Party 2 in 2023</li>
          <li>Released first album in 2025 fully DIY</li>
          <li>Started playing shows in the scene in March 2025</li>
          <li>Opened for Idle Valley, Ted Hammig, The Campaign</li>
        </ul>
      </section>

      <section id="releases">
        <h1>Releases</h1>
        <ul>
          <li>Year of the Dragon 3 (Album) - 1/28/25</li>
        </ul>
      </section>

      </main>
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "EPK",
  components: {
    TopNav,
    Footer
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  padding: 0 1rem;
  margin: 0 auto;
}

section { 
  margin-bottom: 3rem; 
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.25rem;
  line-height: 1.6;
}
</style>
