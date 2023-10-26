import React, { useEffect } from 'react';

import ArticleList from '../templates/ArticleList';
import {
  useGetFilteredArticle,
  useGetNytArticle,
} from '../api/articleSearchAPI';
import NoData from '../molecules/NoData';
import { useArticleFilterState } from '../store/useToggleStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import {
  useAppliedArticleFilterStore,
  useScrapArticleFilterStore,
} from '../store/useAppliedArticleFilterStore';

export default function HomeScrap() {
  const { isToggle: isFilterToggle } = useArticleFilterState();
  const { setIsToggle: setIsFilterToggle } = useArticleFilterState();
  const { clearAppliedArticleFilter: clearScrapArticleFilter } =
    useScrapArticleFilterStore();
  const { appliedArticleFilter } = useAppliedArticleFilterStore();
  const { clearCurrentArticleFilter } = useArticleFilterStore();

  const { data: allArticleData } = useGetNytArticle();
  const { data: filteredData } = useGetFilteredArticle(appliedArticleFilter);

  const data = isFilterToggle ? filteredData : allArticleData;
  const articleArr = data?.response?.docs || [];

  useEffect(() => {
    clearScrapArticleFilter();
    clearCurrentArticleFilter();
    setIsFilterToggle(false);
  }, []);

  return articleArr.length > 0 ? (
    <ArticleList articleArr={articleArr} />
  ) : (
    <NoData text="불러올 기사가 없습니다." />
  );
}
