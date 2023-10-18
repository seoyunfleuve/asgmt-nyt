import React from 'react';
import styled from 'styled-components';
import NavBtn from '../atoms/NavBtn';

export default function NavBar() {
  return (
    <NavContainer>
      <NavBtn />
      <NavBtn />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.height.navHeight};
  background: #000000;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
