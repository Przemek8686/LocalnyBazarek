import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Login = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: auto;
  border: 3px solid #1f5156;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  background-color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    margin:0%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1f5156;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WelcomeMessage = styled.h2`
  color: #1f5156;
  text-align: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 2px solid #1f5156;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
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
  margin: 10px 0;
  transition-duration: 0.4s;
  border-radius: 12px;

  &:hover {
    background-color: #378d95;
    color: white;
    border: 2px solid #4caf50;
  }

  @media (max-width: 768px) {
margin-left:5px;
  }
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
export const LoginTitle = styled.h1`
  font-size: 2em;
  color: #1f5156;
  margin-bottom: 20px;
  background-color: white;
  border: 2px solid #1f5156;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
`;
