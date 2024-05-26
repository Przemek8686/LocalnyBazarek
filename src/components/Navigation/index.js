import React, { useState } from "react";
import {
  NavigationBar,
  TitleContainer,
  Logo,
  Title,
  Spacer,
  StyledLink,
  MenuIcon,
  NavLinksContainer,
} from "./styled";
import logo from "../../Images/logo2.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationBar>
      <TitleContainer>
        <Logo src={logo} alt="Logo" />
        <Title>Lokalny Bazarek</Title>
      </TitleContainer>
      <Spacer />
      <MenuIcon onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
      <NavLinksContainer isMenuOpen={isMenuOpen}>
        <StyledLink to="/info" activeClassName="active">
          Info
        </StyledLink>
        <StyledLink to="/LocalnyBazarek" activeClassName="active" exact="true">
          Oferty
        </StyledLink>
        <StyledLink to="/add-offer" activeClassName="active">
          Dodaj Ofertę
        </StyledLink>
        <StyledLink to="/login" activeClassName="active">
          Logowanie
        </StyledLink>
        <StyledLink to="/register" activeClassName="active">
          Rejestracja
        </StyledLink>
        <StyledLink to="/contact" activeClassName="active">
          Kontakt
        </StyledLink>
       
        <StyledLink to="/reklama" activeClassName="active">
          Reklama
        </StyledLink>
        <StyledLink to="/blog" activeClassName="active">
          Blog
        </StyledLink>
      </NavLinksContainer>

      <Spacer />
    </NavigationBar>
  );
};

export default Navigation;
