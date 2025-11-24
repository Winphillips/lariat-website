<template>
  <div class="store-page">
    <h1>Store</h1>
    <p class="subtitle">All merch will be sold through bandcamp or at shows for now</p>

    <div class="merch-grid">
      <div v-for="item in merchItems" :key="item.id" class="merch-card">
        <div v-if="item.image2" class="carousel-container">
          <div class="carousel-track" :style="getCarouselTrackStyle(item)">
            <div class="carousel-slide">
              <img :src="item.image" :alt="item.name" class="merch-image" />
            </div>
            <div class="carousel-slide">
              <img :src="item.image2" :alt="item.name" class="merch-image" />
            </div>
          </div>

          <button class="carousel-arrow left" @click.stop="changeImage(item, -1)">
            &lsaquo;
          </button>
          <button class="carousel-arrow right" @click.stop="changeImage(item, 1)">
            &rsaquo;
          </button>
        </div>

        <div v-else class="static-image-container">
          <img :src="item.image" :alt="item.name" class="merch-image" />
        </div>

        <div class="merch-info">
          <h2 class="merch-title">{{ item.name }}</h2>
          <p class="merch-price">${{ item.price }}</p>
          <p class="merch-description">{{ item.description }}</p>
          <a
            class="buy-button"
            :href="item.bandcampUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Bandcamp<i class="fab fa-bandcamp"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getAllMerch } from "@/services/merchService";
import type { MerchItem } from "@/services/merchService";

const merchItems = getAllMerch();
const currentImageIndex = reactive<Record<number, number>>({});

function changeImage(item: MerchItem, direction: number) {
  if (!item.image2) return;
  const currentIndex = currentImageIndex[item.id] || 0;
  const newIndex = (currentIndex + direction + 2) % 2;
  currentImageIndex[item.id] = newIndex;
}

function getCarouselTrackStyle(item: MerchItem) {
  const index = currentImageIndex[item.id] || 0;
  return { transform: `translateX(-${index * 100}%)` };
}
</script>


<style scoped>
.info{
  font-family: "Arial", sans-serif;
  color: gold;
  text-shadow: 0px 0px 4px rgba(0,0,0), -2px 2px 2px rgba(0,0,0);
}

.store-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.subtitle {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
}

.merch-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.merch-card {
  flex: 0 1 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
  aspect-ratio: 1 / 1;
  justify-content: space-between;
}
.merch-card:hover {
  transform: translateY(-5px);
}

/* Containers for static and carousel images to ensure consistent layout */
.static-image-container,
.carousel-container {
  width: 100%;
  height: 100%;
  max-height: 250px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  width: 200%;
  transition: transform 0.4s ease-in-out;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 3.5rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
  user-select: none;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
}

.carousel-container:hover .carousel-arrow {
  opacity: 0.8;
}
.carousel-arrow:hover {
  opacity: 1;
}

.carousel-arrow.left { left: 5px; }
.carousel-arrow.right { right: 5px; }

/* Universal image style for both static and carousel */
.merch-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  display: block;
}

.merch-info {
  text-align: center;
  width: 100%;
}

.merch-title {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.merch-price {
  font-size: 1rem;
  font-weight: bold;
  margin: 0.25rem 0 0.5rem;
}

.merch-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.buy-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #629aa9;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}
.buy-button:hover {
  background-color: #4f7d88;
}

@media (max-width: 800px) {
  .merch-card { flex: 0 1 45%; }
}
@media (max-width: 480px) {
  .merch-card { flex: 0 1 100%; }
}
</style>