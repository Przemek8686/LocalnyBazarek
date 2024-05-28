import React from "react";
import { LoaderContainer,AnimatedLogo } from "./styled";
import logo from "../../Images/logo2.png"; // Import logo image



const Loader = () => (
  <LoaderContainer>
    <AnimatedLogo src={logo} alt="Loading..." />
  </LoaderContainer>
);

export default Loader;
