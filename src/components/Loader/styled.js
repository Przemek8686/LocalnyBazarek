import styled, { keyframes } from 'styled-components';

export const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margi
  
`;

export const AnimatedLogo = styled.img`
  width: 100px;
  height: 100px;
  animation: ${scaleAnimation} 2s infinite;
  background-color: white;
  border: solid 5px #1f5156; /* Replace #000 with your desired border color */
  border-radius: 50%; /* Makes the container a circle */
  margin-bottom:160px;
  padding: 10px; /* Adds padding to create a circular background around the image */
`;