import { ISubfilter } from './Filter.type';

export interface IBtnProps {
  btnText?: string | string[] | number;
  isActive?: boolean;
  onClick: () => void;
}

export interface ITabProps extends IBtnProps {
  tabList?: ISubfilter[];
}
