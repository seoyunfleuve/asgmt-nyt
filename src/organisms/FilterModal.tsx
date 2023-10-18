import React from 'react';
import styled from 'styled-components';
import ActionBtn from '../atoms/button/ActionBtn';
import FilterCategory from '../molecules/FilterCategory';
import { IBtnTextProps } from '../type/Filter.type';

export default function FilterModal({ btnText }: IBtnTextProps) {
  return (
    <FModal>
      <FilterCategory
        title="헤드라인"
        placeholder="검색하실 헤드라인을 입력해 주세요."
        isInput
      />
      <FilterCategory
        title="날짜"
        placeholder="날짜를 선택해 주세요."
        isInput
      />
      <FilterCategory title="국가" isInput={false} />
      <ActionBtn btnText={btnText} />
    </FModal>
  );
}

const FModal = styled.div`
  width: 335px;
  height: ${(props) => props.theme.height.modal};
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  position: absolute;
  top: calc((100vh - ${(props) => props.theme.height.modal}) / 2);
  left: 50%;
  transform: translate(-50%);
`;
