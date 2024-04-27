import React, { useState } from "react";
import { db, storage } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Import getAuth

import { Container, Form, LogoContainer, Logo, Title, SuccessMessage, Loading, Input, TextArea, CategorySelect, Button } from "./styled";
import logo from "../../Images/logo2.png";

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState(null);
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const auth = getAuth(); // Pobierz obiekt autoryzacji

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title || !image || !category || !location) {
      setLoading(false);
      return;
    }

    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);

      const imageUrl = await getDownloadURL(imageRef);

      // Dodaj ofertę z informacją o użytkowniku
      await addDoc(collection(db, "products"), {
        title,
        description,
        price,
        unit,
        imageUrl,
        contact,
        category,
        location,
        createdAt: new Date(),
        userName: auth.currentUser.displayName, // Dodaj nazwę użytkownika
        userImage: auth.currentUser.photoURL, // Dodaj zdjęcie użytkownika
      });

      resetForm();
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setUnit("");
    setContact("");
    setCategory("");
    setLocation("");
    setImage(null);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <Title>Lokalny Bazarek</Title>
        </LogoContainer>
        {success ? (
          <SuccessMessage>
            Oferta dodana <span>&#10004;</span>
          </SuccessMessage>
        ) : loading ? (
          <Loading />
        ) : (
          <>
            <Input
              type="text"
              placeholder="Tytuł"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
              placeholder="Opis"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Cena"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <CategorySelect value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="">Wybierz jednostkę wagi</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="szt">szt</option>
              <option value="ml">ml</option>
              <option value="l">l</option>
            </CategorySelect>
            <Input
              type="text"
              placeholder="Kontakt"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <CategorySelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Wybierz kategorię</option>
              <option value="owoce">Owoce</option>
              <option value="warzywa">Warzywa</option>
              <option value="przetwory">Przetwory</option>
              <option value="wypieki">Wypieki</option>
              <option value="rośliny ozdobne">Rośliny ozdobne</option>
              <option value="pozostale">Pozostałe</option>
            </CategorySelect>
            <Input
              type="text"
              placeholder="Lokalizacja"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button type="submit">Dodaj produkt</Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default AddProductForm;
