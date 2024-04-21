import React from "react";
import {
  NavigationBar,
  TitleContainer,
  Logo,
  Title,
  Spacer,
  StyledLink,
} from "./styled";
import logo from "../../Images/logo2.png";

const Navigation = () => (
  <NavigationBar>
    <TitleContainer>
      <Logo src={logo} alt="Logo" />
      <Title>Lokalny Bazarek</Title> {/* Dodaj napis Lokalny Bazarek */}
    </TitleContainer>
    <Spacer />
    <div>
      <StyledLink to="/" activeClassName="active" exact>
        Home
      </StyledLink>
      <StyledLink to="/login" activeClassName="active">
        Login
      </StyledLink>
      <StyledLink to="/register" activeClassName="active">
        Register
      </StyledLink>

      <StyledLink to="/add-offer" activeClassName="active">
        Add Offer
      </StyledLink>
    </div>
    <Spacer />
  </NavigationBar>
);

export default Navigation;
