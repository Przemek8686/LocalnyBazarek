import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 1em;
  background: linear-gradient(#1f5156, #163b3f);
  border: 3px solid #1f5156; 
  border-radius: 15px; 
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
  margin: 0 2em; 
  &:hover {
    color: white;
  }
  &.active {
    border: 2px solid #f5b921; 
    border-radius: 10px;
    padding: 0.5em;
    font-size: 1.4em; 
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
  margin-left:10px;
`;
