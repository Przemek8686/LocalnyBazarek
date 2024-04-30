// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import {ModalBackground, ModalContent,ModalButtonContainer,ModalButton} from "./styled"



const ConfirmationModal = ({ onCancel, onConfirm }) => {
    return (
      <ModalBackground>
        <ModalContent>
          <p>Czy na pewno chcesz usunąć ofertę?</p>
          <ModalButtonContainer>
            <ModalButton onClick={onCancel}>Anuluj</ModalButton>
            <ModalButton primary onClick={onConfirm}>Usuń</ModalButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalBackground>
    );
  };
  
  export default ConfirmationModal;