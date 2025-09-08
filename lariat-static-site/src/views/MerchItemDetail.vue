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
              <span class="color-preview" :style="{ backgroundColor: getColorHex(selectedColor) }"></span>
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
  name: "MerchItemDetail",
  components: { TopNav, Footer },
  data() {
    return {
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
      product: null,
      selectedSize: "",
      selectedColor: "",
    };
  },
  created() {
    this.product = this.merchItems.find(
      (item) => item.id === parseInt(this.$route.params.id as string)
    );
    if (this.product && this.product.sizes && this.product.sizes.length) {
      this.selectedSize = this.product.sizes[0];
    }
    if (this.product && this.product.colors && this.product.colors.length) {
      this.selectedColor = this.product.colors[0].name;
    }
  },
  methods: {
    getColorHex(colorName) {
      const color = this.product.colors.find(c => c.name === colorName);
      return color ? color.hex : '';
    }
  },
};
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