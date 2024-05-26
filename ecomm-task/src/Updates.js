import './AppStyle.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Updates() { 
  
 
return (   
<div className="App-header">    
  <Card sx={{ width: '100', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center' }}>
    <CardContent>
      <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
        No updates added yet ! If you are on our mailer list you will receive product updates
      </Typography>         
    </CardContent>    
  </Card>
</div>   
)
}
