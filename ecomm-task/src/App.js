import logo from './logo.svg';
import './AppStyle.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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

export default function App() {

  const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 5000)
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
            //height="80"
            width="80"
            color="black"
            //ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ alignContent: 'center', justifyContent: 'center'}}
            wrapperClass=""
            visible={true}
        />  
      </CardContent>
      
    </Card>
    {/* <MovingText type="typewriter"
    dataText={['GoodStuff Gaming & Gadgets']}/>   */}   
  </div> 
      
    <br></br>
    {/* <img src={logo} className="App-logo" alt="logo" style={{height:'100px', width: '100px'}} /><br></br> */}
    {/* <MovingText
      type="fadeIn"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="linear"
      iteration="infinite"
      fillMode="none"
      >
          <Typography  variant="h4" noWrap component="div">
          <p className="font-head" >loading...</p>
    </Typography>
      </MovingText>   */}   
    
    </div>)
  }

  if(!loading){
    return (
    <Box sx={{ flexGrow: 1 }}>
         
    <div className="App-header">
    <Router>
    {/* <Transitions> */}
      <MiniDrawer/>
      <Routes>
      <Route index element={<Homepage />} />
      <Route path="/products" exact element={<Products />} /> 
      <Route path="/wishlist" exact element={<Wishlist />} /> 
      <Route path="/updates" element={<Updates />} /> 
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/search" element={<Search />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminTech" element={<AdminTech />} /> */}
      </Routes>
      {/* </Transitions> */}
    </Router>         
  </div>
 
    </Box>
    )
 }
}

//export default App;
