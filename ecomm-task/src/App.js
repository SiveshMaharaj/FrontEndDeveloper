import logo from './logo.svg';
import './AppStyle.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThreeCircles, ThreeDots, Bars, BallTriangle } from "react-loader-spinner"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import MiniDrawer from './Menu';
import Homepage from './Homepage';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import Grid from '@mui/system/Unstable_Grid';
import Products from './Products';
import Wishlist from './Wishlist';
import Updates from './Updates';
import Contact from './Contact';
import Search from './Search';

export default function App() {

  const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 5000)
      let wishlist = [];
      let cart = [];

      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, []);


    if (loading) {
      return(
  //return(
    <div className='App-welcome'>
  <div className="font-head">    
    <Card sx={{ width: '100%', borderRadius: 10, borderColor: 'coral', borderWidth: 10, borderStyle:'solid' }}>
      <CardContent>
        <Typography sx={{ fontSize: 150, alignContent: 'center', justifyContent: 'center' }} color="coral" >
        {'wantalot.com'}
        </Typography>    
        <Bars
            width="80"
            color="black"
            radius="1"
            wrapperStyle={{ alignContent: 'center', justifyContent: 'center'}}
            wrapperClass=""
            visible={true}
        />  
      </CardContent>      
    </Card>  
  </div> 
      
    <br></br>    
    </div>
    )
  }

  if(!loading){
    return (
    <Box sx={{ flexGrow: 1 }}>
         
    <div className="App-header">
    <Router>    
      <MiniDrawer/>
      <Routes>
      <Route index element={<Homepage />} />
      <Route path="/products" exact element={<Products />} /> 
      <Route path="/wishlist" exact element={<Wishlist />} /> 
      <Route path="/updates" element={<Updates />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />      
      </Routes>      
    </Router>         
  </div>
 
    </Box>
    )
 }
}

