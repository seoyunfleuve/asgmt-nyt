import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header';
import NavBar from '../organisms/NavBar';
import { ContentContainer, MobileViewContainer } from '../atoms/Container';

function AppLayout() {
  return (
    <MobileViewContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <NavBar />
    </MobileViewContainer>
  );
}

export default AppLayout;
