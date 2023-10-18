import { css } from 'styled-components';

export const headerFilter = css`
  color: ${(props) => props.theme.colors.fontGray};
  border: 1px solid ${(props) => props.theme.colors.borderGray};
`;

export const headerFilterHover = css`
  color: ${(props) => props.theme.colors.pointBlue};
  border: 1px solid ${(props) => props.theme.colors.subBlue};
`;

export const headerFilterActive = css`
  ${headerFilterHover}

  &:hover {
    color: #ffffff;
    border: 1px solid ${(props) => props.theme.colors.pointBlue};
    background: ${(props) => props.theme.colors.pointBlue};
  }
`;

export const headerFilterDefault = css`
  ${headerFilter}

  &:hover {
    ${headerFilterHover}
  }
`;

export const countryFilter = css`
  color: ${(props) => props.theme.colors.fontGray};
  border: 1px solid ${(props) => props.theme.colors.borderLightGray};
`;

export const countryFilterHover = css`
  color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.borderLightGray};
  background: ${(props) => props.theme.colors.subBlue};
`;

export const countryFilterActive = css`
  ${countryFilterHover}

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.pointBlue};
    background: ${(props) => props.theme.colors.pointBlue};
  }
`;

export const countryFilterDefault = css`
  ${countryFilter}

  &:hover {
    ${countryFilterHover}
  }
`;
