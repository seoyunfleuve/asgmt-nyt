import React, { ReactNode } from 'react';
import styled from 'styled-components';

export default function MobileView({ children }: { children: ReactNode }) {
  return <MobileContainer>{children}</MobileContainer>;
}

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  max-width: 540px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
  position: relative;
`;
