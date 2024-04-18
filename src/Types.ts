import { ReactNode } from "react";

export interface SidebarContainerProps {
    isOpen: boolean;
  }
  
export interface EditTransactionFormProps {
    transaction: Transaction;
    onClose: () => void;
  }

  export interface AuthProviderProps {
    children: ReactNode;
  }
  
  export interface User {
    id: number;
    username: string;
    password: string;
    balance: number;
    name: string;
    avatar: string;
    transactions: any[];
  }
  export interface Transaction {
    id: number;
    type: string;
    amount: number;
    category: string;
    description: string;
    date: string;
  }
  export interface AuthContextType {
    isLoggedIn: boolean;
    username: string | null;
    password: string | null;
    name: string | null;
    avatar: string | null;
    id: number | null;
    balance: number | null;
    transactions: Transaction[] | null;
    login: (
      username: string,
      name: string,
      avatar: string,
      id: number,
      balance: number,
      transactions: any[],
      password: string
    ) => void;
    logout: () => void;
    updateBalance: (newBalance: number) => void;
    updateTransactions: (newTransactions: any[]) => void;
  }