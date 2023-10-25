import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IArticleCardProps } from '../type/Article.type';
import { captionFont, titleFont } from '../styles/Font.style';
import ScrapBtn from '../atoms/button/ScrapBtn';
import {
  CardCaptionContainer,
  CardContainer,
  CardHeaderContainer,
} from '../atoms/Container';
import CaptionDate from '../atoms/CaptionDate';
import useScrapDataStore from '../store/useScrapDataStore';

export default function ArticleCard({
  byline,
  headline,
  source,
  pub_date,
  web_url,
}: IArticleCardProps) {
  const [isScrap, setIsScrap] = useState<boolean>(false);
  const { scrapData, setScrapData } = useScrapDataStore();

  const cleanedByline = byline.original?.split(' and ')[0].split(', ')[0] || '';
  const person = cleanedByline === source ? '' : cleanedByline;

  useEffect(() => {
    const index = scrapData.findIndex(
      (item: IArticleCardProps) => item.web_url === web_url
    );
    if (index !== -1) {
      setIsScrap(true);
    } else {
      setIsScrap(false);
    }
  }, [scrapData]);

  const onClick = () => {
    setIsScrap(!isScrap);
    const articleCardInfo = {
      byline,
      headline,
      source,
      pub_date,
      web_url,
      isScrap,
    };

    let updatedScrapData;

    if (isScrap) {
      updatedScrapData = scrapData.filter((item) => item.web_url !== web_url);
    } else {
      updatedScrapData = [...scrapData, articleCardInfo];
    }

    setScrapData(updatedScrapData);
    localStorage.setItem('scrapArticle', JSON.stringify(updatedScrapData));
  };

  const goTo = (link: string) => {
    window.location.href = link;
  };

  return (
    <CardContainer>
      <CardHeaderContainer onClick={() => goTo(web_url)}>
        <Headline>{headline.main}</Headline>
      </CardHeaderContainer>
      <CardCaptionContainer>
        <CaptionLeft>
          <CaptionText>{source}</CaptionText>
          <CaptionText>{person}</CaptionText>
        </CaptionLeft>
        <CaptionDate pub_date={pub_date} />
      </CardCaptionContainer>
      <ArticleScrapBtn>
        <ScrapBtn onClick={onClick} isScrap={isScrap} />
      </ArticleScrapBtn>
    </CardContainer>
  );
}

const Headline = styled.p`
  ${titleFont}
  width: 88%;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    cursor: pointer;
  }
`;

const ArticleScrapBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 24px;
  height: 24px;
`;

const CaptionLeft = styled.div`
  display: flex;
  gap: 8px;
`;

export const CaptionText = styled.p`
  ${captionFont}
`;
