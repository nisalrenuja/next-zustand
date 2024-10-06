import { create } from "zustand";

interface States {
  chocolates: number;
}

export const useChocolateStore = create<States>(() => ({
  chocolates: 0,
}));
