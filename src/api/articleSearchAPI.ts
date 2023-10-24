import { useQuery } from '@tanstack/react-query';
import { IArticleSearchRes } from '../type/Article.type';
import { IFilter } from '../type/Filter.type';
import filterQuery from '../atoms/FilterQuery';

const url = process.env.REACT_APP_ARTICLE_SEARCH_API;
const key = process.env.REACT_APP_API_KEY;

export const getNytArticle = async () => {
  const response = await (await fetch(`${url}?&api-key=${key}`)).json();
  return response;
};

export const getFilteredArticle = async (filterQueryString: string) => {
  const response = await (
    await fetch(`${url}?${filterQueryString}&api-key=${key}`)
  ).json();
  return response;
};

export const useGetNytArticle = () => {
  return useQuery<IArticleSearchRes>({
    queryKey: ['nytArticle'],
    queryFn: getNytArticle,
  });
};

export const useGetFilteredArticle = (appliedArticleFilter: IFilter[]) => {
  const filterQueryString = filterQuery();
  return useQuery<IArticleSearchRes>({
    queryKey: ['filteredArticle', appliedArticleFilter],
    queryFn: () => getFilteredArticle(filterQueryString),
  });
};
