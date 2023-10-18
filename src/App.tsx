import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './organisms/Header';
import NavBar from './organisms/NavBar';
import MobileView from './templates/MobileView';

function App() {
  return (
    <MobileView>
      <Header />
      <Outlet />
      <NavBar />
    </MobileView>
  );
}

export default App;
