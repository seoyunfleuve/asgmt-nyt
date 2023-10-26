import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as HomeIconNav } from '../../assets/images/homeIconNav.svg';
import { ReactComponent as ScrapIconNav } from '../../assets/images/scrapIconNav.svg';
import { INavBtnProps } from '../../type/Button.type';

export default function NavBtn({ type }: { type: string }) {
  const location = useLocation();
  const navigate = useNavigate();

  const Icon = type === 'home' ? HomeIconNav : ScrapIconNav;
  const activeScreen = location.pathname === '/scrap' ? 'scrap' : 'home';

  const btnText =
    (NAV_LIST.find((item) => item.type === type) || {}).btnText || '';

  const link = type === 'home' ? '/' : '/scrap';

  return (
    <NBtn
      type={type}
      activeScreen={activeScreen}
      onClick={() => navigate(link)}
    >
      <Icon className={`${type}Icon`} />
      {btnText}
    </NBtn>
  );
}

const NBtn = styled.div<INavBtnProps>`
  width: 26px;
  height: calc(${(props) => props.theme.height.nav}*0.6);
  color: ${(props) =>
    props.type === props.activeScreen
      ? '#FFFFFF'
      : props.theme.colors.fontGray};
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  .homeIcon {
    fill: ${(props) =>
      props.activeScreen === 'home' ? '#FFFFFF' : props.theme.colors.fontGray};
  }

  .scrapIcon {
    stroke: ${(props) =>
      props.activeScreen === 'scrap' ? '#FFFFFF' : props.theme.colors.fontGray};
  }
`;

const NAV_LIST = [
  { id: 1, type: 'home', btnText: '홈' },
  { id: 2, type: 'scrap', btnText: '스크랩' },
];
