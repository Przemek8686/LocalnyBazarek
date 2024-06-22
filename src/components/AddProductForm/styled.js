import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width:340px;
  height:650px;
  border: 2px solid #1f5156;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding:16px;
  background-color: white;
  font-weight: bold;
  margin-top: 100px; 
  
`;

export const CheckIcon = styled.span`
  color: green;
  font-size: 24px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px; /* Zmniejszenie marginesu od dołu */
`;

export const Logo = styled.img`
  width: 100px; /* Zmniejszenie szerokości logo */
  height: auto;
  margin-bottom:0px; /* Zmniejszenie marginesu od dołu */
  `;

  export const Title = styled.h1`
  font-size: 1.3em; /* Zmniejszenie rozmiaru czcionki */
  text-align: center;
  color: #1f5156;
  margin-top: 0; /* Usunięcie marginesu od góry */
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  font-weight: bold;
  font-size: 16px; /* Zmniejszenie rozmiaru czcionki */
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 2s linear infinite;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom:4px;
  border: 2px solid #1f5156;
  border-radius: 4px;
  width: 100%;
   box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); 
    font-size: 14px;
`;

export const TextArea = styled.textarea`
    margin-bottom: 3px; /* Zmniejszenie odstępu między elementami */
  padding: 8px; /* Zmniejszenie wewnętrznego marginesu */
  width: 100%;
  height: 80px; /* Zmniejszenie wysokości pola tekstowego */
  border: 1px solid #1f5156; /* Zmniejszenie grubości obramowania */
  border-radius: 4px; /* Zmniejszenie promienia zaokrąglenia */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); /* Zmniejszenie rozmycia cienia */
  font-size: 14px; /* Zmniejszenie rozmiaru czcionki */
`;

export const CategorySelect = styled.select`
  margin-bottom: 5px; /* Zmniejszenie odstępu między elementami */
  padding: 8px; /* Zmniejszenie wewnętrznego marginesu */
  width: 100%;
  border: 1px solid #1f5156; /* Zmniejszenie grubości obramowania */
  border-radius: 4px; /* Zmniejszenie promienia zaokrąglenia */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); /* Zmniejszenie rozmycia cienia */
  font-size: 14px; /* Zmniejszenie rozmiaru czcionki */
  background-color: #f5b921; /* Zmiana koloru tła */
`;

export const Button = styled.button`
  padding: 8px 5px; /* Zmniejszenie wewnętrznego marginesu */
  background-color: #1f5156;
  color: #f5b921;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px; /* Zmniejszenie rozmiaru czcionki */
  margin: 6px 2px; /* Zmniejszenie marginesu między przyciskami */
  transition-duration: 0.4s;
  border-radius: 8px; /* Zmniejszenie promienia zaokrąglenia */
  margin-top:2px;

  &:hover {
    background-color: #378d95;
    color: white;
    border: 2px solid #4caf50;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction:reverse;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 10px;

  input {
    margin-right: 5px;
  }
`;
