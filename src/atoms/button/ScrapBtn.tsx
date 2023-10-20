import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../assets/images/starIcon.svg';
import { ReactComponent as StarFillIcon } from '../../assets/images/starFillIcon.svg';

export default function ScrapBtn() {
  const [isScrap, setIsScrap] = useState(false);

  return (
    <SBtn onClick={() => setIsScrap(!isScrap)}>
      {isScrap ? (
        <StarFillIcon className="starFillIcon" />
      ) : (
        <StarIcon className="starIcon" />
      )}
    </SBtn>
  );
}

const SBtn = styled.div`
  padding: 4px;

  &:hover {
    cursor: pointer;
  }

  .starIcon {
    fill: ${(props) => props.theme.colors.fontGray};
  }
`;
