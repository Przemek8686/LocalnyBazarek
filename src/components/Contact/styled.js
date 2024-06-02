import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 20px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border: 2px solid #1f5156;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 10% 30%;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    margin: 10% 20%;
  }

  @media screen and (max-width: 480px) {
    max-width: 300px;
    margin: 10% 10%;
  }

  @media screen and (max-width: 400px) {
    max-width: 250px;
    
    padding: 15px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  margin-top: 10px;
  height: auto;

  @media screen and (max-width: 480px) {
    width: 100px;
    margin-left: 9%;
  }

  @media screen and (max-width: 400px) {
    width: 80px;
    margin-left: 5%;
  }
`;

export const ContactInfo = styled.div`
  h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #333;
    font-weight: bold;

    @media screen and (max-width: 480px) {
      font-size: 1.2em;
      margin-left: 13px;
    }

    @media screen and (max-width: 400px) {
      font-size: 1em;
      margin-left: 10px;
    }
  }
`;

export const ContactDetails = styled.div`
  p {
    margin-bottom: 5px;
    font-size: 1.1em;
    color: #666;
    font-weight: bold;

    @media screen and (max-width: 480px) {
      font-size: 1em;
      margin-left: 13px;
    }

    @media screen and (max-width: 400px) {
      font-size: 0.7em;
      margin-left: 10px;
    }
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center; /* Wyśrodkowanie ikon wzdłuż osi X */
  align-items: center; /* Wyśrodkowanie ikon wzdłuż osi Y */

  a {
    font-size: 2em;
    margin-right: 10px;
    color: #1f5156;
    margin: 10px;
    transition: transform 0.2s; /* Dodajemy efekt przejścia dla transformacji */

    &:hover {
      color: #666;
      transform: scale(1.1); /* Delikatne powiększenie po najechaniu myszką */
    }

    @media screen and (max-width: 400px) {
      font-size: 1.5em;
      margin: 5px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px; /* Zmieniony margines */

  @media screen and (max-width: 400px) {
    margin-bottom: 3px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1f5156;
  margin-top: 5px; /* Zmieniony margines */

  @media screen and (max-width: 400px) {
    font-size: 1.2em;
    margin-top: 3px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1.0em;
  font-weight: normal;
  margin-top: -10px;
  color: #1f5156;
  font-weight: bold;
`;

export const ContactInformation = styled.h2`
  font-size: 20px;
  color: #333; /* Przykładowy kolor */
  text-align: center; /* Wyśrodkowanie tekstu */

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
