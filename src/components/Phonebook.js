
import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Button } from './Phonebook.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/Selectors';
import { useDispatch,useSelector } from 'react-redux';

export const Phonebook = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

   const handleSubmit = event => {
    event.preventDefault(); 

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

   
    if (isExist) {
      return alert(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact)); 
    event.currentTarget.reset(); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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


