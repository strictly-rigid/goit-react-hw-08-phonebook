// import css from '../Contacts/Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <span>
          {contact.name} : {contact.number}
        </span>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
