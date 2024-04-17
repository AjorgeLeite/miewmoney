import React, { useState } from "react";
import {
  AppContainer,
  AppContent,
  ChartsContainer,
  HistoryContainer,
  StyledHeaderContainer,
  Title,
  Filters,
  StyledSelect,
  TopChartsRow,
  Chart,
  BottomChartsRow,
  TransactionFormChart,
  LoginRegisterContainer,
} from "./App.styles";
import LineChart from "./components/Charts/Linechart";
import ExpenseChart from "./components/Charts/ExpenseChart";
import AddTransactionForm from "./components/Transactions/addTransaction";
import History from "./components/History/historyTransactions";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import { useAuth } from "./context/AppContext";
import IncomeChart from "./components/Charts/IncomeChart";

function App() {
  const { isLoggedIn, name, transactions } = useAuth();

  return (
    <AppContainer>
      <AppContent>
        {isLoggedIn ? (
          <>
            <ChartsContainer>
              <TopChartsRow>
                <Chart>
                  <Title>Balance Overview</Title>
                  <LineChart transactions={transactions} />
                </Chart>
                <Chart>
                  <Title>Expenses by Category</Title>
                  <ExpenseChart transactions={transactions} />
                </Chart>
              </TopChartsRow>
              <BottomChartsRow>
                <Chart>
                  <Title>Income by Category</Title>
                  <IncomeChart transactions={transactions} />
                </Chart>
                <TransactionFormChart>
                  <AddTransactionForm />
                </TransactionFormChart>
              </BottomChartsRow>
            </ChartsContainer>
            <HistoryContainer>
              <History transactions={transactions} />
            </HistoryContainer>
          </>
        ) : (
          <LoginRegisterContainer>
            <LoginRegisterPage />
          </LoginRegisterContainer>
        )}
      </AppContent>
    </AppContainer>
  );
}

export default App;
