import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
// import defaultTheme from 'materialUI/defaultTheme';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.useremail}>{user.email}</p>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'primary',
          '&:hover': {
            backgroundColor: 'secondary',
          },
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
