import React from 'react';
import styled from 'styled-components';
import { titleFont } from '../../styles/Font.style';
import { IBtnProps } from '../../type/Button.type';

export default function ActionBtn({ btnText, onClick }: IBtnProps) {
  return <ABtn onClick={() => onClick()}>{btnText}</ABtn>;
}

const ABtn = styled.button`
  width: 295px;
  height: ${(props) => props.theme.height.actionBtn};
  background-color: ${(props) => props.theme.colors.pointBlue};
  color: #ffffff;
  border-radius: 16px;
  ${titleFont}

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.subBlue};
  }
`;
