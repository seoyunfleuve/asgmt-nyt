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
  height: calc(100vh - ${(props) => props.theme.height.headerHeight});
  padding: 5%;
  background: ${(props) => props.theme.colors.bgGray};
  border: 1px solid black;
`;

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
