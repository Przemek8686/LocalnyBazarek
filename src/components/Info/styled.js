import styled from "styled-components";

export const InfoContainer = styled.div`
  max-width: 90%;
  margin: 50px auto;
  padding: 20px;
  background-color:white;
  border-radius: 10px;
  text-align: center;
  border: 4px solid #1f5156;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Logo = styled.img`
  max-width: 140px;
  
`;

export const InfoContent = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: bold; // Pogrubienie tekstu
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px; /* Zmieniony margines */
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1f5156;
  margin-top: 5px; /* Zmieniony margines */
`;
export const ContactInformation = styled.h2`
  /* Styl dla informacji kontaktowych */
  font-size: 20px;
  color: #333; /* Przykładowy kolor */
  text-align: center; /* Wyśrodkowanie tekstu */
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;