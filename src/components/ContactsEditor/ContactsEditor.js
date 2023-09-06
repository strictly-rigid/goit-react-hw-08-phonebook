import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactsEditor.module.css';
import { FormControl, InputLabel, Input, Button, Box } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const ContactsEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: name,
      number: number,
    };

    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This contact already exists!');
    } else {
      dispatch(addContact(newContact));

      setName('');
      setNumber('');
      return;
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <FormControl sx={{ margin: '40px 0 ' }}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>

      <FormControl sx={{ margin: '40px 0 ' }}>
        <InputLabel htmlFor="number">Number</InputLabel>
        <Input
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <FormControl sx={{ margin: '30px 0 ' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<PersonAddIcon />}
          sx={{ height: '50px', marginLeft: '15px' }}
        >
          Add contact
        </Button>
      </FormControl>
    </form>
  );
};
