import React from "react";
import { useParams } from "react-router-dom";
import { OfferDetailsContainer, OfferTitle, OfferImage, OfferDescription, StyledInfo, UserContainer, UserImage, UserName, Modal, ModalContent, CloseButton } from "./styled";
import { db } from "../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const OfferDetailsPage = () => {
  const { id } = useParams();

  const [offerDetails, setOfferDetails] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchOfferDetails = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOfferDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchOfferDetails();
  }, [id]);

  return (
    <OfferDetailsContainer>
      {offerDetails ? (
        <>
          <OfferTitle>{offerDetails.title}</OfferTitle>
          {offerDetails.imageUrl && (
            <OfferImage
              src={offerDetails.imageUrl}
              alt={offerDetails.title}
              onClick={() => setModalOpen(true)}
            />
          )}
          <OfferDescription>{offerDetails.description}</OfferDescription>
          <StyledInfo>Price: {offerDetails.price}</StyledInfo>
          <StyledInfo>Unit: {offerDetails.unit}</StyledInfo>
          <StyledInfo>Contact: {offerDetails.contact}</StyledInfo>
          <StyledInfo>Category: {offerDetails.category}</StyledInfo>
          <StyledInfo>Location: {offerDetails.location}</StyledInfo>
          <UserContainer>
            {offerDetails.userImage && (
              <UserImage src={offerDetails.userImage} alt={offerDetails.userName} />
            )}
            <UserName>{offerDetails.userName}</UserName>
          </UserContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Modal modalOpen={modalOpen} onClick={() => setModalOpen(false)}>
        {offerDetails && offerDetails.imageUrl && ( // Sprawdzenie, czy offerDetails i jego właściwość imageUrl istnieją
          <ModalContent>
            <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
            <OfferImage src={offerDetails.imageUrl} alt={offerDetails.title} />
          </ModalContent>
        )}
      </Modal>
    </OfferDetailsContainer>
  );
};

export default OfferDetailsPage;
