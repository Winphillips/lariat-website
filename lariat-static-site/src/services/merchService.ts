// merchservice.ts
export interface MerchItem {
  id: number;
  name: string;
  type: string;
  price: number;
  isHandmade?: boolean;
  image: string;
  image2?: string; // optional back image
  description: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  new_price?: number;
  bandcampUrl?: string;
}

// image imports
import VeloshirtFront from "@/assets/Veloshirt-front.webp";
import VeloshirtBack from "@/assets/Veloshirt-back.webp";
import VelociraptorSweatpants from "@/assets/placeholder.jpg";

const merchItems: MerchItem[] = [
  {
    id: 6,
    name: "Velociraptor Shirt",
    type: "apparel",
    price: 25,
    new_price: 30,
    isHandmade: true,
    image: VeloshirtFront,
    image2: VeloshirtBack,
    description: "A 1/1, handmade bleach shirt featuring our Velociraptor design. All blanks are thrifted",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" }, { name: "Blue", hex: "#0000FF" },
      { name: "Green", hex: "#008000" }, { name: "Pink", hex: "#FFC0CB" },
      { name: "Orange", hex: "#FFA500" }, { name: "Brown", hex: "#A52A2A" },
      { name: "Dark Green", hex: "#006400" }, { name: "Light Green", hex: "#90EE90" },
      { name: "True Blue", hex: "#0000FF" }, { name: "Navy Blue", hex: "#000080" }
    ],
    bandcampUrl: "https://lariatmusic.bandcamp.com/merch/velociraptor-shirt"
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

export const getAllMerch = (): MerchItem[] => merchItems;
export const getMerchById = (id: number): MerchItem | undefined =>
  merchItems.find((item) => item.id === id);
