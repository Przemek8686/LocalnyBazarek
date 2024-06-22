import React from "react";
import { useParams } from "react-router-dom";
import {
  OfferDetailsContainer,
  OfferTitle,
  OfferImage,
  OfferDescription,
  StyledInfo,
  UserContainer,
  UserImage,
  UserName,
  Modal,
  ModalContent,
  CloseButton,
  OptionsContainer,
  OptionIcon
} from "./styled";
import { db } from "../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import BioIcon from "../../Images/bio.png";
import DeliveryIcon from "../../Images/dowoz.png";
import CourierIcon from "../../Images/truck.png";
import PickupIcon from "../../Images/person.png";

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
          <StyledInfo>Cena: {offerDetails.price} zł</StyledInfo>
          <StyledInfo>Waga: {offerDetails.unit}</StyledInfo>
          <StyledInfo>Kontakt: {offerDetails.contact}</StyledInfo>
          <StyledInfo>Kategoria: {offerDetails.category}</StyledInfo>
          <StyledInfo>Lokalizacja: {offerDetails.location}</StyledInfo>
          <StyledInfo>Województwo: {offerDetails.voivodeship} </StyledInfo>
          <UserContainer>
            {offerDetails.userImage && (
              <UserImage src={offerDetails.userImage} alt={offerDetails.userName} />
            )}
            <UserName>{offerDetails.userName}</UserName>
          </UserContainer>
          <OptionsContainer>
            {offerDetails.bio && <OptionIcon src={BioIcon} alt="Produkt Bio" />}
            {offerDetails.localDelivery && <OptionIcon src={DeliveryIcon} alt="Dowóz w okolicy" />}
            {offerDetails.courierDelivery && <OptionIcon src={CourierIcon} alt="Wysyłka kurierem" />}
            {offerDetails.pickup && <OptionIcon src={PickupIcon} alt="Odbiór osobiście" />}
          </OptionsContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Modal modalOpen={modalOpen} onClick={() => setModalOpen(false)}>
        {offerDetails && offerDetails.imageUrl && (
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
