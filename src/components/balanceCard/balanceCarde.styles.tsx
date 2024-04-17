import styled from "styled-components";

export const BalanceCardContainer = styled.div`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  color: white;
  background-color: #468e9d;
  border-radius: 24px;
  width: 85%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #34495e;
  background-image: url("/balanceCardBg.svg");
  background-repeat: no-repeat;
  background-position: 100% 50%;
`;

export const BalanceTitle = styled.div`
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Balance = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  margin-left: -10px;
  @media screen and (max-width: 1200px) {
    width: 150px;
    margin-left: -20px;
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-left: 15px;
  @media screen and (max-width: 1200px) {
  }
`;
