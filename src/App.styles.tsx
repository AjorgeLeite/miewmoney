import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  text-align: center;
  margin: auto;
`;

export const AppContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const ChartsContainer = styled.div`
  flex: 2;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    flex: 0.2;
    margin-bottom: 10%;
    height: fit-content;
  }
  @media screen and (max-width: 768px) {
    flex: 0.3;
    margin-bottom: 25%;
  }
`;

export const TopChartsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const BottomChartsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25vw;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 10px;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const TransactionFormChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25vw;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 10px;
  padding-bottom: 30px;

  @media screen and (max-width: 1200px) {
    width: 90%;
    height: fit-content;
  }
`;
export const HistoryContainer = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    order: 1;
    overflow-y: hidden;
    height: fit-content;
  }
  @media screen and (max-width: 768px) {
  }
`;

export const History = styled.div`
  max-height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #468e9d;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledSelect = styled.select`
  background-color: white;
  border: thin solid blue;
  border-radius: 20px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, blue 50%),
    linear-gradient(135deg, blue 50%, transparent 50%),
    linear-gradient(to right, skyblue, skyblue);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;
  &:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      linear-gradient(to right, gray, gray);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
`;

export const TransactionContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #468e9d;
  border-radius: 20px;
  padding: 40px;
  margin-top: 20px;
  width: 100%;
  overflow-y: auto;
`;

export const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Amount = styled.div<{ type: string }>`
  font-weight: bold;
  margin-right: 10px;
  color: ${(props) => (props.type === "income" ? "green" : "red")};
`;

export const CategoryDescription = styled.div`
  width: 20%;
  text-align: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
`;

export const HighlightBar = styled.div<{ type: string }>`
  height: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => (props.type === "income" ? "green" : "red")};
`;

export const Day = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledHeaderContainer = styled(HeaderContainer)`
  padding: 20px;
`;

export const SmallStyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: blue;
`;

export const LoginRegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
