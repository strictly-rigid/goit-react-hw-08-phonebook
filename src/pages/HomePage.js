import React from 'react';
import Typography from '@mui/material/Typography'; // Import Typography from Material UI
import backgroundImage from '../images/bg-image.jpg';

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
  return (
    <div style={styles.container}>
      {/* Use Typography components for better text styling */}
      <Typography variant="h1" style={styles.title}>
        Welcome to the Homepage of your Contacts App
      </Typography>
      <Typography variant="body1" style={styles.subtitle}>
        Please sign up or log in
      </Typography>
    </div>
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
