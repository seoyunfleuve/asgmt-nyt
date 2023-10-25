import React, { ReactNode, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ModalBackground } from '../atoms/Container';
import { useModalState } from '../store/useToggleStore';
import useModalStore from '../store/useModalStore';

export default function Modal() {
  const [params, setParams] = useSearchParams();

  const { setIsToggle: setIsModalToggle } = useModalState();
  const { modalContent } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      e.stopPropagation();
      setIsModalToggle(false);
    }
  };

  useEffect(() => {
    params.set('modal', 'true');
    setParams(params);

    return () => {
      params.delete('modal');
      setParams(params);
    };
  }, []);

  return (
    <ModalBackground ref={modalRef} onClick={modalOutsideClick}>
      {modalContent}
    </ModalBackground>
  );
}
