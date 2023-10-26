import React, { useState } from 'react';
import styled from 'styled-components';
import { IInputProps } from '../type/Filter.type';
import { innerFont } from '../styles/Font.style';

export default function FilterInput({
  setFilter,
  type,
  placeholder,
}: IInputProps) {
  const [isClick, setIsClick] = useState(false);
  return (
    <FInput
      type={isClick ? type : 'input'}
      placeholder={placeholder}
      onChange={(e) => setFilter && setFilter(e.target.value)}
      onClick={() => setIsClick(true)}
    />
  );
}

const FInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  height: ${(props) => props.theme.height.input};
  background-color: #ffffff;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  color: ${(props) => props.theme.colors.borderGray};
  ${innerFont};
  font-family: 'Apple SD Gothic Neo', sans-serif;

  &::placeholder {
    color: ${(props) => props.theme.colors.borderGray};
  }

  &:focus {
    outline: none;
    border: 1.5px solid ${(props) => props.theme.colors.pointBlue};

    &::placeholder {
      color: transparent;
    }
  }
`;
