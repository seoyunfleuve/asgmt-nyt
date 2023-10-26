import React from 'react';
import { useLocation } from 'react-router-dom';
import FilterModal from '../organisms/FilterModal';
import { useArticleFilterState, useModalState } from '../store/useToggleStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import {
  useAppliedArticleFilterStore,
  useScrapArticleFilterStore,
} from '../store/useAppliedArticleFilterStore';
import { ARTICLE_FILTER_CATEGORY } from '../constant/list';

export default function ArticleFilter() {
  const location = useLocation();

  const { isToggle: isModalToggle, setIsToggle: setIsModalToggle } =
    useModalState();
  const { setIsToggle: setIsFilterToggle } = useArticleFilterState();
  const { currentArticleFilter, clearCurrentArticleFilter } =
    useArticleFilterStore();
  const { setAppliedArticleFilter: setScrapArticleFilter } =
    useScrapArticleFilterStore();
  const { setAppliedArticleFilter } = useAppliedArticleFilterStore();
  const articleFilterStore = useArticleFilterStore();

  const setApplyFilter =
    location.pathname === '/scrap'
      ? setScrapArticleFilter
      : setAppliedArticleFilter;

  const applyFilter = () => {
    setIsModalToggle(false);
    setIsFilterToggle(true);
    setApplyFilter(currentArticleFilter);
    clearCurrentArticleFilter();
  };

  return (
    <FilterModal
      category={ARTICLE_FILTER_CATEGORY}
      btnText="필터 적용하기"
      onClick={applyFilter}
      filterStore={articleFilterStore}
      isModal={isModalToggle}
    />
  );
}
