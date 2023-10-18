import React from 'react';
import styled from 'styled-components';

export default function FilterBtn() {
  return <HeaderBtn />;
}

const HeaderBtn = styled.button`
  width: 70px;
  height: ${(props) => props.theme.height.filterHeight};
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  border-radius: 30px;
`;
