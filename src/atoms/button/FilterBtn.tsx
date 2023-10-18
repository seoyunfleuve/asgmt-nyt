import React, { useState } from 'react';
import styled from 'styled-components';
import {
  countryFilterActive,
  countryFilterDefault,
  headerFilterActive,
  headerFilterDefault,
} from '../../styles/Filter.style';
import { IFilterProps } from '../../type/Filter.type';

export default function FilterBtn({ type, btnText }: IFilterProps) {
  const [isActive, setIsActive] = useState(true);

  return (
    <FBtn
      type={type}
      isActive={isActive}
      onClick={() => setIsActive(!isActive)}
    >
      {btnText}
    </FBtn>
  );
}

const FBtn = styled.button<IFilterProps>`
  width: fit-content;
  height: ${(props) => props.theme.height.filter};
  padding: 6px 12px 4px 12px;
  border-radius: 30px;
  ${(props) =>
    props.isActive
      ? FILTER_BTN_STYLES[props.type].active
      : FILTER_BTN_STYLES[props.type].default};

  &:hover {
    cursor: pointer;
  }
`;

const FILTER_BTN_STYLES = {
  country: {
    default: countryFilterDefault,
    active: countryFilterActive,
  },
  header: {
    default: headerFilterDefault,
    active: headerFilterActive,
  },
};
