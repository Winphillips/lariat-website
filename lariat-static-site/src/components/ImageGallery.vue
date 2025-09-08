<template>
  <div class="image-gallery-container">
    <div class="image-gallery">
      <img src="@/assets/poster1.jpg" alt="Concert Poster 1" class="gallery-image" />
      <img src="@/assets/poster2.jpg" alt="Concert Poster 2" class="gallery-image" />
      <img src="@/assets/poster3.jpg" alt="Concert Poster 3" class="gallery-image" />
      <img src="@/assets/poster4.jpg" alt="Concert Poster 4" class="gallery-image" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ImageGallery",
};
</script>

<style scoped>
.image-gallery-container {
  width: 100vw; 
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  padding-bottom: 1rem; 
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.image-gallery {
  display: inline-flex;
  gap: 1rem;
  padding: 0 1rem;
}

.gallery-image {
  height: 400px;
  width: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
}

.gallery-image:hover {
  transform: translateY(-5px);
}

/* screen sizes */
@media (max-width: 768px) {
  .gallery-image {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .gallery-image {
    height: 200px;
  }
}
</style>