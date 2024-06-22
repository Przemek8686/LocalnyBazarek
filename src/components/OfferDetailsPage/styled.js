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

  @media screen and (max-width: 768px) {
    /* Style changes for smaller screens */
    padding: 10px;
    border-width: 2px;
    border-radius: 8px;
    max-width: 314px;
  }

  @media screen and (max-width: 400px) {
    /* Further style changes for very small screens */
    padding: 10px;
    border-width: 1px;
    border-radius: 6px;
    max-width: 314px;
    
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
    margin-bottom: 10px;
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

export const StyledInfo = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 5px 0;
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
  border: 2px solid black; /* Added black border */

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    width: 40px;
    height: 40px;
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
export const UserName = styled.span`
  font-size: 1.2em;
  font-weight: bold;

  
  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    font-size: 1.1em;
  }
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

  @media screen and (max-width: 400px) {
    /* Style changes for very small screens */
    padding: 6px;
    width: 100%;
  }
`;

export const ModalContent = styled.div`
  display: block;
  margin: auto;
  
  padding: 20px; /* Increase padding for a larger look */
  width: 85%; /* Increase the width slightly */
  max-width: 600px; /* Increase max-width for a larger modal */
  background-color: #fff; /* Ensure a background color for the modal content */
  border-radius: 10px; /* Optional: add some rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visibility */

  /* Center the modal vertically and horizontally */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
