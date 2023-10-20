import React from 'react';
import styled from 'styled-components';
import { captionFont } from '../styles/Font.style';
import { ICaptionDateProps } from '../type/Article.type';

export default function CaptionDate({ pubDate }: ICaptionDateProps) {
  const cleanedDate = pubDate.split('T')[0];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = days[new Date(pubDate).getUTCDay()];
  const date = `${cleanedDate} (${dayOfWeek})`;

  return <CaptionDateText>{date}</CaptionDateText>;
}
export const CaptionDateText = styled.p`
  ${captionFont}
  color: ${(props) => props.theme.colors.fontGray}
`;
