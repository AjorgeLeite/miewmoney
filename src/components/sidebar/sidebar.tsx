import { useState, useEffect } from "react";
import { useAuth } from "../../context/AppContext";
import {
  SidebarContainer,
  Logo,
  LinkContainer,
  BottomNav,
  HamburgerIcon,
  WelcomeText,
} from "./sidebar.styles";
import {
  SmallStyledButton,
  StyledButton,
} from "../Transactions/Transaction.styles";
import { Link } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import BalanceCard from "../balanceCard/BalanceCard";

const Sidebar = () => {
  const { name, avatar, logout, balance, isLoggedIn } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <HamburgerIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      )}
      {(!isMobile || isSidebarOpen) && (
        <SidebarContainer isOpen={isSidebarOpen}>
          <Link to={"/"}>
            <Logo>
              <img src="/LOGONOBG.png" alt="logo" />
            </Logo>
          </Link>
          {isLoggedIn ? (
            <>
              <UserCard name={name} avatar={avatar} />
              <BalanceCard balance={balance} />
              <LinkContainer>
                <Link to={"/"}>
                  <SmallStyledButton>Home</SmallStyledButton>
                </Link>
                <Link to={"/history"}>
                  <SmallStyledButton>All Transactions</SmallStyledButton>
                </Link>
              </LinkContainer>
              <BottomNav>
                <StyledButton onClick={logout}>Logout</StyledButton>
              </BottomNav>
            </>
          ) : (
            <WelcomeText>
              <p>Welcome to</p>
              <p style={{ fontSize: "25px" }}>Miewmoney</p>
            </WelcomeText>
          )}
        </SidebarContainer>
      )}
    </>
  );
};

export default Sidebar;
