import React from 'react';
import styled from 'styled-components';
import {
  roundBtnStyleActive,
  roundBtnStyle,
  roundBtnStyleDefault,
} from '../../styles/Button.style';
import { IBtnProps } from '../../type/Button.type';

export default function TabBtn({ btnText, isActive, onClick }: IBtnProps) {
  return (
    <TBtn isActive={isActive} onClick={onClick}>
      {btnText}
    </TBtn>
  );
}

const TBtn = styled.button<IBtnProps>`
  height: ${(props) => props.theme.height.roundBtn};
  padding: 6px 12px 4px 12px;
  ${roundBtnStyle}
  ${(props) => (props.isActive ? roundBtnStyleActive : roundBtnStyleDefault)}

  &:hover {
    cursor: pointer;
  }
`;
