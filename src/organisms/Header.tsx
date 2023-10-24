import React from 'react';
import styled from 'styled-components';
import FilterTab from '../molecules/FilterTab';
import { useArticleFilterState, useModalState } from '../store/toggleStore';
import useModalStore from '../store/useModalStore';
import ArticleFilter from '../pages/ArticleFilter';

import useAppliedArticleFilterStore from '../store/useAppliedArticleFilterStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import { ISubfilter } from '../type/Filter.type';

export default function Header() {
  const { isToggle: isFilterToggle } = useArticleFilterState();
  const { setIsToggle: setIsModalToggle } = useModalState();
  const { setCurrentArticleFilter } = useArticleFilterStore();
  const { appliedArticleFilter } = useAppliedArticleFilterStore();
  const { setModalContent } = useModalStore();

  const filteredHeadline = appliedArticleFilter[0].placeholder;
  const headerHeadline =
    !filteredHeadline ||
    filteredHeadline === '' ||
    filteredHeadline === '검색하실 헤드라인을 입력해주세요.'
      ? '전체 헤드라인'
      : filteredHeadline;

  const filteredDate = appliedArticleFilter[1].placeholder;
  const headerDate =
    !filteredDate ||
    filteredDate === '' ||
    filteredDate === '날짜를 선택해주세요.'
      ? '전체 날짜'
      : filteredDate.replace(/-/g, '.');

  let filteredCountry;
  const subfilterArr = appliedArticleFilter[2]?.subfilter || [];
  if (subfilterArr.length === 1) {
    filteredCountry = subfilterArr[0].title;
  } else if (subfilterArr.length !== undefined && subfilterArr.length !== 0) {
    filteredCountry = `${subfilterArr[0].title} 외 ${
      subfilterArr.length - 1
    }개`;
  } else {
    filteredCountry = '전체 국가';
  }

  const HEADER_TAB_LIST_FILTERED = [
    {
      id: 1,
      title: headerHeadline,
    },
    { id: 2, title: headerDate },
    {
      id: 3,
      title: filteredCountry,
    },
  ];

  const tabList = isFilterToggle ? HEADER_TAB_LIST_FILTERED : HEADER_TAB_LIST;

  const handleFilterModal = () => {
    setIsModalToggle(true);
    setModalContent(<ArticleFilter />);
    setCurrentArticleFilter(appliedArticleFilter);
  };

  return (
    <HeaderContainer>
      <FilterTab
        tabList={tabList}
        isActive={isFilterToggle}
        onClick={handleFilterModal}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.height.header};
  padding: 0 5%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const HEADER_TAB_LIST = [
  { id: 1, title: '전체 헤드라인' },
  { id: 2, title: '전체 날짜' },
  { id: 3, title: '전체 국가' },
];
