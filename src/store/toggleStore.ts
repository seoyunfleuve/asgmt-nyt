import { create } from 'zustand';

interface IToggle {
  isToggle: boolean;
  setIsToggle: (newValue: boolean) => void;
}

const createIsToggleStore = () =>
  create<IToggle>((set) => ({
    isToggle: false,
    setIsToggle: (newValue: boolean) => {
      set((state) => ({ isToggle: newValue }));
    },
  }));

export const useModalState = createIsToggleStore();

export const useArticleFilterState = createIsToggleStore();
