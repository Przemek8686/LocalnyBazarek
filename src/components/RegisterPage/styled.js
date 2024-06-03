import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RegisterTitle = styled.h1`
  font-size: 2em;
  color: #1f5156;
  margin-bottom: 20px;
  background-color: white;
  border: 2px solid #1f5156;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
   font-size:1.7em;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1.0em;
  font-weight: normal;
  margin-top: -10px;
  color: #1f5156;
  font-weight: bold;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 560px;
  border: 3px solid #1f5156;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  background-color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    margin: 3% auto;
  }

  @media (max-width: 480px) {
    width: 95%;
    max-width: 350px;
    margin: 5% auto;
  }

  @media (max-width: 400px) {
    width: 83%;
    max-width: 300px;
    margin: 5% auto;
  }
`;

export const WelcomeMessage = styled.h2`
  font-size: 12px;
  font-weight: bold;
  color: #1f5156;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 2px solid #1f5156;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1f5156;
  color: #f5b921;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  transition-duration: 0.4s;
  margin-bottom: 40px;
  border-radius: 12px;

  &:hover {
    background-color: #378d95;
    color: white;
    border: 2px solid #4caf50;
  }
`;

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  margin-top: 20px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 2s linear infinite;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1px;
  margin-top: 1px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1f5156;
  margin-top: 1px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }

  @media (max-width: 400px) {
    font-size: 0.9em;
  }
`;
