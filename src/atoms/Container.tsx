import styled from 'styled-components';

export const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  max-width: 540px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
  position: relative;
`;

export const ContentContainer = styled.section`
  width: 100%;
  height: calc(100vh - ${(props) => props.theme.height.header});
  padding: 5%;
  background-color: ${(props) => props.theme.colors.bgGray};
  border: 1px solid black;
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
`;

export const CardHeaderContainer = styled.div`
  height: 60%;
  position: relative;
`;

export const CardCaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
