import React from 'react';
import ActionBtn from '../atoms/button/ActionBtn';
import FilterCategory from '../molecules/FilterCategory';
import { IFilterCategory, IFilterModalProps } from '../type/Filter.type';
import { ModalContainer } from '../atoms/Container';

export default function FilterModal({
  category,
  btnText,
  onClick,
  filterStore,
  isModal,
}: IFilterModalProps) {
  return (
    <ModalContainer>
      {category.map((el: IFilterCategory) => {
        return (
          <FilterCategory
            key={el.id}
            element={el}
            filterStore={filterStore}
            isModal={isModal}
          />
        );
      })}
      <ActionBtn btnText={btnText} onClick={onClick} />
    </ModalContainer>
  );
}
