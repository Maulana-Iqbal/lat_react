import { useState } from 'react'
import IqbalLogo from './assets/iqbal.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { SvgIcon } from './assets/iqbal.png';
// import SvgIcon from '@mui/material/react';
import myImage from './assets/react.svg'; 
import { Avatar } from '@mui/material';
import Paper from '@mui/material/Paper';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
    },

    shadowContainer: {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Customize the shadow as per your preference
    },
  };

  return (
    <>
      <div style={styles.container}>
        <Avatar alt="Iqbal Maulana"  src={IqbalLogo} sx={{ width: 100, height: 100 }} />
      </div>
      <h3>Iqbal Maulana</h3>
      <Stack spacing={2}>
        <Button style={styles.shadowContainer} variant='outlined' onClick={() => window.location.replace('https://google.com')}>
          <Stack 
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          spacing={2}>
            <img src={myImage} alt="My Image" />
            <p>Playlist</p>
            <h5>icon</h5>
          </Stack>
        </Button>
        <Button style={styles.shadowContainer} variant='outlined' onClick={() => window.location.replace('https://google.com')}>
          <Stack 
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          spacing={2}>
            <img src={myImage} alt="My Image" />
            <p>Personal Website</p>
            <h5>icon</h5>
          </Stack>
        </Button>
        <Button style={styles.shadowContainer} variant='outlined' onClick={() => window.location.replace('https://google.com')}>
          <Stack 
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          spacing={2}>
            <img src={myImage} alt="My Image" />
            <p>Traktir Saya</p>
            <h5>icon</h5>
          </Stack>
        </Button>
      </Stack>
    </>
  )
}

export default App
