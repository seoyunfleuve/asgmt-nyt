import React from 'react';
import ArticleList from '../templates/ArticleList';
import { useGetNytArticle } from '../api/articleSearchAPI';

export default function HomeScrap() {
  const { data } = useGetNytArticle();
  const articleArr = data?.response.docs || [];

  return <ArticleList articleArr={articleArr} />;
}
