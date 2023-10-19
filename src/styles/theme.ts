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
  header: '60px',
  filter: '34px',
  nav: '85px',
  card: '104px',
  actionBtn: '60px',
  modal: '480px',
  input: '44px',
};

const theme: DefaultTheme = {
  colors,
  height,
};

export default theme;
