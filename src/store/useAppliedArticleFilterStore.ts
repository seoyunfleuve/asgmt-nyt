import { create } from 'zustand';
import { ICurrentFilter, IFilter } from '../type/Filter.type';

export interface IApplyFilter extends ICurrentFilter {
  appliedArticleFilter: IFilter[];
  setAppliedArticleFilter: (newValue: IFilter[]) => void;
  clearAppliedArticleFilter: () => void;
}

const appliedInitialFilter = [
  {
    id: 1,
    title: 'headline',
    placeholder: '검색하실 헤드라인을 입력해주세요.',
  },
  { id: 2, title: 'date', placeholder: '날짜를 선택해주세요.' },
  { id: 3, title: 'country', placeholder: '', subfilter: [] },
];

const useAppliedArticleFilterStore = create<IApplyFilter>((set) => ({
  appliedArticleFilter: appliedInitialFilter,
  setAppliedArticleFilter: (newValue: IFilter[]) => {
    set((state) => {
      const updatedState = { ...state };
      updatedState.appliedArticleFilter = newValue;
      return updatedState;
    });
  },
  clearAppliedArticleFilter: () => {
    set(() => {
      return { appliedArticleFilter: [] };
    });
  },
}));

export default useAppliedArticleFilterStore;
