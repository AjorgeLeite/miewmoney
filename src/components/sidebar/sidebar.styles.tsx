import styled from "styled-components";
import { SidebarContainerProps } from "../../Types";


export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #326f82;
  color: #34495e;
  padding: 20px;
  transition: width 0.3s ease;
  background-image: url("/pattern.png");
  background-size: cover;
  width: 230px;
  @media screen and (max-width: 1200px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    height: 99vh;
    width: 170px;
  }

  @media screen and (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? "40%" : "50px")};
  }
`;

export const Logo = styled.div`
  img {
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  gap: 20px;

  a {
    display: block;
    text-decoration: none;
    color: #ffffff;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    gap: 10px;

    a {
      margin-bottom: 5px;
    }
  }
`;

export const BottomNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const HamburgerIcon = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  background-image: url("https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png");
  background-size: contain;
  cursor: pointer;
  z-index: 9999;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10px;
  text-align: center;
  height: 10px;
  color: white;
`;
