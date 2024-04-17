import React, { useState } from "react";
import {
  TransactionContainer,
  TransactionDetails,
  TransactionItem,
  Amount,
  CategoryDescription,
  DateContainer,
  HighlightBar,
  Day,
  StyledSelect,
  StyledHeaderContainer,
  Filters,
  TitleWhite,
} from "./historyTransactions.styles";
import { Transaction } from "../../context/AppContext";
import EditTransactionForm from "../Transactions/editTransaction";
import { SmallStyledButton } from "../Transactions/Transaction.styles";

const History = ({ transactions }: { transactions: Transaction[] | null }) => {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const categories = transactions
    ? Array.from(
        new Set(transactions.map((transaction) => transaction.category))
      )
    : [];

  const filteredTransactions = transactions
    ? transactions.filter((transaction) => {
        const typeFilter =
          filterType === "all" || transaction.type === filterType;
        const categoryFilter =
          filterCategory === "all" ||
          transaction.category.includes(filterCategory);

        return typeFilter && categoryFilter;
      })
    : [];

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    return { day, month };
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
  };

  const handleCloseEdit = () => {
    setEditingTransaction(null);
  };

  return (
    <TransactionContainer>
      <StyledHeaderContainer>
        <TitleWhite>Transaction History</TitleWhite>
        <Filters>
          <StyledSelect
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </StyledSelect>
          <StyledSelect
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </StyledSelect>
        </Filters>
      </StyledHeaderContainer>

      {filteredTransactions
        .slice()
        .reverse()
        .map((transaction) => (
          <TransactionItem key={transaction.id}>
            <DateContainer>
              <Day>{formatDate(transaction.date).day}</Day>
              <p>{formatDate(transaction.date).month}</p>
            </DateContainer>
            <div>
              <TransactionDetails>
                <CategoryDescription>
                  <p>
                    <b>Category:</b>
                  </p>
                  <p>{transaction.category}</p>
                </CategoryDescription>
                <CategoryDescription>
                  <p>
                    <b>Description:</b>
                  </p>
                  <p>{transaction.description}</p>
                </CategoryDescription>
                <Amount type={transaction.type}>
                  {transaction.type === "income"
                    ? `+ ${transaction.amount}€`
                    : `- ${transaction.amount}€`}
                </Amount>
                <SmallStyledButton
                  onClick={() => handleEditTransaction(transaction)}
                >
                  Edit
                </SmallStyledButton>
              </TransactionDetails>
              {editingTransaction &&
                editingTransaction.id === transaction.id && (
                  <EditTransactionForm
                    transaction={editingTransaction}
                    onClose={handleCloseEdit}
                  />
                )}
              <HighlightBar type={transaction.type} />
            </div>
          </TransactionItem>
        ))}
    </TransactionContainer>
  );
};

export default History;
