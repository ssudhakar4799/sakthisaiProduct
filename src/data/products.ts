import { Product } from '../types';

// Mock images - in production, these would be actual product images
const mockImage = 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500';
const hair = 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500';
const hair2 = 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500';
const hairOil = 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500';
const hairOil2 = 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500';
const hairLeafOil = 'https://images.pexels.com/photos/7262773/pexels-photo-7262773.jpeg?auto=compress&cs=tinysrgb&w=500';
const hairLeafOil2 = 'https://images.pexels.com/photos/6621116/pexels-photo-6621116.jpeg?auto=compress&cs=tinysrgb&w=500';
const face = 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=500';
const face2 = 'https://images.pexels.com/photos/4465833/pexels-photo-4465833.jpeg?auto=compress&cs=tinysrgb&w=500';
const onionhairShampoo = 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=500';
const onionhairShampoo2 = 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500';
const kumkuma = 'https://images.pexels.com/photos/7755659/pexels-photo-7755659.jpeg?auto=compress&cs=tinysrgb&w=500';
const kumkuma2 = 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500';
const kkface = 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=500';
const kkface2 = 'https://images.pexels.com/photos/4465833/pexels-photo-4465833.jpeg?auto=compress&cs=tinysrgb&w=500';
const charcoal = 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500';
const charcoal2 = 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500';

