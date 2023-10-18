import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
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
