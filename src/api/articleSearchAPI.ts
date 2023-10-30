import { useInfiniteQuery } from '@tanstack/react-query';
import filterQuery from '../utils/filterQuery';

const url = process.env.REACT_APP_ARTICLE_SEARCH_API;
const key = process.env.REACT_APP_API_KEY;

export const getNytArticle = async (
  pageParam: any,
  filterQueryString: string
) => {
  const response = await fetch(
    `${url}?${filterQueryString}&page=${pageParam}&api-key=${key}`
  );

  if (!response.ok) {
    return undefined;
  }

  const data = await response.json();
  return data;
};

export const useGetNytArticle = () => {
  const filterQueryString = filterQuery();
  return useInfiniteQuery({
    queryKey: ['nytArticle'],
    queryFn: ({ pageParam }) => getNytArticle(pageParam, filterQueryString),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!!lastPage && lastPageParam < 10) {
        return lastPageParam + 1;
      }
      return undefined;
    },
  });
};
