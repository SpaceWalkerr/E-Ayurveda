import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Ashwagandha Root Powder",
    description: "Organic Ashwagandha root powder for stress relief and immune support. Traditional adaptogen for vitality and balance.",
    price: 19.99,
    oldPrice: 24.99,
    image: "https://images.pexels.com/photos/6157246/pexels-photo-6157246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 20,
    featured: true,
    benefits: [
      "Reduces stress and anxiety",
      "Boosts immune function",
      "Improves sleep quality",
      "Enhances vitality and energy"
    ],
    ingredients: "100% Organic Ashwagandha Root (Withania somnifera)",
    usage: "Take 1/2 teaspoon (1-2g) daily with warm milk or water, preferably before bedtime."
  },
  {
    id: 2,
    name: "Triphala Churna",
    description: "Traditional Ayurvedic formula for digestive health and gentle detoxification, combining three powerful fruits.",
    price: 15.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/16169007/pexels-photo-16169007/free-photo-of-raw-cinnamon-spice-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "digestive",
    discount: 0,
    featured: true,
    benefits: [
      "Promotes regular bowel movements",
      "Supports digestive health",
      "Gentle detoxification",
      "Rich in antioxidants"
    ],
    ingredients: "Equal parts of Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula)",
    usage: "Take 1/2 teaspoon (1-2g) with warm water before bedtime or first thing in the morning on an empty stomach."
  },
  {
    id: 3,
    name: "Tulsi Tea Blend",
    description: "Holy Basil tea blend with ginger and cardamom for respiratory health, immunity, and stress relief.",
    price: 12.99,
    oldPrice: 16.99,
    image: "https://images.pexels.com/photos/6087008/pexels-photo-6087008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "teas",
    discount: 24,
    featured: true,
    benefits: [
      "Supports respiratory health",
      "Boosts immunity",
      "Reduces stress and anxiety",
      "Promotes mental clarity"
    ],
    ingredients: "Organic Tulsi (Holy Basil), Ginger, Cardamom, Cinnamon, and Clove",
    usage: "Steep 1 teaspoon in hot water for 5-7 minutes. Enjoy 1-3 cups daily."
  },
  {
    id: 4,
    name: "Chyawanprash",
    description: "Traditional herbal jam with Amla and over 40 herbs to boost immunity, vitality, and overall health.",
    price: 24.99,
    oldPrice: 29.99,
    image: "https://images.pexels.com/photos/6157267/pexels-photo-6157267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 17,
    featured: true,
    benefits: [
      "Strengthens immune system",
      "Rich in antioxidants",
      "Supports respiratory health",
      "Improves digestion and metabolism"
    ],
    ingredients: "Amla (Indian Gooseberry), Ghee, Honey, and over 40 traditional herbs and spices",
    usage: "Take 1-2 teaspoons daily, preferably in the morning with warm milk or water."
  },
  {
    id: 5,
    name: "Neem Leaf Capsules",
    description: "Powerful purifying herb for skin health, detoxification, and immune support.",
    price: 17.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/6693804/pexels-photo-6693804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 0,
    featured: false
  },
  {
    id: 6,
    name: "Brahmi Oil",
    description: "Traditional hair and scalp oil to promote hair growth, reduce stress, and enhance mental clarity.",
    price: 22.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/6693865/pexels-photo-6693865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "oils",
    discount: 0,
    featured: false
  },
  {
    id: 7,
    name: "Shatavari Root Powder",
    description: "Women's health tonic to support hormonal balance, lactation, and reproductive health.",
    price: 18.99,
    oldPrice: 23.99,
    image: "https://images.pexels.com/photos/16170301/pexels-photo-16170301/free-photo-of-curcuma-on-wooden-spoon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 21,
    featured: false
  },
  {
    id: 8,
    name: "Guduchi Stem Powder",
    description: "Immune-boosting herb known as 'Amrit' (nectar of immortality) for its rejuvenating properties.",
    price: 16.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/16170049/pexels-photo-16170049/free-photo-of-various-herbs-and-spices-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 0,
    featured: false
  },
  {
    id: 9,
    name: "Sesame Massage Oil",
    description: "Warming massage oil for Vata balancing, joint support, and deep tissue nourishment.",
    price: 19.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/6663362/pexels-photo-6663362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "oils",
    discount: 0,
    featured: false
  },
  {
    id: 10,
    name: "Amla Berry Powder",
    description: "One of the richest natural sources of Vitamin C for immunity, digestion, and skin health.",
    price: 14.99,
    oldPrice: 17.99,
    image: "https://images.pexels.com/photos/7291649/pexels-photo-7291649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 17,
    featured: false
  },
  {
    id: 11,
    name: "Turmeric Curcumin Capsules",
    description: "High-potency turmeric extract with black pepper for enhanced absorption and anti-inflammatory benefits.",
    price: 29.99,
    oldPrice: 34.99,
    image: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 14,
    featured: false
  },
  {
    id: 12,
    name: "Coconut Oil (Cold Pressed)",
    description: "Organic, cold-pressed coconut oil for cooking, skin care, and oil pulling.",
    price: 21.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "oils",
    discount: 0,
    featured: false
  },
  {
    id: 13,
    name: "Shilajit Resin",
    description: "Himalayan mineral pitch rich in fulvic acid for energy, vitality, and cellular regeneration.",
    price: 39.99,
    oldPrice: 49.99,
    image: "https://images.pexels.com/photos/6157189/pexels-photo-6157189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "supplements",
    discount: 20,
    featured: false
  },
  {
    id: 14,
    name: "Ginger-Tulsi Tea",
    description: "Warming blend to support digestion, clear congestion, and boost immunity.",
    price: 13.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/39347/tea-farmhouse-schnapps-drink-39347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "teas",
    discount: 0,
    featured: false
  },
  {
    id: 15,
    name: "Aloe Vera Juice",
    description: "Pure aloe vera juice for digestive health, skin care, and natural detoxification.",
    price: 18.99,
    oldPrice: 0,
    image: "https://images.pexels.com/photos/7190227/pexels-photo-7190227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "juices",
    discount: 0,
    featured: false
  },
  {
    id: 16,
    name: "Trikatu Formula",
    description: "Digestive fire enhancer with three warming spices to improve metabolism and nutrient absorption.",
    price: 15.99,
    oldPrice: 19.99,
    image: "https://images.pexels.com/photos/6156997/pexels-photo-6156997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "digestive",
    discount: 20,
    featured: false
  }
];