export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  sizes: Array<{
    size: string;
    price: number;
  }>;
  description: string;
  benefits: string[];
  imageUrl: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  imageUrl: string;
  maxStock: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface FilterOptions {
  category?: string;
  subcategory?: string;
  priceRange?: [number, number];
  rating?: number;
  searchTerm?: string;
}

export interface SortOption {
  value: string;
  label: string;
}