import React from 'react';
import styled from 'styled-components';
import { subtitleFont } from '../styles/Font.style';
import FilterInput from '../atoms/FilterInput';
import { IFilter, IFilterCategoryProps, ISubfilter } from '../type/Filter.type';
import FilterCheckbox from './FilterCheckbox';
import { FilterContainer } from '../atoms/Container';

export default function FilterCategory({
  element,
  filterStore,
  isModal,
}: IFilterCategoryProps) {
  const { id, filter, title, type, placeholder, subfilter } = element;

  let currentPlaceholder = placeholder;
  let activeSubfilter;
  let currentFilter;
  let setFilter;

  if (isModal && filterStore) {
    const filterKey = Object.keys(filterStore).filter((key) =>
      key.startsWith('current')
    );
    currentFilter = filterStore[filterKey[0]] as IFilter[];

    const index = currentFilter.findIndex((item: IFilter) => item.id === id);
    if (index !== -1) {
      currentPlaceholder = currentFilter[index].placeholder;
      activeSubfilter = currentFilter[index].subfilter;
    }
  }

  if (filterStore) {
    const setFilterKey = Object.keys(filterStore).filter((key) =>
      key.includes(filter)
    );
    setFilter = filterStore[setFilterKey[0]] as () =>
      | void
      | ((newValue: string) => void)
      | ((newValue: ISubfilter) => void);
  }

  return (
    <FilterContainer>
      <CategoryTitle>{title}</CategoryTitle>
      {type === 'checkbox' && !!subfilter ? (
        <FilterCheckbox
          setFilter={setFilter}
          subfilter={subfilter}
          activeSubfilter={activeSubfilter}
        />
      ) : (
        <FilterInput
          setFilter={setFilter}
          type={type}
          placeholder={currentPlaceholder}
        />
      )}
    </FilterContainer>
  );
}

const CategoryTitle = styled.p`
  ${subtitleFont}
`;
