import React, { useState } from 'react';
import styled from 'styled-components';
import {
  roundBtnStyle,
  roundFillBtnStyle,
  roundFillBtnStyleActive,
} from '../styles/Button.style';
import { ICheckboxProps } from '../type/Filter.type';
import { innerFont } from '../styles/Font.style';

export default function RoundCheckbox({
  id,
  placeholder,
  isActive,
  onClick,
}: ICheckboxProps) {
  return (
    <RCheckboxContainer>
      <input
        type="checkbox"
        id="roundCheckbox"
        checked={isActive}
        onChange={() => onClick && onClick({ id, title: placeholder })}
      />
      <RCheckboxLabel htmlFor="roundCheckbox">{placeholder}</RCheckboxLabel>
    </RCheckboxContainer>
  );
}

const RCheckboxContainer = styled.div`
  width: fit-content;
  height: ${(props) => props.theme.height.roundBtn};
  position: relative;

  input[type='checkbox'] {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    opacity: 0;

    &:hover {
      cursor: pointer;
    }
  }

  input[type='checkbox']:checked + label {
    ${roundFillBtnStyleActive}
  }
`;

const RCheckboxLabel = styled.label`
  width: fit-content;
  height: ${(props) => props.theme.height.roundBtn};
  padding: 6px 12px 4px 12px;
  display: flex;
  align-items: center;
  ${innerFont}
  ${roundBtnStyle}
  ${roundFillBtnStyle}
`;
