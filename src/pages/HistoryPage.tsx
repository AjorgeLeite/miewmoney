import History from "../components/History/historyTransactions";
import AddTransactionForm from "../components/Transactions/addTransaction";
import { useAuth } from "../context/AppContext";
import {
  AddTransactionFormStyles,
  HistoryContainer,
  HistoryPageContainer,
} from "./HistoryPage.Styles";

const HistoryPage = () => {
  const { transactions } = useAuth();
  console.log("transactions", transactions);
  return (
    <HistoryPageContainer>
      <AddTransactionFormStyles>
        <AddTransactionForm />
      </AddTransactionFormStyles>
      <HistoryContainer>
        <History transactions={transactions}></History>
      </HistoryContainer>
    </HistoryPageContainer>
  );
};

export default HistoryPage;
