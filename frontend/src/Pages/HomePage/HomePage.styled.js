import styled from "styled-components";
export const HomeContainer = styled.div`
  align-items: center;
  background-color: #f1f5f9;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const AppHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const CenterContainer = styled.div`
  position: relative;
  display: inline;
  flex-direction: row;
  width: calc(100% - 280px);
  overflow: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const ContainerTasks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  overflow: auto;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Section = styled.div`
  width: 20%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const CurrentItem = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 22px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ShapeView = styled.div`
  display: flex;
  left: 0;
  margin: 20px 0 40px 0;
  overflow: auto;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const ChildView = styled.span`
  padding: 3px;
  color: ${({ viewTask }) => (viewTask === true ? "" : "")};
  cursor: pointer;
  :hover {
  }
  /* :hover {
    background-color: red;
  } */
`;
