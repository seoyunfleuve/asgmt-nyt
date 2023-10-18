import { DefaultTheme } from 'styled-components';

const colors = {
  bgGray: '#F0F1F4',
  fontGray: '#6D6D6D',
  borderGray: '#C4C4C4',
  borderLightGray: '#F2F2F2',
  pointBlue: '#3478F6',
  subBlue: '#82B0F4',
};

const height = {
  headerHeight: '60px',
  filterHeight: '34px',
  navHeight: '85px',
  cardHeight: '104px',
};

const theme: DefaultTheme = {
  colors,
  height,
};

export default theme;
