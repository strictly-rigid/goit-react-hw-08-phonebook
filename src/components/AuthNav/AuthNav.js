import { NavLink, useLocation } from 'react-router-dom';
import css from './AuthNav.module.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontSize: 16,
    body1: {
      fontSize: '1.5rem',
    },
  },
});

export const AuthNav = () => {
  const location = useLocation();

  const registerLinkStyle = {
    color: location.pathname === '/register' ? '#D11A2A' : '#2a363b',
  };

  const loginLinkStyle = {
    color: location.pathname === '/login' ? '#D11A2A' : '#2a363b',
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <NavLink className={css.link} to="/register" style={registerLinkStyle}>
          <Typography
            variant="body1"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
          >
            Register
          </Typography>
        </NavLink>
        <NavLink className={css.link} to="/login" style={loginLinkStyle}>
          <Typography
            variant="body1"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
          >
            Log In
          </Typography>
        </NavLink>
      </div>
    </ThemeProvider>
  );
};
