import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const homeLinkStyle = {
    color: location.pathname === '/' ? '#D11A2A' : '#2a363b',
  };
  const contacstLinkStyle = {
    color: location.pathname === '/contacts' ? '#D11A2A' : '#2a363b',
  };

  return (
    <nav>
      <NavLink className={css.link} to="/" style={homeLinkStyle}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts" style={contacstLinkStyle}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
