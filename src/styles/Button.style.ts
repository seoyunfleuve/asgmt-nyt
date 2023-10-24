import { css } from 'styled-components';

export const roundBtnStyle = css`
  width: fit-content;
  height: ${(props) => props.theme.height.roundBtn};
  border-radius: 30px;
`;

export const roundBtnStyleDefault = css`
  color: ${(props) => props.theme.colors.fontGray};
  border: 1px solid ${(props) => props.theme.colors.borderGray};
`;

export const roundBtnStyleActive = css`
  color: ${(props) => props.theme.colors.pointBlue};
  border: 1px solid ${(props) => props.theme.colors.subBlue};
`;

export const roundFillBtnStyle = css`
  color: ${(props) => props.theme.colors.fontGray};
  border: 1px solid ${(props) => props.theme.colors.borderLightGray};
`;

export const roundFillBtnStyleActive = css`
  color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.borderLightGray};
  background-color: ${(props) => props.theme.colors.subBlue};
`;
