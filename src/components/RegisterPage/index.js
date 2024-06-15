import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../FirebaseConfig';
import { Container, RegisterTitle, RegisterForm, Loading, WelcomeMessage, LogoContainer, Logo, Title, Input, Button } from "./styled";
import { useNavigate } from 'react-router-dom';
import logo from "../../Images/logo2.png";

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      let profilePicUrl = '';
      if (profilePic) {
        const profilePicRef = ref(storage, `profilePics/${profilePic.name}`);
        await uploadBytes(profilePicRef, profilePic);
        profilePicUrl = await getDownloadURL(profilePicRef);
      }

      await updateProfile(user, {
        displayName: username,
        photoURL: profilePicUrl,
      });

      setLoading(false);
      setRegistered(true);

      // Clear input values after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
      setProfilePic(null);

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error registering user: ', error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit}>
        {loading ? (
          <Loading />
        ) : registered ? (
          <WelcomeMessage>Witamy w "Lokalny Bazarek"</WelcomeMessage>
        ) : (
          <>
            <RegisterTitle>Rejestracja Profilu</RegisterTitle>
            <LogoContainer>
              <Logo src={logo} alt="Logo" />
              <Title>Lokalny Bazarek</Title>

            </LogoContainer>

            <Input
              type="text"
              placeholder="Nazwa Użytkownika"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="hasło min. 6 znaków"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Rejestracja</Button>
          </>
        )}
      </RegisterForm>
    </Container>
  );
};

export default RegisterPage;
