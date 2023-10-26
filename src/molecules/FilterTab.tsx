import React from 'react';
import styled from 'styled-components';
import TabBtn from '../atoms/button/TabBtn';
import { ITabProps } from '../type/Button.type';

export default function FilterTab({
  tabList,
  isActive,
  onClick,
  icon,
}: ITabProps) {
  return (
    <FTab>
      {tabList?.map((el) => {
        return (
          <TabBtn
            key={el.id}
            id={el.id}
            btnText={el.title}
            isActive={isActive}
            onClick={onClick}
            icon={icon}
          />
        );
      })}
    </FTab>
  );
}

const FTab = styled.div`
  width: 100%;
  height: ${(props) => props.theme.height.roundBtn};
  display: flex;
  white-space: nowrap;
  gap: 7px;

  :first-child {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
