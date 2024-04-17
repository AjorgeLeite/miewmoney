import styled from "styled-components";

export const TransactionContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #468e9d;
  width: 100%;
  padding: 40px;
  overflow-y: auto;
  background-image: url("/pattern2.png");
  height: 91vh;
  background-size: cover;
  background-position: top;
  @media screen and (max-width: 1200px) {
    margin-left: 10px;
    margin-right: 10px;
    height: fit-content;
  }
  @media screen and (max-width: 768px) {
    border-radius: 20px;
    height: fit-content;
  }
`;

export const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 20px 30px;
  width: 14vw;
  @media screen and (max-width: 1200px) {
    justify-content: start;
    width: 40vw;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 30vw;
    margin-left: 0;
  }
`;

export const TransactionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const Amount = styled.div<{ type: string }>`
  font-weight: bold;
  margin-bottom: 10px;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.type === "income" ? "green" : "red")};
`;

export const CategoryDescription = styled.div`
  width: 20vw;
  text-align: center;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  margin-top: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  max-width: 40px;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: fit-content;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 0;
    margin-top: 10px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const HighlightBar = styled.div<{ type: string }>`
  height: 10px;
  width: 17vw;
  border-radius: 10px;
  background-color: ${(props) => (props.type === "income" ? "green" : "red")};
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    justify-content: start;
    width: 46vw;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 38vw;
    margin-left: 0;
  }
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
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
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

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWhite = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
  color: white;
`;
