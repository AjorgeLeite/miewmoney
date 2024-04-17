import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AppContext";
import { StyledSelect } from "../History/historyTransactions.styles";
import {
  InputContainer,
  StyledButton,
  StyledInput,
  StyledLabel,
  Title,
  TransactionContainer,
} from "./Transaction.styles";

const AddTransactionForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState("");
  const {
    id,
    balance,
    transactions,
    name,
    username,
    password,
    avatar,
    updateBalance,
    updateTransactions,
  } = useAuth();

  const handleAddTransaction = async () => {
    try {
      if (!amount || !category || !description) {
        setError("Please fill in all fields");
        return;
      }

      if (balance === null) {
        throw new Error("Balance is null");
      }

      const transactionAmount = parseFloat(amount);
      const newBalance =
        type === "income"
          ? balance + transactionAmount
          : balance - transactionAmount;

      const newTransactionId = transactions ? transactions.length + 1 : 1;

      const newTransaction = {
        id: newTransactionId,
        type,
        amount: transactionAmount,
        category,
        description,
        date: new Date().toISOString().split("T")[0],
      };

      const updatedTransactions = transactions
        ? [...transactions, newTransaction]
        : [newTransaction];

      const updatedUserData = {
        id,
        avatar,
        name,
        username,
        password,
        balance: newBalance,
        transactions: updatedTransactions,
      };

      updateBalance(newBalance);
      updateTransactions(updatedTransactions);

      await axios.put(`http://localhost:3333/users/${id}`, updatedUserData);

      console.log("Transaction added ");
    } catch (error) {
      console.error("Failed to add transaction:", error);
      setError("Failed to add transaction.");
    }
  };

  return (
    <TransactionContainer>
      <Title>Add Transaction</Title>
      <InputContainer>
        <StyledLabel>Amount:</StyledLabel>
        <StyledInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel>Category:</StyledLabel>
        <StyledInput
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel>Description:</StyledLabel>
        <StyledInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel>Type:</StyledLabel>
        <StyledSelect value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </StyledSelect>
      </InputContainer>
      <StyledButton onClick={handleAddTransaction}>
        Add Transaction
      </StyledButton>
      {error && <p>{error}</p>}
    </TransactionContainer>
  );
};

export default AddTransactionForm;
