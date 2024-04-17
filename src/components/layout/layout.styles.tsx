import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  margin-left: 260px;
  @media screen and (max-width: 1200px) {
    margin-left: 170px;
    width: 94vw;
  }
  @media screen and (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #326f82;
  color: #34495e;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 230px;
  position: fixed;

  @media screen and (max-width: 1200px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    max-width: 20px;
    height: 100vh;
    transition: width 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;
