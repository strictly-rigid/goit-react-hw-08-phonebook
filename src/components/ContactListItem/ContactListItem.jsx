// import css from '../Contacts/Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListItemText primary={`${contact.name} : ${contact.number}`} />
      <ListItemSecondaryAction>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          sx={{
            backgroundColor: '#D11A2A',
            '&:hover': {
              backgroundColor: '#FF0000',
            },
          }}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ContactListItem;
