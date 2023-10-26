import React from 'react';
import ArticleCard from '../organisms/ArticleCard';
import { ArticleListContainer } from '../atoms/Container';
import { IArticle, IArticleCardProps } from '../type/Article.type';

export default function ArticleList({
  articleArr,
}: {
  articleArr: IArticle[] | IArticleCardProps[];
}) {
  return (
    <ArticleListContainer>
      {articleArr?.map((el: IArticleCardProps) => {
        return (
          <ArticleCard
            key={el.web_url}
            byline={el.byline}
            headline={el.headline}
            source={el.source}
            pub_date={el.pub_date}
            web_url={el.web_url}
            keywords={el.keywords}
          />
        );
      })}
    </ArticleListContainer>
  );
}
