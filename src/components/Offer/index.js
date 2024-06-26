import React, { useEffect, useState } from "react";
import { db, auth } from "../FirebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

import {
  ProductGrid,
  ProductTile,
  ProductImageContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductUnit,
  UserProfile,
  UserImage,
  UserName,
  ContactInfo,
  AdditionalInfo,
  LocationInfo,
  Voivodeship,
  SearchInput,
  Button,
  OptionsContainer,
  OptionIcon,
  IconImage,
  IconsContainer,
  IconWithDescription,
  IconDescription
} from "./styled";

import ConfirmationModal from "../ConfirmationModal";
import BioIcon from "../../Images/bio.png";
import DeliveryIcon from "../../Images/dowoz.png";
import CourierIcon from "../../Images/truck.png";
import PickupIcon from "../../Images/person.png";

const Offer = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleDeleteConfirmation = (id) => {
    setProductIdToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (productIdToDelete) {
      await deleteDoc(doc(db, "products", productIdToDelete));
      setProducts(products.filter((product) => product.id !== productIdToDelete));
      setShowModal(false);
      setProductIdToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setProductIdToDelete(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.voivodeship.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <>
       <IconsContainer>
        <IconWithDescription>
          <IconImage src={BioIcon} alt="Produkt Bio" />
          <IconDescription>Produkt Bio</IconDescription>
        </IconWithDescription>
        <IconWithDescription>
          <IconImage src={DeliveryIcon} alt="Dowóz w okolicy" />
          <IconDescription>Dowóz w okolicy</IconDescription>
        </IconWithDescription>
        <IconWithDescription>
          <IconImage src={CourierIcon} alt="Wysyłka kurierem" />
          <IconDescription>Wysyłka kurierem</IconDescription>
        </IconWithDescription>
        <IconWithDescription>
          <IconImage src={PickupIcon} alt="Odbiór osobiście" />
          <IconDescription>Odbiór osobiście</IconDescription>
        </IconWithDescription>
      </IconsContainer>


      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Szukaj nazwa, kategoria, użytkownik, lokalizacja itd."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <ProductGrid>
        {products.map((product) => (
          <div key={product.id}>
            <Link
              to={`/offer/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductTile>
                <ProductImageContainer>
                  <ProductImage src={product.imageUrl} alt={product.title} />
                </ProductImageContainer>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>Cena: {product.price} zł</ProductPrice>
                <ProductUnit>Waga: {product.unit}</ProductUnit>
                <ContactInfo>Kontakt: {product.contact}</ContactInfo>
                <AdditionalInfo>Kategoria: {product.category}</AdditionalInfo>
                <LocationInfo>Lokalizacja: {product.location}</LocationInfo>
                <Voivodeship>Województwo: {product.voivodeship}</Voivodeship>
                <UserProfile>
                  <UserImage src={product.userImage} alt={product.userName} />
                  <UserName>{product.userName}</UserName>
                </UserProfile>
                <OptionsContainer>
                  {product.bio && <OptionIcon src={BioIcon} alt="Produkt Bio" />}
                  {product.localDelivery && <OptionIcon src={DeliveryIcon} alt="Dowóz w okolicy" />}
                  {product.courierDelivery && <OptionIcon src={CourierIcon} alt="Wysyłka kurierem" />}
                  {product.pickup && <OptionIcon src={PickupIcon} alt="Odbiór osobiście" />}
                </OptionsContainer>
              </ProductTile>
            </Link>
            {auth.currentUser && auth.currentUser.displayName === product.userName && (
              <Button onClick={() => handleDeleteConfirmation(product.id)}>Usuń Ofertę</Button>
            )}
          </div>
        ))}
      </ProductGrid>
      {showModal && (
        <ConfirmationModal onCancel={handleCancelDelete} onConfirm={handleConfirmDelete} />
      )}
    </>
  );
};

export default Offer;
