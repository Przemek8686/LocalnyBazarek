import React from "react";
import { useParams } from "react-router-dom";
import {OfferDetailsContainer,OfferTitle,OfferImage,OfferDescription,StyledInfo,UserContainer,UserImage,UserName} from "./styled";
import { db } from "../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";



const OfferDetailsPage = () => {
  const { id } = useParams();

  const [offerDetails, setOfferDetails] = React.useState(null);

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
          <OfferImage src={offerDetails.imageUrl} alt={offerDetails.title} />
          <OfferDescription>{offerDetails.description}</OfferDescription>
          <StyledInfo>Price: {offerDetails.price}</StyledInfo>
          <StyledInfo>Unit: {offerDetails.unit}</StyledInfo>
          <StyledInfo>Contact: {offerDetails.contact}</StyledInfo>
          <StyledInfo>Category: {offerDetails.category}</StyledInfo>
          <StyledInfo>Location: {offerDetails.location}</StyledInfo>
          <UserContainer>
            <UserImage src={offerDetails.userImage} alt={offerDetails.userName} />
            <UserName>{offerDetails.userName}</UserName>
          </UserContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </OfferDetailsContainer>
  );
};

export default OfferDetailsPage;
