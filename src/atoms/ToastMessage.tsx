import React from 'react';
import styled, { keyframes } from 'styled-components';
import useToastStore from '../store/useToastStore';
import { useToastState } from '../store/useToggleStore';
import { innerFont } from '../styles/Font.style';

export default function ToastMessage() {
  const { toastContent } = useToastStore();
  const { isToggle: isToastToggle } = useToastState();

  return <ToastMsg isToastToggle={isToastToggle}>{toastContent}</ToastMsg>;
}

const toastSlide = keyframes`
  0% {
    top: 0;
  }
  5% {
    top: 30px;
  }
  95% {
    top: 30px;
  }
  100% {
    top: -30px;
  }

`;

const ToastMsg = styled.div<{ isToastToggle: boolean }>`
  width: 295px;
  height: ${(props) => props.theme.height.actionBtn};
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #ffffff;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${innerFont};
  animation: ${toastSlide} 2s linear;
`;
