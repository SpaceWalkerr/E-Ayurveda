export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  category: string;
  discount: number;
  featured: boolean;
  benefits?: string[];
  ingredients?: string;
  usage?: string;
}

export interface Remedy {
  id: number;
  condition: string;
  description: string;
  herbs: string[];
  usage: string;
}