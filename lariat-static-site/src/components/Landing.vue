<template>
  <div class="page-content landing-page">
    <ImageGallery />
    <div id="hero">
      <p>Catch our latest music, shows, and merch here.</p>
    </div>
    <div class="mobile-video-container">
      <iframe
        src="https://www.youtube.com/@lariat333"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageGallery from "@/components/ImageGallery.vue";
</script>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}
#hero {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}
#hero p {
  font-size: 1.2rem;
  font-weight: 700;
}
.mobile-video-container {
  display: none;
}

@media (max-width: 820px) {
  .mobile-video-container {
    display: block;
    width: 100%;
    max-width: 560px;
    margin: 2rem auto 0;
    aspect-ratio: 16 / 9;
  }
  .mobile-video-container iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
</style>

