import React, { ReactNode } from "react";
import Sidebar from "../sidebar/sidebar";
import {
  MainContent,
  LayoutContainer,
  SidebarContainer,
} from "./layout.styles";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default Layout;
