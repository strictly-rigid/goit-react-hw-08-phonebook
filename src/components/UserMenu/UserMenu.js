import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Box>
        <Typography>
          Hello, <b>{user.email}</b>
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: 'primary',
          '&:hover': {
            backgroundColor: 'secondary',
          },
          marginRight: '12px',
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
