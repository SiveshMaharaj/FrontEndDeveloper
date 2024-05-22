import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
// import MovingText from 'react-moving-text';
// import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
//import { imageSlider } from './imageslider';

export default function Homepage() { 
  
 
return (
<div className="App">
<header className="App-header">    
    <Box 
      margin='auto'
      justifyContent='center'      
      borderRadius='12px'
      boxShadow='2'
      width='1000px'
      height='700px'

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
      <p>
      <span className='font-head' style={{color: 'grey'}}>
        Welcome to our website !<br/>
        Search our products via the search portal in the top right corner
        or browse our products via the menu on the left      
      </span>
      </p>          

    </Box>
    </header>
    </div>
)
}
