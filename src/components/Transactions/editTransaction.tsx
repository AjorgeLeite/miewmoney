import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AppContext";
import {
  InputContainer,
  SmallStyledButton,
  StyledInput,
  StyledLabelEdit,
  TitleEdit,
  TransactionContainerEdit,
} from "./Transaction.styles";
import { StyledSelect } from "../History/historyTransactions.styles";
import { Transaction } from "../../Types";
import { EditTransactionFormProps } from "../../Types";

const EditTransactionForm: React.FC<EditTransactionFormProps> = ({
  transaction,
  onClose,
}) => {
  const [amount, setAmount] = useState(transaction.amount.toString());
  const [category, setCategory] = useState(transaction.category);
  const [description, setDescription] = useState(transaction.description);
  const [type, setType] = useState(transaction.type);
  const [error, setError] = useState("");
  const {
    id,
    balance,
    transactions,
    name,
    avatar,
    username,
    password,
    updateBalance,
    updateTransactions,
  } = useAuth();

  const handleEditTransaction = async () => {
    try {
      if (balance === null) {
        throw new Error("Balance is null");
      }

      const transactionAmount = parseFloat(amount);

      const amountDifference =
        type === "income"
          ? transactionAmount - transaction.amount
          : transaction.amount - transactionAmount;

      const updatedTransactions = transactions
        ? transactions.map((trans) =>
            trans.id === transaction.id
              ? {
                  ...trans,
                  type,
                  amount: transactionAmount,
                  category,
                  description,
                }
              : trans
          )
        : [];

      const updatedBalance = balance + amountDifference;

      const updatedUserData = {
        id,
        avatar,
        name,
        username,
        password,
        balance: updatedBalance,
        transactions: updatedTransactions,
      };

      console.log("Updated User Data:", updatedUserData);

      updateBalance(updatedBalance);
      updateTransactions(updatedTransactions);

      await axios.put(`http://localhost:3333/users/${id}`, updatedUserData);

      console.log("Transaction edited ");
      onClose();
    } catch (error) {
      console.error("Failed to edit transaction:", error);
      setError("Failed to edit transaction.");
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <TransactionContainerEdit>
      <TitleEdit>Edit Transaction</TitleEdit>
      <InputContainer>
        <StyledLabelEdit>Amount:</StyledLabelEdit>
        <StyledInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabelEdit>Category:</StyledLabelEdit>
        <StyledInput
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabelEdit>Description:</StyledLabelEdit>
        <StyledInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabelEdit>Type:</StyledLabelEdit>
        <StyledSelect value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </StyledSelect>
      </InputContainer>
      <SmallStyledButton onClick={handleEditTransaction}>
        Accept{" "}
      </SmallStyledButton>
      <SmallStyledButton onClick={handleCancel}>Cancel</SmallStyledButton>
      {error && <p>{error}</p>}
    </TransactionContainerEdit>
  );
};

export default EditTransactionForm;
