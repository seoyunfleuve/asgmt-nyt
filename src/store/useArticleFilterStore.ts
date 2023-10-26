import { create } from 'zustand';
import { ICurrentFilter, IFilter, ISubfilter } from '../type/Filter.type';
import isWhitespace from '../utils/isWhitespace';

export interface IArticleFilter extends ICurrentFilter {
  currentArticleFilter: IFilter[];
  setHeadlineFilter: (newValue: string) => void;
  setDateFilter: (newValue: string) => void;
  setCountryFilter: (newValue: ISubfilter) => void;
  setCurrentArticleFilter: (newValue: IFilter[]) => void;
  clearCurrentArticleFilter: () => void;
}

const currentInitialFilter = [
  {
    id: 1,
    title: 'headline',
    placeholder: '검색하실 헤드라인을 입력해주세요.',
  },
  { id: 2, title: 'date', placeholder: '날짜를 선택해주세요.' },
  { id: 3, title: 'country', placeholder: '', subfilter: [] },
];

const useArticleFilterStore = create<IArticleFilter>((set) => ({
  initialFilter: currentInitialFilter,
  currentArticleFilter: currentInitialFilter,
  setHeadlineFilter: (newValue: string) => {
    set((state) => {
      return {
        ...state,
        currentArticleFilter: [
          {
            ...state.currentArticleFilter[0],
            placeholder: isWhitespace(newValue)
              ? currentInitialFilter[0].placeholder
              : newValue,
          },
          ...state.currentArticleFilter.slice(1),
        ],
      };
    });
  },
  setDateFilter: (newValue: string) => {
    set((state) => {
      return {
        ...state,
        currentArticleFilter: [
          ...state.currentArticleFilter.slice(0, 1),
          {
            ...state.currentArticleFilter[1],
            placeholder: isWhitespace(newValue)
              ? currentInitialFilter[1].placeholder
              : newValue,
          },
          ...state.currentArticleFilter.slice(2),
        ],
      };
    });
  },
  setCountryFilter: (newValue: ISubfilter) => {
    set((state) => {
      const updatedState = { ...state };
      const updatedSubfilter =
        updatedState.currentArticleFilter[2].subfilter?.slice();

      const index = updatedSubfilter?.findIndex(
        (item) => item?.id === newValue.id
      );

      if (index !== undefined && index !== -1) {
        updatedSubfilter?.splice(index, 1);
      } else {
        updatedSubfilter?.push(newValue);
      }
      return {
        ...state,
        currentArticleFilter: [
          ...state.currentArticleFilter.slice(0, 2),
          {
            ...state.currentArticleFilter[2],
            subfilter: updatedSubfilter,
          },
          ...state.currentArticleFilter.slice(3),
        ],
      };
    });
  },
  setCurrentArticleFilter: (newValue: IFilter[]) => {
    set(() => {
      return {
        currentArticleFilter: newValue,
      };
    });
  },
  clearCurrentArticleFilter: () => {
    set(() => {
      return { currentArticleFilter: currentInitialFilter };
    });
  },
}));

export default useArticleFilterStore;
