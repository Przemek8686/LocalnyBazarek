import styled from "styled-components";

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
`;

export const OfferImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
  border: 4px solid #1f5156;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
`;

export const OfferTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const OfferDescription = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledInfo = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 5px 0;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Modal = styled.div`
  display: ${(props) => (props.modalOpen ? "block" : "none")};
  position: fixed;
  z-index: 999;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 548px;
  border: 1px solid #888;
  background-color: #fefefe;
  padding: 9px;
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
`;
