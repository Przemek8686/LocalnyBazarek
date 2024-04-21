import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Container, Login, Logo, LoginForm, WelcomeMessage, Input, Button, Loading, LogoContainer, Title } from './styled';
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

  return (
    <Container>
      <Login>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <Title>Lokalny Bazarek</Title>
        </LogoContainer>
        <LoginForm>
          {user ? (
            <WelcomeMessage>
              Zalogowany jako: {user.email}
              <Button onClick={() => auth.signOut()}>Wyloguj się</Button>
            </WelcomeMessage>
          ) : (
            <>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          />
          <Button type="submit">Zresetuj hasło</Button>
          {resetPasswordSent && <p>Email z resetowaniem hasła został wysłany na podany adres.</p>}
        </LoginForm>
      </Login>
    </Container>
  );
};

export default LoginPage;
