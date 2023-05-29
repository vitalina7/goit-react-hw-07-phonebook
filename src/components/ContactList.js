import React from 'react';
import { ContactsList, ContactItem, Button } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/Selectors';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found.</p>
      )}

      {error && <p>{error}</p>}
      <p></p>

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <p>
            {name}: {phone}
          </p>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

