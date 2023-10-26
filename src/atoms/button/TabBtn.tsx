import React from 'react';
import styled from 'styled-components';
import {
  roundBtnStyleActive,
  roundBtnStyle,
  roundBtnStyleDefault,
} from '../../styles/Button.style';

import { IBtnProps } from '../../type/Button.type';
import { innerFont } from '../../styles/Font.style';

export default function TabBtn({
  id,
  btnText,
  isActive,
  onClick,
  icon,
}: IBtnProps) {
  const Icon = icon?.find((item) => item.id === id)?.icon;

  return (
    <TBtn isActive={isActive} onClick={onClick}>
      {Icon}
      {btnText}
    </TBtn>
  );
}

const TBtn = styled.button<IBtnProps>`
  padding: 0 12px;
  ${roundBtnStyle}
  ${(props) => (props.isActive ? roundBtnStyleActive : roundBtnStyleDefault)};
  display: flex;
  align-items: center;
  ${innerFont}
  line-height: ${(props) => props.theme.height.roundBtn};

  :first-child {
    width: 16px;
    line-height: ${(props) => props.theme.height.roundBtn};
    margin-right: 4px;
    fill: ${(props) =>
      props.isActive
        ? props.theme.colors.pointBlue
        : props.theme.colors.fontGray};
    vertical-align: top;
  }

  &:hover {
    cursor: pointer;
  }
`;
