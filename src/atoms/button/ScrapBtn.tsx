import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../assets/images/starIcon.svg';
import { ReactComponent as StarFillIcon } from '../../assets/images/starFillIcon.svg';
import { useToastState } from '../../store/useToggleStore';
import useToastStore from '../../store/useToastStore';

interface IScrapBtnProps {
  onClick: () => void;
  isScrap: boolean;
}

export default function ScrapBtn({ onClick, isScrap }: IScrapBtnProps) {
  const { setIsToggle: setIsToastToggle } = useToastState();
  const { setToastContent } = useToastStore();

  const scrapToastContent = isScrap
    ? '스크랩이 삭제되었습니다.'
    : '기사가 스크랩 되었습니다.';

  const handleScrapBtn = () => {
    onClick();
    setToastContent(scrapToastContent);
    setIsToastToggle(true);
    setTimeout(() => {
      setIsToastToggle(false);
    }, 2000);
  };

  return (
    <SBtn onClick={handleScrapBtn}>
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
