import React from 'react';
import styled from 'styled-components';
import TabBtn from '../atoms/button/TabBtn';
import { ITabProps } from '../type/Button.type';

export default function FilterTab({ tabList, isActive, onClick }: ITabProps) {
  return (
    <FTab>
      {tabList?.map((el) => {
        return (
          <TabBtn
            key={el.id}
            btnText={el.title}
            isActive={isActive}
            onClick={onClick}
          />
        );
      })}
    </FTab>
  );
}

const FTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;
