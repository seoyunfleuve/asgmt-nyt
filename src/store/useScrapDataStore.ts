import React from 'react';
import { create } from 'zustand';
import { IArticleCardProps } from '../type/Article.type';

interface IScrapData {
  scrapData: IArticleCardProps[];
  setScrapData: (updatedData: IArticleCardProps[]) => void;
}

const scrapArticle = localStorage.getItem('scrapArticle');
const scrapListArr = scrapArticle ? JSON.parse(scrapArticle) : [];

const useScrapDataStore = create<IScrapData>((set) => ({
  scrapData: scrapListArr,
  setScrapData: (updatedData) => {
    set({ scrapData: updatedData });
  },
  clearContent: () => {
    set({ scrapData: [] });
  },
}));

export default useScrapDataStore;
