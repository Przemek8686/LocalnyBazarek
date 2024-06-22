import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin: 20px 15px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductTile = styled.div`
  position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 480px;
  border: 4px solid #1f5156;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    &:hover::before {
      opacity: 2;
    }
  }
`;

export const ProductImageContainer = styled.div`
 width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  
   
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: red;
  font-weight: bold;
`;

export const ProductUnit = styled.p`
  font-size: 14px;
  margin: 5px 0;
 
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #1f5156; 
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const ContactInfo = styled.p`
 font-size: 0.8em;
  font-weight: bold;
  margin: 5px 0;
`;

export const AdditionalInfo = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const LocationInfo = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const Voivodeship = styled.p`
  font-size: 14px;
  margin: 5px 0;
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
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1f5156;
  color: white;
  border: 3px solid white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 25%;
  margin-left:90px;
  transition-duration: 0.4s;
  margin-bottom: 40px;
  border-radius: 12px;
  margin-top:12px;

  &:hover {
    background-color: #378d95;
    color: white;
    border: 2px solid #4caf50;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const OptionIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`;
