import { create } from 'zustand';

interface Address {
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone: string;
}

interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  shipping_address: Address;
  payment_intent: string | null;
  created_at: string;
  updated_at: string;
}

interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
  createOrder: (orderData: Omit<Order, 'id' | 'created_at' | 'updated_at'>) => Promise<Order>;
  getOrders: () => Promise<void>;
  getOrderById: (id: string) => Promise<Order>;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,

  createOrder: async (orderData) => {
    set({ loading: true, error: null });
    try {
      // Mock order creation
      const order: Order = {
        ...orderData,
        id: Math.random().toString(36).substr(2, 9),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      set((state) => ({ 
        orders: [order, ...state.orders],
        currentOrder: order,
        loading: false 
      }));
      return order;
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create order', loading: false });
      throw error;
    }
  },

  getOrders: async () => {
    set({ loading: true, error: null });
    try {
      // Mock fetching orders
      const orders = get().orders;
      set({ orders, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch orders', loading: false });
    }
  },

  getOrderById: async (id) => {
    set({ loading: true, error: null });
    try {
      // Mock fetching single order
      const order = get().orders.find(o => o.id === id);
      if (!order) throw new Error('Order not found');
      set({ currentOrder: order, loading: false });
      return order;
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch order', loading: false });
      throw error;
    }
  },
}));