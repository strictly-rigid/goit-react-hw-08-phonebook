import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// import Form from './Form/Form';
// import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
// import css from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage.js'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

// export default function App() {
//   return (
//     <>
//       <div className={css.appContainer}>
//         <h1 className={css.appTitle}>Phonebook</h1>
//         <Form />
//         <h2 className={css.contactsTitle}>Contacts</h2>
//         <Filter />
//         <Contacts />
//       </div>
//     </>
//   );
// }
