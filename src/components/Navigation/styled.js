import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 0.3em;
  background: linear-gradient(#1f5156, #163b3f);
  border: 3px solid #1f5156; 
  border-radius: 0px 0px 15px 15px; 
  
  /* Media query dla mniejszych rozdzielczości */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1em 11em;
  }
`;

export const Logo = styled.img`
  width: 70px; 
  height: 70px; 
`;

export const StyledLink = styled(NavLink)` 
  text-decoration: none;
  color: black;
  color: #f5b921;
  font-size: 1em; 
  margin: 0; /* Usuwamy margines */
  padding: 0.5em 0; /* Dodajemy padding, aby stworzyć odstęp */
  &:hover {
    color: white;
  }
  &.active {
    border: 2px solid #f5b921; 
    border-radius: 10px;
    font-size: 1.4em; 
  }

  /* Media query dla mniejszych rozdzielczości */
  @media (max-width: 768px) {
    font-size: 0.7em;
   
  
  }

  &.active {
    border: 2px solid #f5b921; 
    border-radius: 10px;
    font-size: 1.0em; 
    padding:3px;
  }
`;

export const Spacer = styled.div`
  flex: 1; 
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* Wyśrodkowanie elementów w pionie */
  color: #f5b921; /* Kolor tekstu */
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 10px;
`;

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: #f5b921;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  /* Media query dla mniejszych rozdzielczości */
  @media (max-width: 768px) {
    display: flex;
    margin-top:10px;
  }

`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }

  a {
    text-decoration: none;
    color: #f5b921;
    font-size: 1em;
    padding: 0.5em 1em;
    &:hover {
      color: white;
    }
    &.active {
      border: 2px solid #f5b921;
      border-radius: 10px;
      font-size: 1.4em;
    }
  }
`;