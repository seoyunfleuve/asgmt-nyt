import React from 'react';
import styled from 'styled-components';
import { IFilterProps } from '../type/Filter.type';
import FilterBtn from '../atoms/button/FilterBtn';

export default function FilterTab({ type }: IFilterProps) {
  const btnText =
    type === 'header' ? HEADER_FILTER_CATEGORY : COUNTRY_FILTER_LIST;

  return (
    <FTab type={type}>
      {btnText.map((el) => {
        return <FilterBtn id={el.id} type={type} isActive btnText={el.name} />;
      })}
    </FTab>
  );
}

const FTab = styled.div<IFilterProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.type === 'header' ? '7px' : '6px')};
`;

const HEADER_FILTER_CATEGORY = [
  { id: 1, name: '전체 헤드라인' },
  { id: 2, name: '전체 날짜' },
  { id: 3, name: '전체 국가' },
];

const COUNTRY_FILTER_LIST = [
  {
    id: 1,
    name: '대한민국',
  },
  {
    id: 2,
    name: '중국',
  },
  {
    id: 3,
    name: '일본',
  },
  {
    id: 4,
    name: '미국',
  },
  {
    id: 5,
    name: '북한',
  },
  {
    id: 6,
    name: '러시아',
  },
  {
    id: 7,
    name: '프랑스',
  },
  {
    id: 8,
    name: '영국',
  },
];
