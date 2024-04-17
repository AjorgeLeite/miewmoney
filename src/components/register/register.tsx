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

const RegisterComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleRegister = async () => {
    try {
      if (!username || !password || !name) {
        setError("Please fill in all fields");
        return;
      }

      let avatarURL = avatar;
      if (!avatarURL) {
        avatarURL = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
      }

      const newUser = {
        username,
        password,
        name,
        avatar: avatarURL,
        balance: 0,
        transactions: [],
      };

      const response = await axios.post("http://localhost:3333/users", newUser);
      const { id, balance, transactions } = response.data;
      console.log("register data", response.data);
      login(username, name, avatar, id, balance, transactions, password);

      console.log("User registered ");
    } catch (error) {
      setError("Failed to register. Please try again later.");
    }
  };

  return (
    <TransactionContainer>
      <Title>Register</Title>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
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
        <InputContainer>
          <StyledLabel>Name:</StyledLabel>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Avatar URL:</StyledLabel>
          <StyledInput
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </InputContainer>
        <SmallStyledButton type="submit">Register</SmallStyledButton>
      </StyledForm>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </TransactionContainer>
  );
};

export default RegisterComponent;
