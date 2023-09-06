import React from 'react';
import { useAuth } from 'hooks';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #002855',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;

//  <Card variant="outlined">
//    <Box>
//      <CardHeader
//        title={<Navigation />}
//        action={isLoggedIn ? <UserMenu /> : <AuthNav />}
//      />
//    </Box>
//  </Card>;

//   return (
//     <Card variant="outlined" sx={{ height: '100px', alignItems: 'center' }}>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <Navigation />
//         {isLoggedIn ? <UserMenu /> : <AuthNav />}
//       </Box>
//     </Card>
//   );
// };
