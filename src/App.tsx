import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Header from './organisms/Header';
import NavBar from './organisms/NavBar';
import { ContentContainer, MobileViewContainer } from './atoms/Container';
import { useModalState, useToastState } from './store/useToggleStore';
import Modal from './templates/Modal';
import ToastMessage from './atoms/ToastMessage';

function App() {
  const [params] = useSearchParams();
  const { isToggle: isModalToggle, setIsToggle: setIsModalToggle } =
    useModalState();
  const { isToggle: isToastToggle } = useToastState();

  useEffect(() => setIsModalToggle(params.has('modal')), [params]);

  return (
    <MobileViewContainer>
      {isModalToggle && <Modal />}
      <Header />
      <ContentContainer>
        <Outlet />
        {isToastToggle && <ToastMessage />}
      </ContentContainer>
      <NavBar />
    </MobileViewContainer>
  );
}

export default App;
