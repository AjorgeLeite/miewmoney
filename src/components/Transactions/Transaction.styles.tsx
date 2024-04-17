import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: white;
  border: thin solid blue;
  border-radius: 20px;
  display: inline-block;
  font: inherit;
  line-height: 1em;
  padding: 0.5em 1em;
  margin: 0;
  width: 150px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #468e9d;
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  min-width: 170px;
  height: 40px;
  transition: all 0.3s ease-in-out;
  border: 0;
  font-size: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  &:hover {
    color: white;
    background-color: #1f5168;
    transform: translateY(-2px);
    box-shadow: 2px 2px 15px #cccccc;
  }
`;

export const SmallStyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  min-width: 70px;
  background-color: #468e9d;
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
  border: 0;
  font-size: 16px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    color: white;
    background-color: #1f5168;
    transform: translateY(-2px);
    box-shadow: 2px 2px 15px #cccccc;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #468e9d;
`;
export const TitleEdit = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #468e9d;
`;

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  gap: 10px;
`;
export const TransactionContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 95%;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

export const StyledLabel = styled.label`
  color: #1f5168;
  font-size: 16px;
`;
export const StyledLabelEdit = styled.label`
  color: #468e9d;
  font-size: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ErrorMsg = styled.p`
  color: #1f5168;
  font-size: 16px;
`;
