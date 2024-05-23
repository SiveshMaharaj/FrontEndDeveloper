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
import { useEffect, useState, useMemo } from 'react'
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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

export default function Products() { 
    const [category, setCategory] = React.useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [chosen, setChosen] = useState([]);

    const [openInfo, setOpenInfo] = React.useState(false);

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

    // Function to fetch category data using Axios
    const fetchAllCategories = async () => {
        try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!category) {
          return products;
        }
        return products.filter((item) => item.category === category);
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [category, products]);

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

    // Call fetchData on component mount
    useEffect(() => {
        fetchAllProducts();
        fetchAllCategories();
    }, []);
  
 
return (   
<div className="App-header">    
  {/* <Card sx={{ width: '100', borderRadius: 10, alignContent: 'center', justifyContent: 'center', textAlign:'center'}}>
    <CardContent>
      <Typography sx={{ fontSize: 30, alignContent: 'center', justifyContent: 'center' }} color="coral">
        Products page                
      </Typography>         
    </CardContent>    
  </Card> */}
  <br/>
  <br/>
  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter products by category</InputLabel>             
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Filter products by category"
          onChange={handleCategory}
        >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>{cat}</MenuItem>         
        ))}
        </Select>        
    </FormControl>

      {/* {products.map((product) => (
      <img key={product.id} src={product.image} alt={product.title} width={200}/>
      ))} */}

    <ImageList sx={{ width: 1000, height: 800, borderRadius: 5, scrollbarWidth: 'none' }}>
      <ImageListItem key="Subheader" cols={2}>        
      </ImageListItem>
      {filteredList.map((product, index) => (
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
                    //onClick={() => handleCheckout(item.key)} // set product key to process at payment 
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
                    //onClick={() => handleCheckout(item.key)} // set product key to process at payment 
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
                    onClick={() => fetchSingleProduct(product.id)} // set product key to process at payment 
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
