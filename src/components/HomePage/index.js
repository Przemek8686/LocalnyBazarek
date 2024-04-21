import React, { useEffect, useState } from "react";
import { db } from "../FirebaseConfig";
import { collection, query, orderBy, onSnapshot,  deleteDoc, doc } from "firebase/firestore"; // Import deleteDoc i doc
import {
  SearchInput,
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
  Button, // Dodaj Button
} from "./styled";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth"; // Import getAuth

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const auth = getAuth(); // Pobierz obiekt autoryzacji

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productsData = [];

      querySnapshot.forEach((doc) => {
        productsData.push({ ...doc.data(), id: doc.id });
      });

      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          (product.title &&
            product.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (product.category &&
            product.category.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : products;

  const handleDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Szukaj produktu lub kategorii..."
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
                <ProductPrice>{product.price}</ProductPrice>
                <ProductUnit>{product.unit}</ProductUnit>
                <UserProfile>
                  <UserImage src={product.userImage} alt={product.userName} />
                  <UserName>{product.userName}</UserName>
                </UserProfile>
                <ContactInfo>Contact: {product.contact}</ContactInfo>
                <AdditionalInfo>Category: {product.category}</AdditionalInfo>
                <LocationInfo>Location: {product.location}</LocationInfo>
              </ProductTile>
            </Link>
            {/* Dodaj przycisk usuwania tylko dla zalogowanego użytkownika */}
            {auth.currentUser && auth.currentUser.displayName === product.userName && (
              <Button onClick={() => handleDelete(product.id)}>Usuń ofertę</Button>
              )}

              
          </div>
        ))}
      </ProductGrid>
    </>
  );
};

export default HomePage;
