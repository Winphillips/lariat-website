// This file will hold all your merchandise data, making it easy to manage.

// Define the structure of a merch item
export interface MerchItem {
  id: number;
  name: string;
  type: string;
  price: number;
  isHandmade?: boolean;
  image: string;
  description: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  new_price?: number;
}

// Import all your images here
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

// The master list of all merchandise
const merchItems: MerchItem[] = [
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
];

// Function to get all merch items
export const getAllMerch = () => merchItems;

// Function to find a single merch item by its ID
export const getMerchById = (id: number) => merchItems.find(item => item.id === id);