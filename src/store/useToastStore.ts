import React from 'react';
import { create } from 'zustand';

interface IToastContent {
  toastContent: string;
  setToastContent: (content: string) => void;
}

const useToastStore = create<IToastContent>((set) => ({
  toastContent: '',
  setToastContent: (content: string) => {
    set({ toastContent: content });
  },
  clearContent: () => {
    set({ toastContent: '' });
  },
}));

export default useToastStore;
