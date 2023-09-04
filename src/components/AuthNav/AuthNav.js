import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const customTheme = createTheme({
  typography: {
    fontSize: 16,
    body1: {
      fontSize: '1.5rem', // Set the font size for body1 variant to 1.5rem
    }, // The base font size
  },
});

export const AuthNav = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <NavLink to="/register">
          {' '}
          <Typography variant="body1" style={{ fontSize: '1.5rem' }}>
            Register{' '}
          </Typography>
        </NavLink>
        <NavLink to="/login">Log In</NavLink>
      </div>
    </ThemeProvider>
  );
};
