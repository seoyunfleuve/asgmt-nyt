import React from 'react';
import { ISubfilter } from './Filter.type';

export interface IBtnProps {
  id?: number;
  btnText?: string | string[] | number;
  isActive?: boolean;
  onClick: () => void;
  icon?: IIcon[];
}

export interface ITabProps extends IBtnProps {
  tabList?: ISubfilter[];
}

interface IIcon {
  id: number;
  icon: React.ReactElement | null;
}

export interface INavBtnProps {
  type: string;
  activeScreen: string;
}
