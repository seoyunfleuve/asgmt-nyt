import React from 'react';
import styled from 'styled-components';
import NavBtn from '../atoms/button/NavBtn';

export default function NavBar() {
  return (
    <NavContainer>
      <NavBtn type="home" />
      <NavBtn type="scrap" />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.height.nav};
  background-color: #000000;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 70%;
  align-items: center;
  padding: 20px 80px;
`;
