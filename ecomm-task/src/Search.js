import './AppStyle.css';
import * as React from 'react';
import Box from '@mui/material/Box';
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
import { useEffect, useState, useMemo } from 'react'
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate, useSearchParams  } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() { 
    const [category, setCategory] = React.useState('');
    const [products, setProducts] = useState([]);
    const [searchProd, setsearchProd] = useState([]);    
    const [chosen, setChosen] = useState([]);
    const [openCartSnack, setCartSnack] = React.useState(false); 
    const [openSnack, setOpenSnack] = React.useState(false);  
    const [openInfo, setOpenInfo] = React.useState(false);
    const [alert, setAlert] = React.useState(false);
    const [warning, setWarning] = React.useState(false);

     // Call fetchData on component mount
     useEffect(() => {
        fetchAllProducts();        
        //console.log('products', products)
     }, []);

    
    const handleCartClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setCartSnack(false);
      };  

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnack(false);
      };  

      const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert(false);
      }; 
      
      const handleWarning = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setWarning(false);
      };  

      const handleCart = (product) => {
            var existingEntries = JSON.parse(localStorage.getItem("cart"));

            var id = existingEntries.length + 1;        
                if (existingEntries.filter(item => item.id === product.id).length === 0){
                    if(existingEntries == null) existingEntries = [];
                    var entry = {
                        "id": product.id,
                        "title": product.title,
                        "price": product.price,
                        "qty": 1
                    };
                    localStorage.setItem("cartentry", JSON.stringify(entry)); 
                    existingEntries.push(entry);
                    localStorage.setItem("cart", JSON.stringify(existingEntries));
                    setCartSnack(true);  
                    let ls = JSON.parse(localStorage.getItem("cart")) 
                    console.log(ls)
                } else {
            setWarning(true);
            console.log('item already exists in cart')
            }       
        }; 

    const handleWishlist = (product) => {
        var existingEntries = JSON.parse(localStorage.getItem("wishlist"));

        var id = existingEntries.length + 1;        
            if (existingEntries.filter(item => item.id === product.id).length === 0){
                if(existingEntries == null) existingEntries = [];
                var entry = {
                    "id": product.id,
                    "title": product.title,
                    "price": product.price
                };
                localStorage.setItem("entry", JSON.stringify(entry)); 
                existingEntries.push(entry);
                localStorage.setItem("wishlist", JSON.stringify(existingEntries));
                setOpenSnack(true);  
                let ls = JSON.parse(localStorage.getItem("wishlist")) 
                console.log(ls)
            } else {
            setAlert(true);
            console.log('item already exists')
            }       
    };   
    

    const handleInfoOpen = () => {
        setOpenInfo(true);
    };
  
    const handleInfoClose = () => {
        setOpenInfo(false);
    };

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    // Function to fetch product data using Axios
    const fetchAllProducts = async () => {
        try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    console.log('products', products)
    const [searchParams] = useSearchParams();   
    let criteria = searchParams.get("id").toLowerCase();  
    console.log('criteria', criteria);

    const tableData = products.filter(x => x.title.toLowerCase().includes(criteria))
    console.log('search prod', tableData)

    const results = "Search results (" + tableData.length + ") for '" + searchParams.get("id") + "'";   

    
    // Function to fetch product data using Axios
    const fetchSingleProduct = async (key) => {
        try {
        const response = await axios.get("https://fakestoreapi.com/products/" + key);
        setChosen(response.data);
        handleInfoOpen();
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

   
  
 
return (   
<div className="App-header"> 
<Snackbar
          onClose={handleCartClose}
          open={openCartSnack}
          autoHideDuration={4000}          
          >
    <Alert
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    {'Product added to your cart !'}
  </Alert>
</Snackbar>  

<Snackbar
          onClose={handleWarning}
          open={warning}
          autoHideDuration={4000}
          >
    <Alert
    severity="info"
    variant="filled"
    sx={{ width: '100%' }}
  >
    {'Product already added to your cart !'}
  </Alert>
</Snackbar> 

<Snackbar
          onClose={handleAlertClose}
          open={alert}
          autoHideDuration={4000}
          >
    <Alert    
    severity="info"
    variant="filled"
    sx={{ width: '100%' }}
  >
    {'Product already added to your wishlist !'}
  </Alert>
</Snackbar>  
    <Snackbar
          onClose={handleClose}
          open={openSnack}
          autoHideDuration={4000}          
          >
    <Alert    
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    {'Product added to your wishlist !'}
  </Alert>
</Snackbar>     
  <br/>
  <br/>

<Chip label={<div className="font-link">{results}</div>} color="error" size="medium" icon={<SearchIcon />} />
    <ImageList sx={{ width: 1000, height: 800, borderRadius: 5, scrollbarWidth: 'none' }}>
      <ImageListItem key="Subheader" cols={2}>        
      </ImageListItem>
      {tableData.map((product, index) => (
        <ImageListItem key={index}>
          <img
            src={product.image}
            srcSet=''
            alt={product.id}
            loading="lazy"
            width={200}
            height={200}
          />
          <ImageListItemBar
            key={product.id}
            title={product.title}
            subtitle={product.description}
            style={{backgroundColor:'black', height: 150}}
            actionIcon={
            <>
                <Tooltip title="Add to cart">
                <IconButton    
                    key={product.id}             
                    onClick={() => handleCart(product)} 
                    color="warning"
                    aria-label={`info about ${product.title}`}
                    size="large"
                    >
                    <ShoppingCartIcon size="large"/>
                </IconButton>
                </Tooltip>

                <Tooltip title="Add to wishlist">
                <IconButton  
                    key={product.id}               
                    onClick={() => handleWishlist(product)}
                    color="error"
                    aria-label={`info about ${product.title}`}
                    size="large"
                    >
                    <FavoriteIcon size="large"/>
                </IconButton>
                </Tooltip>

                <Tooltip title="View product details">
                <IconButton          
                    key={product.id}       
                    onClick={() => fetchSingleProduct(product.id)}
                    color="info"
                    aria-label={`info about ${product.title}`}
                    size="large"
                    >
                    <InfoIcon size="large"/>
                </IconButton>
                </Tooltip>
            </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

    
    <React.Fragment>     
      <Dialog
        open={openInfo}
        onClose={handleInfoClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Product details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {chosen.title}
            <br/>
            <br/>
           {chosen.description}
            <br/>
            <br/>
           {`R ${chosen.price}`}
            <br/>
            <br/>
           <img
            src={chosen.image}
            srcSet=''
            alt={chosen.id}
            loading="lazy"
            width={200}
            height={200}
          />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose}>Cool!</Button>          
        </DialogActions>
      </Dialog>      
    </React.Fragment>    
</div>   
)
}
