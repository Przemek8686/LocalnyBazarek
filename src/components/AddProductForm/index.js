import React, { useState } from "react";
import { db, storage } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { Container, Form, CheckIcon, LogoContainer, Logo, Title, SuccessMessage, Loading, Input, TextArea, CategorySelect, Button, CheckboxLabel, CheckboxContainer } from "./styled";
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
  const [voivodeship, setVoivodeship] = useState("");
  const [bio, setBio] = useState(false);
  const [localDelivery, setLocalDelivery] = useState(false);
  const [courierDelivery, setCourierDelivery] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title || !image || !category || !location || !voivodeship) {
      setLoading(false);
      return;
    }

    try {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);

      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "products"), {
        title,
        description,
        price,
        unit,
        imageUrl,
        contact,
        category,
        location,
        voivodeship,
        bio,
        localDelivery,
        courierDelivery,
        pickup,
        createdAt: new Date(),
        userName: auth.currentUser.displayName,
        userImage: auth.currentUser.photoURL,
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
    setVoivodeship("");
    setImage(null);
    setBio(false);
    setLocalDelivery(false);
    setCourierDelivery(false);
    setPickup(false);
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
            Oferta dodana <CheckIcon>&#10004;</CheckIcon>
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
              <option value="inne">inne</option>
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
              <option value="rękodzieło">Rękodzieło</option>
              <option value="nabiał">Nabiał</option>
              <option value="drewno">Drewno</option>
              <option value="wyroby mięsne">Wyroby mięsne</option>
              <option value="pozostałe">Pozostałe</option>
            </CategorySelect>
            <Input
              type="text"
              placeholder="Lokalizacja"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <CategorySelect
              value={voivodeship}
              onChange={(e) => setVoivodeship(e.target.value)}
            >
              <option value="">Wybierz województwo</option>
              <option value="dolnośląskie">Dolnośląskie</option>
              <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
              <option value="lubelskie">Lubelskie</option>
              <option value="lubuskie">Lubuskie</option>
              <option value="łódzkie">Łódzkie</option>
              <option value="małopolskie">Małopolskie</option>
              <option value="mazowieckie">Mazowieckie</option>
              <option value="opolskie">Opolskie</option>
              <option value="podkarpackie">Podkarpackie</option>
              <option value="podlaskie">Podlaskie</option>
              <option value="pomorskie">Pomorskie</option>
              <option value="śląskie">Śląskie</option>
              <option value="świętokrzyskie">Świętokrzyskie</option>
              <option value="warmińsko-mazurskie">Warmińsko-Mazurskie</option>
              <option value="wielkopolskie">Wielkopolskie</option>
              <option value="zachodniopomorskie">Zachodniopomorskie</option>
            </CategorySelect>
            <CheckboxContainer>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={bio}
                  onChange={(e) => setBio(e.target.checked)}
                />
                Produkt Bio
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={localDelivery}
                  onChange={(e) => setLocalDelivery(e.target.checked)}
                />
                Dowóz w okolicy
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={courierDelivery}
                  onChange={(e) => setCourierDelivery(e.target.checked)}
                />
                Wysyłka kurierem
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={pickup}
                  onChange={(e) => setPickup(e.target.checked)}
                />
                Odbiór osobiście
              </CheckboxLabel>
            </CheckboxContainer>
            <Button type="submit">Dodaj produkt</Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default AddProductForm;
