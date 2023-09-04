import React from 'react';
import { Card, CardHeader } from '@mui/material';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Card variant="outlined">
      <CardHeader
        title={<Navigation />}
        action={isLoggedIn ? <UserMenu /> : <AuthNav />}
      />
    </Card>
  );
};

export default AppBar;

// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// // import css from './AppBar.module.css';

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <header>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };
