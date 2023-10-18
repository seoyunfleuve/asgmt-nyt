import React from 'react';
import styled from 'styled-components';

export default function ArticleCard() {
  return <Card />;
}

const Card = styled.div`
  width: 100%;
  height: ${(props) => props.theme.height.cardHeight};
  background: #ffffff;
  border-radius: 8px;
`;
