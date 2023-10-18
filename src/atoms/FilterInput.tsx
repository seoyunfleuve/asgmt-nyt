import React from 'react';
import styled from 'styled-components';
import { IFilterInputProps } from '../type/Filter.type';
import { innerFont } from '../styles/Font.style';

export default function FilterInput({ placeholder }: IFilterInputProps) {
  return <FInput placeholder={placeholder} />;
}

const FInput = styled.input`
  width: 100%;
  height: ${(props) => props.theme.height.input};
  background: #ffffff;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.borderGray};

  &::placeholder {
    color: ${(props) => props.theme.colors.borderGray};
    ${innerFont};
  }

  &:focus {
    outline: none;
    border: 1.5px solid ${(props) => props.theme.colors.pointBlue};
  }
`;
