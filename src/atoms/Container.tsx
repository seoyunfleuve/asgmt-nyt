import styled from 'styled-components';

export const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  max-width: 540px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const ContentContainer = styled.section`
  width: 100%;
  height: calc(100vh - ${(props) => props.theme.height.header});
  padding: 5%;
  background-color: ${(props) => props.theme.colors.bgGray};
  overflow: scroll;
`;

export const ArticleListContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: ${(props) => props.theme.height.card};
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const CardHeaderContainer = styled.div`
  height: 60%;
  position: relative;
`;

export const CardCaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  width: 335px;
  height: ${(props) => props.theme.height.modal};
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  position: absolute;
  top: calc((100vh - ${(props) => props.theme.height.modal}) / 2);
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
