import { create } from 'zustand';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  signIn: async (email: string, password: string) => {
    set({ loading: true });
    try {
      // Mock authentication
      const user = { id: '1', email };
      set({ user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  signUp: async (email: string, password: string) => {
    set({ loading: true });
    try {
      // Mock authentication
      const user = { id: '1', email };
      set({ user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  signOut: async () => {
    set({ user: null });
  },
  setUser: (user) => set({ user, loading: false }),
}));