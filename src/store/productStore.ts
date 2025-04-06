import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  images: string[];
  category: string;
  fabric: string;
  occasion: string;
  sizes: string[];
  colors: string[];
  stock: number;
  created_at: string;
  updated_at: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<Product>;
  fetchProductsByCategory: (category: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
}

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Embroidered Chaniya Choli',
    description: 'Beautiful traditional chaniya choli with intricate embroidery',
    price: 8999,
    images: ['https://images.unsplash.com/photo-1583391099995-0e67401bf5cc'],
    category: 'Navratri',
    fabric: 'Cotton',
    occasion: 'Festival',
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Blue'],
    stock: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Add more mock products as needed
];

export const useProductStore = create<ProductState>((set) => ({
  products: mockProducts,
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      // Mock API call
      set({ products: mockProducts, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred', loading: false });
    }
  },
  fetchProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      // Mock API call
      const product = mockProducts.find(p => p.id === id);
      if (!product) throw new Error('Product not found');
      set({ loading: false });
      return product;
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred', loading: false });
      throw error;
    }
  },
  fetchProductsByCategory: async (category) => {
    set({ loading: true, error: null });
    try {
      // Mock API call
      const products = mockProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
      set({ products, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred', loading: false });
    }
  },
  searchProducts: async (query) => {
    set({ loading: true, error: null });
    try {
      // Mock API call
      const products = mockProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description?.toLowerCase().includes(query.toLowerCase())
      );
      set({ products, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred', loading: false });
    }
  },
}));