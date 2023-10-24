import React from 'react';
import { COUNTRY_FILTER_LIST } from '../pages/ArticleFilter';
import useAppliedArticleFilterStore from '../store/useAppliedArticleFilterStore';

export default function filterQuery() {
  const { appliedArticleFilter } = useAppliedArticleFilterStore();

  const filteredHeadline = appliedArticleFilter[0].placeholder;
  const filteredDate = appliedArticleFilter[1].placeholder;

  const filteredCountryArr = appliedArticleFilter[2]?.subfilter;
  const filteredCountryIdArr = filteredCountryArr?.map((country) => country.id);

  const filteredCountryEN = COUNTRY_FILTER_LIST.filter(
    (item) => filteredCountryIdArr?.includes(item.id)
  )
    .map((item) => item.countryEN)
    .flat();

  const glocations = filteredCountryEN
    .map((item) => `glocations:("${item}")`)
    .join(' OR ');

  const filterQueryArr = [];

  if (
    filteredHeadline &&
    filteredHeadline !== '검색하실 헤드라인을 입력해주세요.'
  ) {
    filterQueryArr.push(`headline:("${filteredHeadline}")`);
  }
  if (filteredDate && filteredDate !== '날짜를 선택해주세요.') {
    filterQueryArr.push(`pub_date:("${filteredDate}")`);
  }
  filterQueryArr.push(`(${glocations})`);

  const filterQueryString = `fq=${filterQueryArr.join(' AND ')}`;

  return filterQueryString;
}
