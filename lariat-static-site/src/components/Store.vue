<template>
  <div class="store-page">
    <h1>Store/Under Construction</h1>
    <p class="subtitle">All merch will be sold through bandcamp or at shows</p>

    <div class="merch-grid">
      <div v-for="item in merchItems" :key="item.id" class="merch-card">
        <img :src="item.image" :alt="item.name" class="merch-image" />

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
import { getAllMerch } from "@/services/merchService";

const merchItems = getAllMerch();
</script>

<style scoped>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.merch-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
}
.merch-card:hover {
  transform: translateY(-5px);
}

.merch-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.merch-info {
  text-align: center;
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
</style>
