import { css } from 'styled-components';

export const headerFilterDefault = css`
  color: ${(props) => props.theme.colors.fontGray};
  border: 1px solid ${(props) => props.theme.colors.borderGray};
`;

export const headerFilterActive = css`
  color: ${(props) => props.theme.colors.pointBlue};
  border: 1px solid ${(props) => props.theme.colors.subBlue};
`;

export const countryFilterDefault = css`
  color: ${(props) => props.theme.colors.fontGray};
  border: 1px solid ${(props) => props.theme.colors.borderLightGray};
`;

export const countryFilterActive = css`
  color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.borderLightGray};
  background: ${(props) => props.theme.colors.subBlue};
`;
