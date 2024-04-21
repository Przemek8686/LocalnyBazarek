import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 800px;
  border: 3px solid #1f5156;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  background-color: white;
  font-weight: bold;
  margin-top:30px;
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

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  height: 100px;
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
  margin: 10px 2px;
  transition-duration: 0.4s;
  margin-bottom: 20px;
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
  margin-bottom: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1f5156;
  margin-top: 1px;
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  font-weight: bold;
  font-size: 18px;
`;



export const CategorySelect = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 2px solid #1f5156; /* Different border color for category */
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  background-color: #f5b921;/* Different background color for category */
`;
