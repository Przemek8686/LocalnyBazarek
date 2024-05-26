export const OfferDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 4px solid #1f5156;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
  height: auto;

  @media screen and (max-width: 768px) {
    /* Style changes for smaller screens */
    padding: 15px;
    border-width: 2px;
    border-radius: 8px;
    max-width: 335px;
  }

  @media screen and (max-width: 400px) {
    /* Further style changes for very small screens */
    padding: 10px;
    border-width: 1px;
    border-radius: 6px;
  }
`;

export const OfferImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
  border: 4px solid #1f5156;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 768px) {
    /* Style changes for smaller screens */
    max-width: 300px;
    margin-bottom: 15px;
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 400px) {
    /* Further style changes for very small screens */
    max-width: 250px;
    margin-bottom: 10px;
    border-width: 1px;
    border-radius: 6px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const OfferTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    font-size: 1.3em;
    margin-bottom: 8px;
  }
`;

export const OfferDescription = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    font-size: 1.1em;
    margin-bottom: 8px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    margin-top: 8px;
  }
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    width: 40px;
    height: 40px;
  }
`;

export const UserName = styled.span`
  font-size: 1.2em;
  font-weight: bold;

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    font-size: 1.1em;
  }
`;

export const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 548px;
  border: 1px solid #888;
  background-color: #fefefe;
  padding: 9px;

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    padding: 6px;
    width: 90%;
  }
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    font-size: 24px;
  }
`;
