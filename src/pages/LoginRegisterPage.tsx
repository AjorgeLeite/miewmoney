import React, { useState } from "react";
import LoginComponent from "../components/login/login";
import RegisterComponent from "../components/register/register";
import {
  StyledButton,
  TransactionContainer,
} from "../components/Transactions/Transaction.styles";

const LoginRegisterPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <TransactionContainer>
      {isLogin ? <LoginComponent /> : <RegisterComponent />}
      <StyledButton onClick={toggleForm}>
        {isLogin ? "I want to Register" : "Let me Log in"}
      </StyledButton>
    </TransactionContainer>
  );
};

export default LoginRegisterPage;
