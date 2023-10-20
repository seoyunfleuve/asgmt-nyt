import React from 'react';
import ArticleCard from '../organisms/ArticleCard';
import { ArticleListContainer } from '../atoms/Container';
import { IArticle } from '../type/Article.type';

export default function ArticleList({
  articleArr,
}: {
  articleArr: IArticle[];
}) {
  return (
    <ArticleListContainer>
      {articleArr?.map((el: IArticle) => {
        return (
          <ArticleCard
            key={el.web_url}
            byline={el.byline}
            headline={el.headline}
            source={el.source}
            pubDate={el.pub_date}
            url={el.web_url}
          />
        );
      })}
    </ArticleListContainer>
  );
}
