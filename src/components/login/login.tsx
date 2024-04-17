import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AppContext";
import {
  ErrorMsg,
  InputContainer,
  SmallStyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
  TransactionContainer,
} from "../Transactions/Transaction.styles";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3333/users");
      const users = response.data;
      const user = users.find(
        (u: any) => u.username === username && u.password === password
      );
      if (user) {
        const { username, name, avatar, id, balance, transactions } = user;
        login(username, name, avatar, id, balance, transactions, password);
        console.log("Logged in");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Failed to authenticate. Please try again later.");
    }
  };

  return (
    <TransactionContainer>
      <Title>Login</Title>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <InputContainer>
          <StyledLabel>Username:</StyledLabel>
          <StyledInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Password:</StyledLabel>
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <SmallStyledButton type="submit">Login</SmallStyledButton>
      </StyledForm>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </TransactionContainer>
  );
};

export default LoginComponent;
