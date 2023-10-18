export interface IBtnTextProps {
  btnText?: string;
}

export interface IFilterProps extends IBtnTextProps {
  id?: number;
  type: 'header' | 'country';
  isActive?: boolean;
}

export interface IFilterInputProps {
  placeholder?: string;
}

export interface IFilterCategoryProps extends IFilterInputProps {
  title: string;
  isInput: boolean;
}
