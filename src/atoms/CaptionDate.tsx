import React from 'react';
import styled from 'styled-components';
import { captionFont } from '../styles/Font.style';
import { ICaptionDateProps } from '../type/Article.type';

export default function CaptionDate({ pub_date }: ICaptionDateProps) {
  const cleanedDate = pub_date.split('T')[0];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = days[new Date(pub_date).getUTCDay()];
  const date = `${cleanedDate} (${dayOfWeek})`;

  return <CaptionDateText>{date}</CaptionDateText>;
}
export const CaptionDateText = styled.p`
  min-width: 95px;
  ${captionFont}
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  align-items: end;
  color: ${(props) => props.theme.colors.fontGray};
`;
