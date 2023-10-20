import React from 'react';
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

export default function ArticleCard({
  byline,
  headline,
  source,
  pubDate,
  url,
}: IArticleCardProps) {
  const cleanedByline = byline.original?.split(' and ')[0].split(', ')[0] || '';
  const person = cleanedByline === source ? '' : cleanedByline;

  return (
    <CardContainer>
      <CardHeaderContainer>
        <Headline>{headline.main}</Headline>
        <ArticleScrapBtn>
          <ScrapBtn />
        </ArticleScrapBtn>
      </CardHeaderContainer>
      <CardCaptionContainer>
        <CaptionLeft>
          <CaptionText>{source}</CaptionText>
          <CaptionText>{person}</CaptionText>
        </CaptionLeft>
        <CaptionDate pubDate={pubDate} />
      </CardCaptionContainer>
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
`;

const ArticleScrapBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
