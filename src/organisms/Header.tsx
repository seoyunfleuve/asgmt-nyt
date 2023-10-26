import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import FilterTab from '../molecules/FilterTab';
import useModalStore from '../store/useModalStore';
import ArticleFilter from '../pages/ArticleFilter';
import { useArticleFilterState, useModalState } from '../store/useToggleStore';
import {
  useAppliedArticleFilterStore,
  useScrapArticleFilterStore,
} from '../store/useAppliedArticleFilterStore';
import useArticleFilterStore from '../store/useArticleFilterStore';
import { ReactComponent as SearchIcon } from '../assets/images/searchIcon.svg';
import { ReactComponent as CalenderIcon } from '../assets/images/calenderIcon.svg';
import { ARTICLE_FILTER_CATEGORY, HEADER_TAB_LIST } from '../constant/list';

export default function Header() {
  const location = useLocation();
  const { isToggle: isFilterToggle, setIsToggle: setIsFilterToggle } =
    useArticleFilterState();
  const { setIsToggle: setIsModalToggle } = useModalState();
  const { setCurrentArticleFilter } = useArticleFilterStore();
  const { appliedArticleFilter } = useAppliedArticleFilterStore();
  const { appliedArticleFilter: scrapArticleFilter } =
    useScrapArticleFilterStore();
  const { setModalContent } = useModalStore();

  const Icon = [
    { id: 1, icon: <SearchIcon /> },
    { id: 2, icon: <CalenderIcon /> },
    { id: 3, icon: null },
  ];

  const articleFilter =
    location.pathname === '/scrap' ? scrapArticleFilter : appliedArticleFilter;

  const filteredHeadline = articleFilter[0].placeholder;

  const headerHeadline =
    filteredHeadline &&
    filteredHeadline === ARTICLE_FILTER_CATEGORY[0].placeholder
      ? HEADER_TAB_LIST[0].title
      : filteredHeadline;

  const filteredDate = articleFilter[1].placeholder;
  const headerDate =
    filteredDate && filteredDate === ARTICLE_FILTER_CATEGORY[1].placeholder
      ? HEADER_TAB_LIST[1].title
      : filteredDate.replace(/-/g, '.');

  let filteredCountry: string;
  const subfilterArr = articleFilter[2]?.subfilter || [];
  if (subfilterArr.length === 1) {
    filteredCountry = subfilterArr[0].title;
  } else if (subfilterArr.length > 1) {
    filteredCountry = `${subfilterArr[0].title} 외 ${
      subfilterArr.length - 1
    }개`;
  } else {
    filteredCountry = HEADER_TAB_LIST[2].title;
  }

  useEffect(() => {
    if (
      headerHeadline === HEADER_TAB_LIST[0].title &&
      headerDate === HEADER_TAB_LIST[1].title &&
      filteredCountry === HEADER_TAB_LIST[2].title
    ) {
      setIsFilterToggle(false);
    }
  }, [appliedArticleFilter, scrapArticleFilter]);

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
    setCurrentArticleFilter(articleFilter);
  };

  return (
    <HeaderContainer>
      <FilterTab
        tabList={tabList}
        isActive={isFilterToggle}
        onClick={handleFilterModal}
        icon={Icon}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.height.header};
  padding: 0 5%;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderGray};
`;
