import { create } from 'zustand';

interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<AppState>((set) => ({
  count: 0,
  increment: (): void => set((state) => ({ count: state.count + 1 })),
  decrement: (): void => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
