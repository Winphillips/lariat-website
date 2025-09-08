<template>
  <div class="merch-page">
    <header>
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="Band Logo" id="logo" />
        <span class="logo-text">LARIAT</span>
      </router-link>
      <TopNav />
    </header>

    <main>
      <section id="merch">
        <h1>Merchandise</h1>
        <div class="legend">
          <span class="handmade-icon" role="img" aria-label="Handmade Icon">✋</span> = Handmade
          (Each piece is 1 of 1)
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
                <span v-if="item.isHandmade" class="handmade-icon" role="img" aria-label="Handmade">✋</span>
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
      </section>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";

import DragonSticker from "@/assets/YOTDSUMMER.png";
import DragonStickerFall from "@/assets/YOTDFALL.png";
import DragonStickerSpring from "@/assets/YOTDSPRING.png";
import DragonStickerWinter from "@/assets/YOTDWINTER.png";
import StickerPack from "@/assets/StickerPack.jpg";
import VelociraptorShirt from "@/assets/placeholder.jpg";
import VelociraptorSweatpants from "@/assets/placeholder.jpg";
import VelociraptorLongsleeve from "@/assets/placeholder.jpg";
import VelociraptorHoodie from "@/assets/placeholder.jpg";
import DragonShirt from "@/assets/placeholder.jpg";
import DragonHoodie from "@/assets/placeholder.jpg";
import DragonEnamelPin from "@/assets/placeholder.jpg";
import LariatKeychain from "@/assets/placeholder.jpg";
import YearoftheDragon3CD from "@/assets/YOTD3.jpg";

export default {
  name: "MerchPage",
  components: { TopNav, Footer },
  data() {
    return {
      selectedType: "",
      sortOrder: "asc",
      merchItems: [
        { id: 1, name: "Dragon Sticker (Summer)", type: "sticker", price: 3, image: DragonSticker, description: "Our first ever sticker. These are UV coated vinyl.", sizes: [], colors: [] },
        { id: 2, name: "Dragon Sticker (Fall)", type: "sticker", price: 3, image: DragonStickerFall, description: "Our first ever sticker. These are UV coated vinyl.", sizes: [], colors: [] },
        { id: 3, name: "Dragon Sticker (Spring)", type: "sticker", price: 3, image: DragonStickerSpring, description: "Our first ever sticker. These are UV coated vinyl.", sizes: [], colors: [] },
        { id: 4, name: "Dragon Sticker (Winter)", type: "sticker", price: 3, image: DragonStickerWinter, description: "Our first ever sticker. These are UV coated vinyl.", sizes: [], colors: [] },
        { id: 5, name: "Sticker Pack (All 4)", type: "sticker", price: 9, image: StickerPack, description: "Get all four seasonal Dragon stickers for a discounted price!", sizes: [], colors: [] },
        { id: 6, name: "Velociraptor Shirt", type: "apparel", price: 25, new_price: 30, isHandmade: true, image: VelociraptorShirt, description: "A one-of-a-kind, handmade shirt featuring a unique Velociraptor graphic.", sizes: ["S", "M", "L", "XL"], colors: [{name: "Black", hex: "#000000"}, {name: "Blue", hex: "#0000FF"}, {name: "Green", hex: "#008000"}, {name: "Pink", hex: "#FFC0CB"}, {name: "Orange", hex: "#FFA500"}, {name: "Brown", hex: "#A52A2A"}, {name: "Dark Green", hex: "#006400"}, {name: "Light Green", hex: "#90EE90"}, {name: "True Blue", hex: "#0000FF"}, {name: "Navy Blue", hex: "#000080"}] },
        { id: 7, name: "Velociraptor Sweatpants", type: "apparel", price: 30, isHandmade: true, image: VelociraptorSweatpants, description: "Comfortable and stylish sweatpants with a custom handmade Velociraptor design.", sizes: ["S", "M", "L", "XL"], colors: [{name: "Black", hex: "#000000"}, {name: "Grey", hex: "#808080"}, {name: "Blue", hex: "#0000FF"}, {name: "Teal", hex: "#008080"}] },
        { id: 8, name: "Velociraptor Longsleeve", type: "apparel", price: 25, isHandmade: true, image: VelociraptorLongsleeve, description: "A custom longsleeve shirt with a handmade Velociraptor graphic.", sizes: ["S", "M", "L", "XL"], colors: [{name: "Black", hex: "#000000"}, {name: "Blue", hex: "#0000FF"}, {name: "Green", hex: "#008000"}, {name: "Pink", hex: "#FFC0CB"}, {name: "Orange", hex: "#FFA500"}, {name: "Brown", hex: "#A52A2A"}, {name: "Dark Green", hex: "#006400"}, {name: "Light Green", hex: "#90EE90"}, {name: "True Blue", hex: "#0000FF"}, {name: "Navy Blue", hex: "#000080"}] },
        { id: 9, name: "Velociraptor Hoodie", type: "apparel", price: 35, isHandmade: true, image: VelociraptorHoodie, description: "A warm hoodie with a unique, handmade Velociraptor graphic.", sizes: ["S", "M", "L", "XL"], colors: [{name: "Black", hex: "#000000"}, {name: "Blue", hex: "#0000FF"}, {name: "Green", hex: "#008000"}, {name: "Pink", hex: "#FFC0CB"}, {name: "Orange", hex: "#FFA500"}, {name: "Brown", hex: "#A52A2A"}, {name: "Dark Green", hex: "#006400"}, {name: "Light Green", hex: "#90EE90"}, {name: "True Blue", hex: "#0000FF"}, {name: "Navy Blue", hex: "#000080"}] },
        { id: 10, name: "Dragon Shirt", type: "apparel", price: 20, new_price: 25, image: DragonShirt, description: "Our custom band tee with the Lariat Dragon graphic.", sizes: ["S", "M", "L", "XL"], colors: [] },
        { id: 11, name: "Dragon Hoodie", type: "apparel", price: 45, image: DragonHoodie, description: "A warm hoodie with a custom band graphic.", sizes: ["S", "M", "L", "XL"], colors: [] },
        { id: 12, name: "Lariat Dragon Enamel Pin", type: "accessory", price: 6, image: DragonEnamelPin, description: "A high-quality enamel pin to accessorize your jacket or backpack.", sizes: [], colors: [] },
        { id: 13, name: "Lariat Keychain", type: "accessory", price: 8, image: LariatKeychain, description: "A simple, yet stylish keychain to keep your keys organized.", sizes: [], colors: [] },
        { id: 14, name: "Year of the Dragon 3 CD", type: "music", price: 10, image: YearoftheDragon3CD, description: "Our full-length debut album on physical CD.", sizes: [], colors: [] },
      ],
    };
  },
  computed: {
    filteredAndSortedItems() {
      let items = this.merchItems;
      if (this.selectedType) {
        items = items.filter(item => item.type === this.selectedType);
      }
      return items.sort((a, b) =>
        this.sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    },
  },
};
</script>

<style scoped>
#merch {
  max-width: 960px;
  margin: 0 auto;
}

.legend {
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #fff;
}
.handmade-icon {
  font-size: 1.2em;
}

.controls {
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
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
.modern-select:hover {
  background: rgb(99, 151, 101);
  color: #fff;
}
.modern-select:focus {
  outline: none;
}

.merch-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.merch-item-link {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;
}
.merch-item-link:hover {
  transform: translateY(-5px);
}
.merch-item {
  width: 200px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 12px;
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