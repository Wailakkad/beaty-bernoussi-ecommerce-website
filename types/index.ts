import type { StaticImageData } from 'next/image';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'skincare' | 'makeup' | 'tools';
  type: string;
  image: string | StaticImageData;
  images: (string | StaticImageData)[];
  description: string;
  fullDescription: string;
  rating: number;
  reviews: number;
  ingredients?: string[];
  skinType?: string[];
  usage?: string;
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  rating: number;
  text: string;
  author: string;
  date: string;
  verified: boolean;
}

export interface OrderData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  items: CartItem[];
  total: number;
}