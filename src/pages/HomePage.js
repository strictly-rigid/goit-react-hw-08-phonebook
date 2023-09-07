import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import backgroundImage from '../images/bg-image.jpg';
import { useAuth } from 'hooks';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    padding: '20px', // Add padding to the Paper component
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'white',
    marginBottom: '16px',
    paddingLeft: '10px',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
};

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Paper elevation={3} style={styles.container}>
      <Typography variant="h1" style={styles.title}>
        Welcome to the Homepage of your Contacts App
      </Typography>
      <Typography variant="body1" style={styles.subtitle}>
        {isLoggedIn ? '' : 'Please sign up or log in'}
      </Typography>
    </Paper>
  );
}

// import backgroundImage from '../images/bg-image.jpg';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundImage: `url(${backgroundImage})`, // Set the background image
//     backgroundSize: 'cover', // Adjust background image size
//     backgroundPosition: 'center', // Center the background image
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//     color: 'white',
//   },
// };

// export default function Home() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to the Homepage of your Contacts App</h1>
//       <p>Please sign up or log in</p>
//     </div>
//   );
// }

// import React from 'react';
// import Typography from '@mui/material/Typography';
// import backgroundImage from '../images/bg-image.jpg';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     borderRadius: '10px',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//     color: 'white',
//     marginBottom: '16px',
//     paddingLeft: '10px',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: 'white',
//   },
// };

// export default function Home() {
//   return (
//     <div style={styles.container}>
//       <Typography variant="h1" style={styles.title}>
//         Welcome to the Homepage of your Contacts App
//       </Typography>
//       <Typography variant="body1" style={styles.subtitle}>
//         Please sign up or log in
//       </Typography>
//     </div>
//   );
// }
