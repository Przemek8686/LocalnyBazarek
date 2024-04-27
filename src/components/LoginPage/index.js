import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Container, Login, Logo,Button2, LoginTitle, LoginForm, WelcomeMessage, Input, Button, Loading, LogoContainer, Title } from './styled';
import logo from "../../Images/logo2.png";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetPasswordSent, setResetPasswordSent] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Reset email and password fields after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Nieprawidłowy email lub hasło.');
    }
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetPasswordSent(true);
    } catch (error) {
      setError('Błąd podczas wysyłania emaila resetującego hasło.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      // Reset email and password fields after logout
      setEmail('');
      setPassword('');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <Container>
      <Login>
        <LoginTitle>Logowanie Profilu</LoginTitle>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <Title>Lokalny Bazarek</Title>
        </LogoContainer>
        <LoginForm>
          {user ? (
            <WelcomeMessage>
              Zalogowany jako: {user.email}
              <Button2 onClick={handleLogout}>Wyloguj się</Button2>
            </WelcomeMessage>
          ) : (
            <>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off" // Disable auto-fill
              />
              <Input
                type="password"
                placeholder="Hasło min. 6 znaków"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off" // Disable auto-fill
              />
              {loading ? (
                <Loading />
              ) : (
                <>
                  <Button onClick={handleLogin}>Zaloguj się</Button>
                  {error && <p>{error}</p>}
                </>
              )}
            </>
          )}
        </LoginForm>
        <LoginForm onSubmit={handleResetPassword}>
          <Input
            type="email"
            placeholder="Email do resetu hasła"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            autoComplete="off" // Disable auto-fill
          />
          <Button type="submit">Zresetuj hasło</Button>
          {resetPasswordSent && <p>Email z resetowaniem hasła został wysłany na podany adres.</p>}
        </LoginForm>
      </Login>
    </Container>
  );
};

export default LoginPage;
