import React, { ReactElement } from 'react';
import { create } from 'zustand';

interface IModalContent {
  modalContent: ReactElement | null;
  setModalContent: (newContent: ReactElement) => void;
}

const useModalStore = create<IModalContent>((set) => ({
  modalContent: null,
  setModalContent: (modalContent: ReactElement) => {
    set({ modalContent });
  },
  clearContent: () => {
    set({ modalContent: null });
  },
}));

export default useModalStore;
