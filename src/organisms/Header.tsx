import React from 'react';
import styled from 'styled-components';
import FilterTab from '../molecules/FilterTab';

export default function Header() {
  return (
    <HeaderContainer>
      <FilterTab type="header" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.height.header};
  padding: 0 5%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;
