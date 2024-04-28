import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Zmniejszenie wysokości kontenera */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 315px; /* Zmniejszenie szerokości formularza */
  height: 650px; /* Zmniejszenie wysokości formularza */
  border: 2px solid #1f5156;
  border-radius: 8px; /* Zmniejszenie promienia zaokrąglenia */
  padding: 16px; /* Zmniejszenie wewnętrznego marginesu */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Zmniejszenie rozmycia cienia */
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-top: 150px; /* Zmniejszenie odstępu od góry */
`;
export const CheckIcon = styled.span`
  margin-left: 5px; 
`;
export const Input = styled.input`
  margin-bottom: 8px; /* Zmniejszenie odstępu między elementami */
  padding: 8px; /* Zmniejszenie wewnętrznego marginesu */
  width: 100%;
  border: 1px solid #1f5156; /* Zmniejszenie grubości obramowania */
  border-radius: 4px; /* Zmniejszenie promienia zaokrąglenia */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); /* Zmniejszenie rozmycia cienia */
  font-size: 14px; /* Zmniejszenie rozmiaru czcionki */
`;

export const TextArea = styled.textarea`
  margin-bottom: 8px; /* Zmniejszenie odstępu między elementami */
  padding: 8px; /* Zmniejszenie wewnętrznego marginesu */
  width: 100%;
  height: 80px; /* Zmniejszenie wysokości pola tekstowego */
  border: 1px solid #1f5156; /* Zmniejszenie grubości obramowania */
  border-radius: 4px; /* Zmniejszenie promienia zaokrąglenia */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); /* Zmniejszenie rozmycia cienia */
  font-size: 14px; /* Zmniejszenie rozmiaru czcionki */
`;

export const Button = styled.button`
  padding: 8px 16px; /* Zmniejszenie wewnętrznego marginesu */
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
  margin-top: 16px; /* Zmniejszenie odstępu od góry */
  border: 14px solid #f3f3f3; /* Zmniejszenie grubości obramowania */
  border-top: 14px solid #3498db; /* Zmniejszenie grubości obramowania */
  border-radius: 50%;
  width: 26px; /* Zmniejszenie szerokości */
  height: 26px; /* Zmniejszenie wysokości */
  animation: ${rotate} 2s linear infinite;
`;

export const Logo = styled.img`
  width: 80px; /* Zmniejszenie szerokości logo */
  height: auto;
  margin-bottom: 8px; /* Zmniejszenie marginesu od dołu */
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px; /* Zmniejszenie marginesu od dołu */
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

export const CategorySelect = styled.select`
  margin-bottom: 8px; /* Zmniejszenie odstępu między elementami */
  padding: 8px; /* Zmniejszenie wewnętrznego marginesu */
  width: 100%;
  border: 1px solid #1f5156; /* Zmniejszenie grubości obramowania */
  border-radius: 4px; /* Zmniejszenie promienia zaokrąglenia */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1); /* Zmniejszenie rozmycia cienia */
  font-size: 14px; /* Zmniejszenie rozmiaru czcionki */
  background-color: #f5b921; /* Zmiana koloru tła */
`;
