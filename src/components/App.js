// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import Navigation from "./Navigation"; // Import Navigation
import backgroundImage from '../Images/obraz.jpg'; // Import your image

// Import your components
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AddOfferPage from './AddProductForm';
import HomePage from './HomePage';
import OfferDetailsPage from './OfferDetailsPage'; // New import


// Inicjalizacja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZ_XzrJsGQWKLjXYnwObhxooC70hwvJHM",
  authDomain: "lokalnybazarek-2f47c.firebaseapp.com",
  projectId: "lokalnybazarek-2f47c",
  storageBucket: "lokalnybazarek-2f47c.appspot.com",
  messagingSenderId: "233238280173",
  appId: "1:233238280173:web:2efa4984fa1d50841559e4",
  measurementId: "G-6V0SCP5TVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const GlobalStyles = createGlobalStyle`
  body {
    background: url(${backgroundImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

const App = () => (
  <Router>
    <GlobalStyles />
   
      <Navigation />
      <Routes>
       
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-offer" element={<AddOfferPage />} />
        <Route path="/offer/:id" element={<OfferDetailsPage />} /> 
        <Route path="/" element={<HomePage />} />
      </Routes>
    
  </Router>
);

export default App;
