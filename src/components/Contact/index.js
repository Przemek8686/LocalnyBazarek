import React from 'react';
import { ContactContainer, ContactInformation, ContactBox, Title, ContactInfo, Logo, ContactDetails, SocialIcons, LogoContainer,Subtitle } from './styled';
import logo from '../../Images/logo2.png';
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'; // Importuj ikony z biblioteki react-icons

const Contact = () => {
  return (
    <ContactContainer>
      <ContactBox>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <Title>Lokalny Bazarek</Title>
          <Subtitle>Powiat słupecki</Subtitle>
        </LogoContainer>
        <ContactInfo>
          <ContactInformation>Kontakt</ContactInformation>
          <ContactDetails>
           
            <p>Email: lokalnybazarek@gmail.com</p>
           
          </ContactDetails>
          <SocialIcons>
            {/* Ikony będące linkami do profili na różnych platformach */}
            <a href="https://www.facebook.com/twojprofil" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@twojprofil" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>

            <a href="https://www.youtube.com/twojkanal" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            {/* Dodaj kolejne ikony jak Gmail, Twitter, etc. */}
          </SocialIcons>
        </ContactInfo>
      </ContactBox>
    </ContactContainer>
  );
};

export default Contact;
