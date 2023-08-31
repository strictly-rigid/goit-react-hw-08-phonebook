import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactsList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <ContactListItem id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
