import './AppStyle.css';
import * as React from 'react';
import Box from '@mui/material/Box';
// import MovingText from 'react-moving-text';
// import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';
//import { imageSlider } from './imageslider';
import Grid from '@mui/system/Unstable_Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Homepage() { 
  
 
return (   
<div className="App-header">    
  <Card sx={{ width: '60%', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center' }}>
    <CardContent>
      <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
        Welcome to our website !<br/>
        Search our products via the search portal in the top right corner
        or browse our products via the menu on the left  
      </Typography>         
    </CardContent>    
  </Card>
</div>
   
)
}
