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
  margin: 10px 25%;
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
  position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 435px;
  border: 4px solid #1f5156;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
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
      opacity: 1;
    }
  }
`;


export const UserProfile = styled.div`
  position: absolute;
  margin-bottom: 10px;
  left: 6px;
  display: flex;
  flex-direction: row;
  margin-top:60px;
  font-weight: bold;
`;

export const UserImage = styled.img`
width: 30px;
height: 27px;
  border-radius: 50%;
  margin-bottom: 5px;

`;

export const UserName = styled.span`
  font-size: 1.1em;
  margin-left:5px;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Dostosowanie obrazu do wymiarów kontenera */
`;

export const ProductTitle = styled.h2`
  font-size: 1.2em;
  margin: 0.5em 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.0em;
  font-weight: bold;
  color:red;
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

