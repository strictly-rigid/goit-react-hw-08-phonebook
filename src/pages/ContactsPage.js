import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsEditor } from 'components/ContactsEditor/ContactsEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';
import { Input, Typography } from '@mui/material';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value)); // Dispatch the setFilter action with the new filter value
  };

  return (
    <>
      <ContactsEditor />
      <Typography variant="h4" sx={{ margin: '20px 0 ' }}>
        Your Contacts
      </Typography>

      <Input
        type="text"
        name="filter"
        placeholder="Search contacts by name"
        onChange={handleFilterChange}
      />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
