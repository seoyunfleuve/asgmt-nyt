import { IArticleFilter } from '../store/useArticleFilterStore';
import { IBtnProps } from './Button.type';

export interface IPlaceholder {
  placeholder: string;
}

export interface IFilter extends IPlaceholder {
  id: number;
  title: string;
  subfilter?: ISubfilter[] | null;
}

export interface ICurrnetFilter {
  filterStore?: IArticleFilter;
  isModal?: boolean;
}

export interface IFilterCategory extends IFilter {
  filter: string;
  type: string;
}

export interface IInputProps extends IPlaceholder {
  type: string;
  setFilter?: (newValue: string) => void;
}

export interface ICheckboxProps extends IPlaceholder {
  id: number;
  isActive: boolean;
  onClick?: (newValue: ISubfilter) => void;
}

export interface IFilterCheckboxProps {
  subfilter?: ISubfilter[] | null;
  activeSubfilter?: ISubfilter[] | null;
  setFilter?: (newValue: ISubfilter) => void;
}

export interface IFilterCategoryProps extends ICurrnetFilter {
  element: IFilterCategory;
}

export interface IFilterModalProps extends ICurrnetFilter, IBtnProps {
  category: IFilterCategory[];
}

export interface ICurrentFilter {
  [key: string]:
    | IFilter[]
    | ((newValue: string) => void)
    | ((newValue: ISubfilter) => void)
    | ((newValue: IFilter[]) => void);
}

export interface ISubfilter {
  id: number;
  title: string;
  [key: string]: string | string[] | number;
}
