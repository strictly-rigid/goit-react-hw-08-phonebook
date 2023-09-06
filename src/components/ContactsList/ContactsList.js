import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from 'redux/contacts/selectors';
import css from './ContactsList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import List from '@mui/material/List';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.contactsContainer}>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <List>
          {filteredContacts.length === 0 && !error ? (
            <p>The phonebook is empty.</p>
          ) : (
            filteredContacts.map(({ id, name, number }) => (
              <ContactListItem key={id} contact={{ id, name, number }} />
            ))
          )}
        </List>
      )}
    </div>
  );
};

// import { useSelector } from 'react-redux';
// import {
//   selectFilteredContacts,
//   selectLoading,
//   selectError,
// } from 'redux/contacts/selectors';
// import css from './ContactsList.module.css';
// import ContactListItem from '../ContactListItem/ContactListItem';
// import List from '@mui/material/List';

// export const ContactsList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const isLoading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   return (
//     <div className={css.contactsContainer}>
//       {isLoading ? (
//         <p>...Loading</p>
//       ) : filteredContacts.length === 0 && !error ? (
//         <p>The phonebook is empty.</p>
//       ) : (
//         filteredContacts.map(({ id, name, number }) => (
//           <ContactListItem key={id} contact={{ id, name, number }} />
//         ))
//       )}
//     </div>
//   );
// };
