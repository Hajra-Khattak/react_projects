import { useState } from 'react'; 
// import './App.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
  // State to hold the background color
  // Set the default color to white
  const [colorbg, setColorbg] = useState('orange');


  return (
    <>


      <Box sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  
        backgroundColor: colorbg,
        transition: 'background-color 0.5s ease',  // smooth color change
      }}>
        <Box sx={{ m: 0, p: 2}}>

        <h1>Hell </h1>
        </Box>
        <Box sx={{ width: '80vw', p:2,  borderRadius: 10 , backgroundColor: 'white', border: '1px solid red',  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>

        
        <Button onClick={() => setColorbg('error.main')}
        sx={{ '&:hover':{
          transform: 'scale(1.1)',
          boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
        }}} 
        variant="contained" color='error' >Hello MUI</Button>
        <Button onClick={() => setColorbg('success.main')} variant="contained" color="success">Success</Button>
        <Button onClick={() => setColorbg('#7B1FA2')} variant="contained" color="secondary">secondary</Button>
        <Button onClick={() => setColorbg('primary.main')} variant="contained" color="primary">primary</Button>
        <Button onClick={() => setColorbg('warning.main')} variant="contained" color="warning">warning</Button>
        <Button onClick={() => setColorbg('inherit.main')} variant="contained" color="inherit">inherit</Button>
        <Button onClick={() => setColorbg('info.main')} variant="contained" color="info">Info</Button>
        <Button onClick={() => setColorbg('white')} variant="contained" color="default">default</Button>
        <Button sx={{ backgroundColor: 'black', color: 'white' }} onClick={() => setColorbg('black')} variant="contained" >Custom Css</Button>
      </Box>
      </Box>

    </>
  )
}

export default App
