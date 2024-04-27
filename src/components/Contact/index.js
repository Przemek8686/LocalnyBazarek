// Contact.js

import React from 'react';
import { ContactContainer, ContactBox, ContactInfo, Logo, ContactDetails } from './styled';
import logo from '../../Images/logo2.png';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactBox>
        <Logo src={logo} alt="Logo" />
        <ContactInfo>
          <h2>Dane kontaktowe</h2>
          <ContactDetails>
            <p>Imię i nazwisko: Jan Kowalski</p>
            <p>Email: jan.kowalski@example.com</p>
            <p>Numer telefonu: +48 123 456 789</p>
          </ContactDetails>
        </ContactInfo>
      </ContactBox>
    </ContactContainer>
  );
};

export default Contact;
