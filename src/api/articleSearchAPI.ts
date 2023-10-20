import { useQuery } from '@tanstack/react-query';
import { IArticleSearchRes } from '../type/Article.type';

const url = process.env.REACT_APP_ARTICLE_SEARCH_API;
const key = process.env.REACT_APP_API_KEY;

export const getNytArticle = async () => {
  const response = await (await fetch(`${url}?&${key}`)).json();
  return response;
};

export const useGetNytArticle = () => {
  return useQuery<IArticleSearchRes>({
    queryKey: ['nytArticle'],
    queryFn: getNytArticle,
  });
};
