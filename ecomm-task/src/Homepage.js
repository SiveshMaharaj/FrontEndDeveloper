import './AppStyle.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Homepage() { 
  
 
return (   
<div className="App-header">    
  <Card sx={{ width: '60%', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center' }}>
    <CardContent>
      <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
        Welcome to our website !<br/>
        Search our products via the search portal in the top left corner
        or browse our products via the menu  
      </Typography>         
    </CardContent>    
  </Card>
</div>
   
)
}
