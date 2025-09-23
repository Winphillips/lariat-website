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
  bandcampUrl?: string;
}

// Restore the necessary image imports
import VelociraptorShirt from "@/assets/placeholder.jpg";
import VelociraptorSweatpants from "@/assets/placeholder.jpg";
/*
import DragonSticker from "@/assets/YOTDSUMMER.png";
import DragonStickerFall from "@/assets/YOTDFALL.png";
import DragonStickerSpring from "@/assets/YOTDSPRING.png";
import DragonStickerWinter from "@/assets/YOTDWINTER.png";
import StickerPack from "@/assets/StickerPack.jpg";
import VelociraptorLongsleeve from "@/assets/placeholder.jpg";
import VelociraptorHoodie from "@/assets/placeholder.jpg";
import DragonShirt from "@/assets/placeholder.jpg";
import DragonHoodie from "@/assets/placeholder.jpg";
import DragonEnamelPin from "@/assets/placeholder.jpg";
import LariatKeychain from "@/assets/placeholder.jpg";
import YearoftheDragon3CD from "@/assets/YOTD3.jpg";
import DragonCanvasBag from "@/assets/placeholder.jpg";
import DragonPatch from "@/assets/placeholder.jpg";
import DragonButton from "@/assets/placeholder.jpg";
import TemporaryTattooSheet from "@/assets/placeholder.jpg";
*/

const merchItems: MerchItem[] = [
  /*
  {
    id: 1,
    name: "Dragon Sticker (Summer)",
    type: "sticker",
    price: 3,
    image: DragonSticker,
    description: "Our first ever sticker. These are UV coated vinyl.",
    bandcampUrl: "https://lariat.bandcamp.com/merch/dragon-sticker-summer"
  },
  // ... other commented out items
  */
  {
    id: 6,
    name: "Velociraptor Shirt",
    type: "apparel",
    price: 25,
    new_price: 30,
    isHandmade: true,
    image: VelociraptorShirt,
    description: "A 1/1, handmade bleach shirt featuring our Velociraptor design. All blanks are thrifted",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" }, { name: "Blue", hex: "#0000FF" },
      { name: "Green", hex: "#008000" }, { name: "Pink", hex: "#FFC0CB" },
      { name: "Orange", hex: "#FFA500" }, { name: "Brown", hex: "#A52A2A" },
      { name: "Dark Green", hex: "#006400" }, { name: "Light Green", hex: "#90EE90" },
      { name: "True Blue", hex: "#0000FF" }, { name: "Navy Blue", hex: "#000080" }
    ],
    bandcampUrl: "https://lariat.bandcamp.com/merch/velociraptor-shirt"
  },
  {
    id: 7,
    name: "Velociraptor Sweatpants",
    type: "apparel",
    price: 30,
    isHandmade: true,
    image: VelociraptorSweatpants,
    description: "Flared Sweapants with our velociraptor design.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" }, { name: "Grey", hex: "#808080" },
      { name: "Blue", hex: "#0000FF" }, { name: "Teal", hex: "#008080" }
    ],
    bandcampUrl: "https://lariat.bandcamp.com/merch/velociraptor-sweatpants"
  },
];

// Restore the export functions
export const getAllMerch = (): MerchItem[] => merchItems;
export const getMerchById = (id: number): MerchItem | undefined =>
  merchItems.find((item) => item.id === id);