export const products: Product[] = [
  {
    id: "hair-oil-1",
    name: "Herbal Hair Oil",
    category: "hair",
    subcategory: "oil",
    price: 245,
    sizes: [
      { size: "100ml", price: 245 },
      { size: "200ml", price: 395 }
    ],
    description: "Our Herbal Hair Oil is made with a blend of natural ingredients that nourish and strengthen your hair from the roots. Regular use helps reduce dandruff and promotes hair growth.",
    benefits: [
      "Nourish the scalp and hair",
      "Protect the scalp from sun and wind damage",
      "Keep the scalp hydrated",
      "Reduce dandruff and itchiness",
      "Stimulate hair growth",
      "Make hair shinier and softer"
    ],
    imageUrl: hair2,
    images: [hair],
    stock: 50,
    rating: 4.7,
    reviews: 124,
    featured: true,
    bestSeller: true,
    new: false
  },
  {
    id: "hair-oil-2",
    name: "Black Magic Secret Oil",
    category: "hair",
    subcategory: "oil",
    price: 295,
    sizes: [
      { size: "100ml", price: 295 },
      { size: "200ml", price: 475 }
    ],
    description: "Our Black Magic Secret Oil is specially formulated to keep your hair naturally black. It promotes hair growth, prevents hair loss, and nourishes the scalp.",
    benefits: [
      "Helps keep hair black",
      "Promotes hair growth",
      "Prevents hair loss",
      "Nourishes the scalp",
      "Reduces premature graying"
    ],
    imageUrl: hairOil,
    images: [hairOil2],
    stock: 35,
    rating: 4.8,
    reviews: 67,
    featured: false,
    bestSeller: true,
    new: false
  },
  {
    id: "hair-oil-3",
    name: "Hair Regrowth Rosemary & Curry Leaf Oil",
    category: "hair",
    subcategory: "oil",
    price: 225,
    sizes: [
      { size: "100ml", price: 225 },
      { size: "200ml", price: 380 }
    ],
    description: "Our Hair Regrowth Rosemary & Curry Leaf Oil stimulates hair growth, strengthens hair, prevents premature graying, and improves scalp health.",
    benefits: [
      "Stimulates hair growth",
      "Strengthens hair",
      "Prevents premature graying",
      "Improves scalp health"
    ],
    imageUrl: hairLeafOil,
    images: [hairLeafOil2],
    stock: 30,
    rating: 4.7,
    reviews: 53,
    featured: true,
    bestSeller: false,
    new: true
  },
  {
    id: "face-wash-1",
    name: "Redwine Face Wash",
    category: "skin",
    subcategory: "face wash",
    price: 285,
    sizes: [
      { size: "100ml", price: 285 }
    ],
    description: "Our Redwine Face Wash reduces dark spots, improves skin texture and tone, unblocks cleaning force, provides youthful glow, and prevents acne breakouts.",
    benefits: [
      "Reducing dark spots",
      "Improving skin texture and tone",
      "Unblock cleaning force",
      "Provides youthful glow",
      "Prevent acne breakouts"
    ],
    imageUrl: face,
    images: [face2],
    stock: 40,
    rating: 4.5,
    reviews: 78,
    featured: false,
    bestSeller: false,
    new: true
  },
  {
    id: "hair-shampoo-2",
    name: "Hair Regrowth Onion Shampoo",
    category: "hair",
    subcategory: "shampoo",
    price: 205,
    sizes: [
      { size: "100ml", price: 205 }
    ],
    description: "Our Hair Regrowth Onion Shampoo controls hair fall, strengthens hair, nourishes the scalp, rejuvenates hair follicles, controls split ends, and has anti-inflammatory and antimicrobial properties.",
    benefits: [
      "Hair fall control",
      "Strengthens hair",
      "Nourishes the scalp",
      "Rejuvenates hair follicles",
      "Split ends control",
      "Anti-inflammatory and antimicrobial properties"
    ],
    imageUrl: onionhairShampoo,
    images: [onionhairShampoo2],
    stock: 25,
    rating: 4.6,
    reviews: 61,
    featured: false,
    bestSeller: false,
    new: true
  },
  {
    id: "skin-oil-1",
    name: "Kumkumadi Oil",
    category: "skin",
    subcategory: "serum",
    price: 395,
    sizes: [
      { size: "30ml", price: 395 }
    ],
    description: "Our Kumkumadi Oil improves complexion, heals damaged and inflamed skin, prevents acne and pimples, reduces dark spots, pigmentation, and blemishes, hydrates the skin, can be used as a sunscreen, improves skin elasticity, and lessens scars.",
    benefits: [
      "Improves complexion",
      "Heals damaged and inflamed skin",
      "Prevents acne and pimples",
      "Reduces dark spots and pigmentation",
      "Hydrates the skin",
      "Can be used as a sunscreen",
      "Improves skin elasticity",
      "Lessens scars"
    ],
    imageUrl: kumkuma,
    images: [kumkuma2],
    stock: 15,
    rating: 4.9,
    reviews: 48,
    featured: true,
    bestSeller: false,
    new: true
  },
  {
    id: "face-wash-5",
    name: "Kumkumathi Face Wash",
    category: "skin",
    subcategory: "face wash",
    price: 325,
    sizes: [
      { size: "100ml", price: 325 }
    ],
    description: "Unlock the Power of Nature's Best Kumkumathi Face Wash infused with the goodness of Saffron to brighten skin and Licorice to soothe, with the refreshing essence of Orange.",
    benefits: [
      "Brightens and evens out skin tone",
      "Soothes and calms the skin",
      "Rich in antioxidants",
      "Contains natural saffron extracts",
      "Refreshing orange essence"
    ],
    imageUrl: kkface,
    images: [kkface2],
    stock: 40,
    rating: 4.7,
    reviews: 52,
    featured: true,
    bestSeller: false,
    new: true
  },
  {
    id: "face-wash-4",
    name: "Charcoal Face Wash",
    category: "skin",
    subcategory: "face wash",
    price: 295,
    sizes: [
      { size: "100ml", price: 295 }
    ],
    description: "Charcoal face wash deeply cleanses and removes impurities from the skin.",
    benefits: [
      "Removes Impurities",
      "Unclog Pores",
      "Leaves Skin Feeling Clean",
      "Provides Freshness"
    ],
    imageUrl: charcoal,
    images: [charcoal2],
    stock: 45,
    rating: 4.6,
    reviews: 58,
    featured: false,
    bestSeller: true,
    new: true
  }
];