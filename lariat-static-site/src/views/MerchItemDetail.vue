<template>
  <div class="merch-item-detail-page">
    <header>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="Band Logo" id="logo" />
        <span class="logo-text">LARIAT</span>
      </router-link>
      <TopNav />
    </header>

    <main>
      <section id="item-detail" v-if="product">
        <div class="item-image">
          <img :src="product.image" :alt="product.name" />
        </div>

        <div class="item-info">
          <h1>
            {{ product.name }}
            <span v-if="product.isHandmade" class="handmade-icon" role="img" aria-label="Handmade">✋</span>
          </h1>
          <p class="price">${{ product.price }}</p>
          <p class="description">{{ product.description }}</p>

          <div class="options">
            <div class="option-group" v-if="product.sizes && product.sizes.length">
              <label for="size-select">Size:</label>
              <select id="size-select" v-model="selectedSize">
                <option v-for="size in product.sizes" :key="size" :value="size">{{ size }}</option>
              </select>
            </div>

            <div class="option-group" v-if="product.colors && product.colors.length">
              <label for="color-select">Color:</label>
              <select id="color-select" v-model="selectedColor">
                <option v-for="color in product.colors" :key="color.name" :value="color.name">{{ color.name }}</option>
              </select>
              <span class="color-preview" :style="{ backgroundColor: selectedColorHex }"></span>
            </div>
          </div>
          
          <p class="disclaimer" v-if="product.isHandmade">
            Note: The color may not be a totally accurate representation of the final product due to the unique nature of the process. We can send a proof to see if you want it.
          </p>
          <p class="disclaimer" v-if="product.isHandmade">
            Also, a note that the graphic may be a different color as all blends and dyes bleach differently.
          </p>

          <button class="buy-button">Buy Now</button>
        </div>
      </section>
      <section v-else>
        <p>Product not found.</p>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";
import { getMerchById, type MerchItem } from '@/services/merchService';

const route = useRoute();

// Reactive variables for the selected options
const selectedSize = ref('');
const selectedColor = ref('');

// Find the product based on the ID in the URL
const product = computed(() => {
  const itemId = parseInt(route.params.id as string, 10);
  return getMerchById(itemId);
});

// Color Hex
const selectedColorHex = computed(() => {
  if (!product.value?.colors) return '';
  const color = product.value.colors.find(c => c.name === selectedColor.value);
  return color ? color.hex : '';
});

watch(product, (newProduct) => {
  if (newProduct) {
    if (newProduct.sizes?.length) {
      selectedSize.value = newProduct.sizes[0];
    }
    if (newProduct.colors?.length) {
      selectedColor.value = newProduct.colors[0].name;
    }
  }
}, { immediate: true });
</script>

<style scoped>
#item-detail {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.item-image img {
  width: 500px;
  border-radius: 12px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.item-info {
  text-align: left;
  max-width: 500px;
}
.item-info h1 {
  font-size: 2.5rem;
  margin: 0 0 1rem;
}
.price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.description {
  margin-bottom: 2rem;
}
.options {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.option-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.option-group label {
  font-weight: bold;
}
.option-group select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgb(99, 151, 101);
  color: #fff;
  text-shadow: none;
  padding: 0.25rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}
.color-preview {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.disclaimer {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin: 0.5rem 0;
}
.buy-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: rgb(99, 151, 101);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  border: none;
  cursor: pointer;
}
.buy-button:hover {
  background-color: rgb(80, 120, 82);
}
</style>