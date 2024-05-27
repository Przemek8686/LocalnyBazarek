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
  StyledLogoLink
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
        <StyledLogoLink to="/">
        <Logo src={logo} alt="Logo" />
        <Title>Lokalny Bazarek</Title>
      </StyledLogoLink>


      </TitleContainer>
      <Spacer />
      <MenuIcon onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
      <NavLinksContainer isMenuOpen={isMenuOpen}>
        <StyledLogoLink to="/" activeClassName="active">
</StyledLogoLink>
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
