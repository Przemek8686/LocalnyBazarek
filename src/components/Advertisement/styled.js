import styled from 'styled-components';

// Styled components for Advertisement
export const AdvertisementContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const AdTile = styled.a`
  width: 400px;
  height: 200px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 300px;
    margin: 20px auto;
  }
`;

export const AdImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: filter 0.2s;

  ${AdTile}:hover & {
    filter: brightness(70%);
  }
`;
