import styled from 'styled-components';

export const BlogContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f9f9f9;
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
  width: 100px;
  height: auto;
margin-bottom:3px;
`;
export const Subtitle = styled.h2`
  font-size: 1.0em;
  font-weight: normal;
  margin-top: -10px;
  color: #1f5156;
  font-weight: bold;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1f5156;
  margin-top: 5px; /* Zmieniony margines */

  @media screen and (max-width: 400px) {
    font-size: 1.2em;
    margin-top: 3px;
  }
`;