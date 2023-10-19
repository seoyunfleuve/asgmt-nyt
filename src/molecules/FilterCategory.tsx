import React from 'react';
import styled from 'styled-components';
import { subtitleFont } from '../styles/Font.style';
import FilterInput from '../atoms/FilterInput';
import { IFilterCategoryProps } from '../type/Filter.type';
import FilterTab from './FilterTab';

export default function FilterCategory({
  title,
  placeholder,
  isInput,
}: IFilterCategoryProps) {
  return (
    <FCategory>
      <CategoryTitle>{title}</CategoryTitle>
      {isInput ? (
        <FilterInput placeholder={placeholder} />
      ) : (
        <FilterTab type="country" />
      )}
    </FCategory>
  );
}

const FCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CategoryTitle = styled.p`
  ${subtitleFont}
`;
