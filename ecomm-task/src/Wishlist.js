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
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Wishlist() { 
    const [openSnack, setOpenSnack] = React.useState(false);  

    let wishlist = JSON.parse(localStorage.getItem("wishlist"));

    const handleRemove = (row) => {
        let fw = JSON.parse(localStorage.getItem("wishlist"));
        const filtered = fw.filter(item => item.id !== row.id);
        localStorage.setItem("wishlist", JSON.stringify(filtered));
        console.log(row.id + ' removed');
        setOpenSnack(true); 
        let ls = JSON.parse(localStorage.getItem("wishlist")) 
        console.log(ls)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenSnack(false);
    };  


        
  
 
return (   
   wishlist != null && wishlist.length > 0?
<div className="App-header">    
<Snackbar
          onClose={handleClose}
          open={openSnack}
          autoHideDuration={4000}
          //message="Product added to your wishlist"
          >
    <Alert
    //onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    {'Product removed from your wishlist !'}
  </Alert>
</Snackbar> 
  {/* <Card sx={{ width: '100', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center' }}>
    <CardContent>
      <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
        Wishlist page
      </Typography>         
    </CardContent>    
  </Card> */}
  
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="table"
      >
        <TableHead>
          <TableRow>
            <TableCell>My wishlist</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {wishlist.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{`R ${row.price}`}</TableCell>
              <TableCell align="right">                
                <Tooltip title="Remove from wishlist">      
                    <IconButton onClick={() => {
                            handleRemove(row);
                        }}>
                        <DeleteIcon color="primary" />
                    </IconButton>
          </Tooltip>
              </TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
</div>   
:<Card sx={{ width: '100', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center' }}>
<CardContent>
  <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
    {'No items in your wishlist'}
  </Typography>         
</CardContent>    
</Card>
)
}
