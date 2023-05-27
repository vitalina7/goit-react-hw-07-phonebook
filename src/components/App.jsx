import React from 'react';
import { Phonebook } from './Phonebook';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title,Container } from './Phonebook.styled';

export const App=() => {

    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook />
        <Title >Contacts</Title>
        <Filter  />
        <ContactList/>
      </Container>
    );
  }

  
