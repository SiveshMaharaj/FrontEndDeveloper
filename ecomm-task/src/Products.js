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
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Divider } from '@mui/material';

export default function Products() { 
    const [category, setCategory] = React.useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };
  
 
return (   
<div className="App-header">    
  <Card sx={{ width: '100', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center'}}>
    <CardContent>
      <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
        Products page                
      </Typography>         
    </CardContent>    
  </Card>
  <br/>
  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Filter by category"
          onChange={handleCategory}
        >
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={2}>Tech</MenuItem>
          <MenuItem value={3}>Accessories</MenuItem>
          <MenuItem value={4}>Clothes</MenuItem>
        </Select>
      </FormControl>
</div>   
)
}
