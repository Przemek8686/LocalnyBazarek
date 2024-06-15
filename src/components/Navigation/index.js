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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavigationBar>
      <TitleContainer>  
      <StyledLogoLink to="/">
          <Logo src={logo} alt="Logo" />
          <div>
            <Title>Lokalny Bazarek</Title>
            
          </div>
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
        <StyledLink to="/LocalnyBazarek" activeClassName="active" exact="true" onClick={closeMenu}>
          Oferty
        </StyledLink>
        <StyledLink to="/add-offer" activeClassName="active" onClick={closeMenu} >
          Dodaj Ofertę
        </StyledLink>
        <StyledLink to="/login" activeClassName="active" onClick={closeMenu}>
          Logowanie
        </StyledLink>
        <StyledLink to="/register" activeClassName="active" onClick={closeMenu}>
          Rejestracja
        </StyledLink>
        <StyledLink to="/contact" activeClassName="active" onClick={closeMenu}>
          Kontakt
        </StyledLink>

        <StyledLink to="/reklama" activeClassName="active" onClick={closeMenu} >
          Reklama
        </StyledLink>
        <StyledLink to="/blog" activeClassName="active" onClick={closeMenu}>
          Blog
        </StyledLink>
      </NavLinksContainer>

      <Spacer />
    </NavigationBar>
  );
};

export default Navigation;
