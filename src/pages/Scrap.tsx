import React, { useEffect, useState } from 'react';
import ArticleList from '../templates/ArticleList';
import NoData from '../molecules/NoData';
import useScrapDataStore from '../store/useScrapDataStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import { useArticleFilterState } from '../store/useToggleStore';
import {
  useAppliedArticleFilterStore,
  useScrapArticleFilterStore,
} from '../store/useAppliedArticleFilterStore';
import { IArticleCardProps } from '../type/Article.type';
import scrapFilter from '../utils/scrapFilter';

export default function Scrap() {
  const [data, setData] = useState<IArticleCardProps[]>([]);
  const { scrapData } = useScrapDataStore();
  const { isToggle: isFilterToggle, setIsToggle: setIsFilterToggle } =
    useArticleFilterState();
  const {
    appliedArticleFilter: scrapArticleFilter,
    clearAppliedArticleFilter: clearScrapArticleFilter,
  } = useScrapArticleFilterStore();
  const { clearAppliedArticleFilter } = useAppliedArticleFilterStore();
  const { clearCurrentArticleFilter } = useArticleFilterStore();

  const articleArr = data;

  useEffect(() => {
    clearAppliedArticleFilter();
    clearCurrentArticleFilter();
    setIsFilterToggle(false);
    setData(scrapData);
  }, []);

  useEffect(() => {
    setData(scrapData);
  }, [scrapData]);

  useEffect(() => {
    if (isFilterToggle) {
      const filteredData = scrapFilter(scrapData, scrapArticleFilter);
      setData(filteredData);
    }
  }, [scrapArticleFilter]);

  return articleArr.length > 0 ? (
    <ArticleList articleArr={articleArr} />
  ) : (
    <NoData text="저장된 스크랩이 없습니다." />
  );
}
