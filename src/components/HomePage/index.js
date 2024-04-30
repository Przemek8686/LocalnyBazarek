import React, { useEffect, useState, useCallback } from "react";
import { db } from "../FirebaseConfig";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { SearchInput, ProductGrid, ProductTile, ProductImageContainer, ProductImage, ProductTitle, ProductPrice, ProductUnit, UserProfile, UserImage, UserName, ContactInfo, AdditionalInfo, LocationInfo, Button } from "./styled";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import ConfirmationModal from "../ConfirmationModal";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const auth = getAuth();

  const filterProducts = useCallback((productsData) => {
    const filtered = productsData.filter(product =>
      (product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.userName && product.userName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.location && product.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productsData = [];

      querySnapshot.forEach((doc) => {
        productsData.push({ ...doc.data(), id: doc.id });
      });

      setProducts(productsData);
      filterProducts(productsData);
    });

    return () => unsubscribe();
  }, [filterProducts]);

  const handleSearch = (event) => {
    event.preventDefault();
    filterProducts(products);
  };

  const handleDeleteConfirmation = (productId) => {
    setShowModal(true);
    setDeleteProductId(productId);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteProductId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteDoc(doc(db, "products", deleteProductId));
      console.log("Document successfully deleted!");
      setShowModal(false);
      setDeleteProductId(null);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Szukaj po nazwie, kategorii, użytkowniku, lokalizacji..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <ProductGrid>
        {filteredProducts.map((product) => (
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
                <ProductUnit>Waga:{product.unit}</ProductUnit>
                <UserProfile>
                  <UserImage src={product.userImage} alt={product.userName} />
                  <UserName>{product.userName}</UserName>
                </UserProfile>
                <ContactInfo>Kontakt: {product.contact}</ContactInfo>
                <AdditionalInfo>Kategoria: {product.category}</AdditionalInfo>
                <LocationInfo>Lokalizacja: {product.location}</LocationInfo>
              
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

export default HomePage;
