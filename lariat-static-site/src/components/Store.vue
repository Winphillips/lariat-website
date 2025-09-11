<template>
  <div class="page-content merch-page">
    <h1>Store</h1>
    <div class="legend">
      <span class="handmade-icon" role="img" aria-label="Handmade Icon"
        >✋</span
      >
      = Handmade (Each piece is 1 of 1)
    </div>
    <div class="controls">
      <div class="control-group">
        <span class="control-label">Filter by type:</span>
        <select v-model="selectedType" class="modern-select">
          <option value="">All</option>
          <option value="sticker">Stickers</option>
          <option value="apparel">Apparel</option>
          <option value="accessory">Accessories</option>
          <option value="music">Music</option>
        </select>
      </div>
      <div class="control-group">
        <span class="control-label">Sort by price:</span>
        <select v-model="sortOrder" class="modern-select">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
    <div class="merch-grid">
      <router-link
        v-for="item in filteredAndSortedItems"
        :key="item.id"
        :to="{ name: 'MerchItemDetail', params: { id: item.id } }"
        class="merch-item-link"
      >
        <div class="merch-item">
          <img :src="item.image" :alt="item.name" />
          <h3>
            {{ item.name }}
            <span
              v-if="item.isHandmade"
              class="handmade-icon"
              role="img"
              aria-label="Handmade"
              >✋</span
            >
          </h3>
          <p>${{ item.price }}</p>
          <div v-if="item.colors && item.colors.length" class="color-options">
            <span
              v-for="color in item.colors"
              :key="color.name"
              class="color-circle"
              :style="{ backgroundColor: color.hex }"
              :title="color.name"
            ></span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// Import the centralized data function instead of all the images
import { getAllMerch } from '@/services/merchService';

interface MerchItem {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  isHandmade?: boolean;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
}

const selectedType = ref("");
const sortOrder = ref("asc");
// Get the items from our service instead of the long, local list
const merchItems = ref<MerchItem[]>(getAllMerch());

const filteredAndSortedItems = computed(() => {
  let items = merchItems.value;
  if (selectedType.value) {
    items = items.filter((item) => item.type === selectedType.value);
  }
  return [...items].sort((a, b) =>
    sortOrder.value === "asc" ? a.price - b.price : b.price - a.price
  );
});
</script>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}

.merch-page {
  text-align: center;
}
.legend {
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
.controls {
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.control-group {
  display: flex;
  align-items: center;
}
.control-label {
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
}
.modern-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid rgb(99, 151, 101);
  color: rgb(99, 151, 101);
  text-shadow: none;
  padding: 0.25rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}
.merch-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.merch-item {
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}
.merch-item-link {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;
}
.merch-item-link:hover {
  transform: translateY(-5px);
}
.merch-item img {
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.merch-item h3 {
  margin: 0.75rem 0 0.2rem;
  font-size: 1.1rem;
}
.merch-item p {
  font-size: 1rem;
  font-weight: bold;
}
.color-options {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.color-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
</style>