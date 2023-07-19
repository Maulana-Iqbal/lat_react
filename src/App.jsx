import { useState } from 'react'
import IqbalLogo from './assets/iqbal.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { SvgIcon } from './assets/iqbal.png';
// import SvgIcon from '@mui/material/react';
import myImage from './assets/react.svg'; 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={IqbalLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h3>Iqbal Maulana</h3>
      <Stack spacing={2}>
        <Button variant='outlined' onClick={() => window.location.replace('https://google.com')}>
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
        <Button variant='outlined' onClick={() => window.location.replace('https://google.com')}>
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
        <Button variant='outlined' onClick={() => window.location.replace('https://google.com')}>
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
