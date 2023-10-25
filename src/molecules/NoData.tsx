import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as ScrapIconPage } from '../assets/images/scrapIconPage.svg';
import ActionBtn from '../atoms/button/ActionBtn';
import { useGetNytArticle } from '../api/articleSearchAPI';
import { titleFont } from '../styles/Font.style';

export default function NoData({ text }: { text: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { refetch } = useGetNytArticle();

  let btnText;
  let onClick;

  const activeScreen = location.pathname === '/scrap' ? 'scrap' : 'home';

  if (activeScreen === 'scrap') {
    btnText = '스크랩 하러 가기';
    onClick = () => navigate('/');
  } else {
    btnText = '다시 시도하기';
    onClick = refetch;
  }

  return (
    <NoDataContainer>
      <NoDataContent>
        <ScrapIconPage />
        {text}
      </NoDataContent>
      <ActionBtn btnText={btnText} onClick={onClick} />
    </NoDataContainer>
  );
}

const NoDataContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${titleFont}
  color: ${(props) => props.theme.colors.fontGray};
  gap: 8px;
`;

const NoDataContainer = styled(NoDataContent)`
  width: 100%;
  height: 100%;
  gap: 20px;
`;
