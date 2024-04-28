import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 20px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
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
`;

export const Logo = styled.img`
  width: 140px;
  height: auto;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    width: 100px;
    margin-left:9%
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
      margin-left:33px;
    }
  }
`;

export const ContactDetails = styled.div`
  p {
    margin-bottom: 5px;
    font-size: 1.2em;
    color: #666;
    font-weight: bold;

    @media screen and (max-width: 480px) {
      font-size: 1em;
      margin-left:33px;
    }
  }
`;
