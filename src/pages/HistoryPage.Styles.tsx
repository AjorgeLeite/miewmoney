import styled from "styled-components";

export const HistoryPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95vw;
  height: 100vh;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const AddTransactionFormStyles = styled.div`
  position: fixed;
  top: 0%;
  right: 3%;
  height: 100vh;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    position: relative;
    height: fit-content;
    width: 40vw;
    margin-bottom: 20px;
    margin-left: 30%;
  }
`;

export const HistoryContainer = styled.div`
  width: 60vw;
  height: 40vh;
  @media screen and (max-width: 1200px) {
    width: 80vw;
    margin-top: 20px;
  }
`;
