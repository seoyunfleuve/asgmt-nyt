import React, { useEffect, useState } from 'react';
import ArticleList from '../templates/ArticleList';
import NoData from '../molecules/NoData';
import useScrapDataStore from '../store/useScrapDataStore';

export default function Scrap() {
  const { scrapData } = useScrapDataStore();

  const articleArr = scrapData || [];

  return articleArr.length > 0 ? (
    <ArticleList articleArr={articleArr} />
  ) : (
    <NoData text="저장된 스크랩이 없습니다." />
  );
}
