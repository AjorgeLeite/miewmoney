import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { AuthContextType, AuthProviderProps } from "../Types";


const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  username: null,
  name: null,
  avatar: null,
  id: null,
  balance: null,
  transactions: null,
  password: null,
  login: () => {},
  logout: () => {},
  updateBalance: () => {},
  updateTransactions: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<any[] | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUsername(userData.username);
      setName(userData.name);
      setAvatar(userData.avatar);
      setId(userData.id);
      setBalance(userData.balance);
      setTransactions(userData.transactions);
      setPassword(userData.password);
    }
  }, []);

  const login = async (
    username: string,
    name: string,
    avatar: string,
    id: number,
    balance: number,
    transactions: any[],
    password: string
  ) => {
    try {
      const response = await axios.get(`http://localhost:3333/users/${id}`);
      const userData = response.data;
      setIsLoggedIn(true);
      setUsername(username);
      setName(name);
      setAvatar(avatar);
      setId(id);
      setBalance(userData.balance);
      setTransactions(userData.transactions);
      setPassword(password);
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          username,
          name,
          avatar,
          id,
          balance: userData.balance,
          transactions: userData.transactions,
          password: password,
        })
      );
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setName(null);
    setAvatar(null);
    setId(null);
    setBalance(null);
    setPassword(null);
    setTransactions(null);
    sessionStorage.removeItem("user");
  };

  const updateBalance = (newBalance: number) => {
    setBalance(newBalance);
    const userData = JSON.parse(sessionStorage.getItem("user")!);
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...userData,
        balance: newBalance,
      })
    );
  };

  const updateTransactions = (newTransactions: any[]) => {
    setTransactions(newTransactions);
    const userData = JSON.parse(sessionStorage.getItem("user")!);
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...userData,
        transactions: newTransactions,
      })
    );
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        username,
        password,
        name,
        avatar,
        id,
        balance,
        transactions,
        login,
        logout,
        updateBalance,
        updateTransactions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
