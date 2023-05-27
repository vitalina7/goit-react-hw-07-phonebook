
import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Button } from './Phonebook.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/Selectors';
import { useDispatch,useSelector } from 'react-redux';

export const Phonebook = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };
    
    const isItInContact = contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase());
    if (isItInContact) {
      alert(`${contact.name} ia already in contacts`)
    }
    dispatch(addContact(contact));
    e.currentTarget.reset()
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        
  
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type='submit'>Add contacts</Button>
      </form>
    </div>
  );
};


