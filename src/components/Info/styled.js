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
  max-width: 200px;
  margin-bottom: 20px;
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
