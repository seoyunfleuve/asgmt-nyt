import React from 'react';
import FilterModal from '../organisms/FilterModal';
import { useArticleFilterState, useModalState } from '../store/toggleStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import useAppliedArticleFilterStore from '../store/useAppliedArticleFilterStore';

export default function ArticleFilter() {
  const { isToggle: isModalToggle, setIsToggle: setIsModalToggle } =
    useModalState();
  const { setIsToggle: setIsFilterToggle } = useArticleFilterState();
  const { currentArticleFilter, clearCurrentArticleFilter } =
    useArticleFilterStore();

  const { setAppliedArticleFilter } = useAppliedArticleFilterStore();
  const articleFilterStore = useArticleFilterStore();

  const applyFilter = () => {
    setIsModalToggle(false);
    setIsFilterToggle(true);
    setAppliedArticleFilter(currentArticleFilter);
    clearCurrentArticleFilter();
  };

  return (
    <FilterModal
      category={ARTICLE_FILTER_CATEGORY}
      btnText="필터 적용하기"
      onClick={applyFilter}
      filterStore={articleFilterStore}
      isModal={isModalToggle}
    />
  );
}

export const COUNTRY_FILTER_LIST = [
  {
    id: 1,
    title: '대한민국',
    countryEN: ['South Korea', 'Republic of Korea'],
  },
  {
    id: 2,
    title: '중국',
    countryEN: ['China'],
  },
  {
    id: 3,
    title: '일본',
    countryEN: ['Japan'],
  },
  {
    id: 4,
    title: '미국',
    countryEN: ['America', 'United States', 'U.S.', 'USA'],
  },
  {
    id: 5,
    title: '북한',
    countryEN: ['North Korea'],
  },
  {
    id: 6,
    title: '러시아',
    countryEN: ['Russia'],
  },
  {
    id: 7,
    title: '프랑스',
    countryEN: ['France'],
  },
  {
    id: 8,
    title: '영국',
    countryEN: ['England', 'United Kingdom', 'U.K.'],
  },
];

const ARTICLE_FILTER_CATEGORY = [
  {
    id: 1,
    filter: 'Headline',
    title: '헤드라인',
    type: 'text',
    placeholder: '검색하실 헤드라인을 입력해주세요.',
    subfilter: null,
  },
  {
    id: 2,
    filter: 'Date',
    title: '날짜',
    type: 'date',
    placeholder: '날짜를 선택해주세요.',
    subfilter: null,
  },
  {
    id: 3,
    filter: 'Country',
    title: '국가',
    type: 'checkbox',
    placeholder: '',
    subfilter: COUNTRY_FILTER_LIST,
  },
];
