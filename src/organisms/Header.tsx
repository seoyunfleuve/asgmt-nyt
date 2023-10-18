import React from 'react';
import styled from 'styled-components';
import FilterBtn from '../atoms/FilterBtn';

export default function Header() {
  return (
    <HeaderContainer>
      <FilterBtn />
      <FilterBtn />
      <FilterBtn />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.height.headerHeight};
  padding: 0 5%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;
