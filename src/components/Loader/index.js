import React from "react";
import { LoaderContainer, LoaderCircle, AnimatedLogo, ProgressText } from "./styled";
import logo from "../../Images/logo2.png"; // Import logo image

const Loader = ({ progress }) => (
  <LoaderContainer>
    <LoaderCircle>
      <AnimatedLogo src={logo} alt="Loading..." />
      <ProgressText>{Math.round(progress)}%</ProgressText>
    </LoaderCircle>
  </LoaderContainer>
);

export default Loader;
