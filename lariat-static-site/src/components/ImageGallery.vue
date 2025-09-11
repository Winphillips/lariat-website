<template>
  <div class="gallery-carousel">
    <button @click="prevImage" class="arrow prev">&lt;</button>
    <div class="image-container">
      <img :src="currentImage" alt="Gallery Image" class="gallery-image" />
    </div>
    <button @click="nextImage" class="arrow next">&gt;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";

export default defineComponent({
  name: "ImageGallery",
  data() {
    return {
      images: [poster1, poster2, poster3, poster4],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage(): string {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
});
</script>

<style scoped>
.gallery-carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  aspect-ratio: 4 / 3;
}

.image-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  opacity: 0;
}

.gallery-carousel:hover .arrow {
  opacity: 1;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.arrow.prev {
  left: 1rem;
}

.arrow.next {
  right: 1rem;
}
</style>