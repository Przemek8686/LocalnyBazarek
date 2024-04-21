import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 45px;
  margin: 20px 15px;
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

export const ProductTile = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: relative;
  height: 400px; /* Stała wysokość dla kafelka */

  &:hover {
    transform: scale(1.05);
  }
`;

export const UserProfile = styled.div`
  position: absolute;
  margin-bottom: 10px; /* Przesunięcie na sam dół */
  left: 3px; /* Przesunięcie na lewo */
  display: flex;
  flex-direction: column; /* Układ pionowy */
  margin-top:20px;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-bottom: 5px; /* Odstęp między obrazkiem użytkownika a nazwą użytkownika */
`;

export const UserName = styled.span`
  font-size: 0.8em;
`;

export const ProductImageContainer = styled.div`
  width: 100%; /* Stała szerokość kontenera */
  height: 200px; /* Stała wysokość kontenera */
  overflow: hidden; /* Zapobiega wyjściu zdjęć poza kontener */
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductTitle = styled.h2`
  font-size: 1.2em;
  margin: 0.5em 0;
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

export const ProductUnit = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

export const ContactInfo = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`;

export const AdditionalInfo = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`;

export const LocationInfo = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  padding: 0.5em;
  margin: 0 auto;
  border: 3px solid #1f5156;
  border-radius: 20px;
  margin-top: 10px;
  width: 330px;
  height: 20px;
  display: block;
`;
