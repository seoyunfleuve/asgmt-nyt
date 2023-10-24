import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Header from './organisms/Header';
import NavBar from './organisms/NavBar';
import { ContentContainer, MobileViewContainer } from './atoms/Container';
import { useModalState } from './store/toggleStore';
import Modal from './templates/Modal';

function App() {
  const [params] = useSearchParams();
  const { isToggle: isModalToggle, setIsToggle: setIsModalToggle } =
    useModalState();

  useEffect(() => setIsModalToggle(params.has('modal')), [params]);

  return (
    <MobileViewContainer>
      {isModalToggle && <Modal />}
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <NavBar />
    </MobileViewContainer>
  );
}

export default App;
