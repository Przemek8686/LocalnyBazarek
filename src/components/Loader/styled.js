import styled from 'styled-components';

export const LoaderCircle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  border: 5px solid #1f5156;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%; /* Przesuń do górnej połowy ekranu */
  left: 50%; /* Przesuń do środka ekranu */
  transform: translate(-50%, -50%); /* Skoryguj pozycję do środka */
  z-index: 1; /* Ustaw wyżej niż LoaderContainer */
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 250px; /* Ustaw padding-top równy wysokości LoaderCircle */
`;

export const AnimatedLogo = styled.img`
  width: 150px;
  height: 150px;
  animation: pulse 4s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ProgressText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;
