import React from 'react';
import styled from 'styled-components';
import { IFilterCheckboxProps } from '../type/Filter.type';
import RoundCheckbox from '../atoms/RoundCheckbox';

export default function FilterCheckbox({
  setFilter,
  subfilter,
  activeSubfilter,
}: IFilterCheckboxProps) {
  const activeArr: number[] = [];

  activeSubfilter?.forEach((item) => {
    const activeId = item.id;
    if (subfilter?.some((allItem) => allItem.id === activeId)) {
      activeArr.push(activeId);
    }
  });

  return (
    <FCheckboxContainer>
      {subfilter?.map((el) => {
        return (
          <RoundCheckbox
            key={el.id}
            id={el.id}
            placeholder={el.title}
            isActive={activeArr.includes(el.id)}
            onClick={setFilter}
          />
        );
      })}
    </FCheckboxContainer>
  );
}

const FCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 8px;
`;
