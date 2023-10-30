import React, { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import ArticleList from '../templates/ArticleList';
import { useGetNytArticle } from '../api/articleSearchAPI';
import NoData from '../molecules/NoData';
import { useArticleFilterState } from '../store/useToggleStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import {
  useAppliedArticleFilterStore,
  useScrapArticleFilterStore,
} from '../store/useAppliedArticleFilterStore';
import { ArticleContainer } from '../atoms/Container';
import intersectionObserver from '../utils/intersectionObserver';
import { IArticleSearchRes } from '../type/Article.type';

export default function Home() {
  const { setIsToggle: setIsFilterToggle } = useArticleFilterState();
  const { appliedArticleFilter } = useAppliedArticleFilterStore();
  const { clearAppliedArticleFilter: clearScrapArticleFilter } =
    useScrapArticleFilterStore();
  const { clearCurrentArticleFilter } = useArticleFilterStore();
  const { data, refetch, hasNextPage, fetchNextPage } = useGetNytArticle();
  const queryClient = useQueryClient();

  const articleData = data?.pages || [];

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  const { targetRef } = intersectionObserver({
    observerCallback,
  });

  useEffect(() => {
    clearScrapArticleFilter();
    clearCurrentArticleFilter();
    setIsFilterToggle(false);
  }, []);

  useEffect(() => {
    queryClient.removeQueries();
    refetch();
  }, [appliedArticleFilter]);

  return articleData[0]?.response.docs.length > 0 ? (
    <ArticleContainer>
      {articleData.map((group: IArticleSearchRes, idx) => {
        return <ArticleList key={idx} articleArr={group?.response.docs} />;
      })}
      <div ref={targetRef} />
    </ArticleContainer>
  ) : (
    <NoData text="불러올 기사가 없습니다." />
  );
}
