import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import './AppStyle.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import StarRateIcon from '@mui/icons-material/StarRate';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LoginIcon from '@mui/icons-material/Login';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation, useNavigate, createSearchParams  } from 'react-router-dom';
//import { color } from '@mui/system';
import * as Colours from "@mui/material/colors"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Chip from '@mui/material/Chip';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import Grid from '@mui/system/Unstable_Grid';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

//full-screen dialog
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {  
    const [openBackdrop, setOpenBackdrop] = React.useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleOpenBackdrop = () => {
        setOpenBackdrop(true);
        setTimeout(() => setOpenBackdrop(false), 3800);
        setTimeout(() => setOpenSuccess(true), 4000);   
        //setOpenBackdrop(false);
    };
    
    const [openCheckout, setOpenCheckout] = React.useState(false);
    const handleClickOpenCheckout = () => {
        setOpenCheckout(true);
    };

    const handleCloseCheckout = () => {
        setOpenCart(false);
        setOpenCheckout(false);
    };


    //////////////////////////////////

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenSnack(false);
    };  

    const [openCart, setOpenCart] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [alert, setAlert] = React.useState(false);
    const [qty, setQty] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [openSnack, setOpenSnack] = React.useState(false);

    let wishlist = JSON.parse(localStorage.getItem("wishlist"));

    let cart = JSON.parse(localStorage.getItem("cart"));

    const handleRemove = (row) => {
        let fw = JSON.parse(localStorage.getItem("cart"));
        const filtered = fw.filter(item => item.id !== row.id);
        localStorage.setItem("cart", JSON.stringify(filtered));
        console.log(row.id + ' removed');
        setOpenSnack(true); 
        let ls = JSON.parse(localStorage.getItem("cart"));
        console.log(ls);
        handleCartOpen(qty, total);
        if(ls.length < 1){
            setOpenCart(false);
            setAlert(true);
        }
    };
    //let qty = 0;

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert(false);
      }; 

    //let Qty;
    const handleCartOpen = (qty, total) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        qty = cart.reduce(function(qty, current) {
            return qty + + current.qty
          }, 0);    
        total = cart.reduce(function(total, current) {
        return total + + current.price
        }, 0);      
        console.log(qty);
        console.log(total);
        if(cart != null && cart.length > 0){
            setOpenCart(true);
            setQty(qty);
            setTotal(total);
        } else {
            setAlert(true);
        }
    };    
  
    const handleCartClose = () => {
        setOpenCart(false);
    };

    const handleSuccessClose = () => {
        let cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        
        setOpenSuccess(false);
        setOpenCheckout(false);
        setOpenCart(false);        
    };

  /* const [isEnabled, setIsEnabled] = React.useState(false);

  const IncNum = (row) => {
    var items = JSON.parse(localStorage.getItem('cart'))
    var item = items.find(item => item.id === row.id);
    if (item) {
        item.qty += 1;
        item.price += row.price;
        //setIsEnabled(item.qty >= 1);
    }   
  localStorage.setItem('cart', JSON.stringify(items));
  console.log(items);
  };

 

  const DecNum = (row, event) => {
    var items = JSON.parse(localStorage.getItem('cart'))
    var item = items.find(item => item.id === row.id);
    if (item && item.qty > 1) {
        item.qty -= 1;
        item.price -= row.price;
        //setIsEnabled(item.qty >= 1);
    }   
  localStorage.setItem('cart', JSON.stringify(items));
  console.log(items);
  }; */ 
         
let navigate = useNavigate();        
const itemsList = [
    {
      text: <div className="font-link">Products Home</div>,              
      icon: <EmojiEmotionsIcon />,
      url:'/products',
      onClick: () => navigate('/products'),
    },
    {
      text: <div className="font-link">My Wishlist</div>,
      icon: <FavoriteOutlinedIcon />,
      url:'/wishlist',
      onClick: () => navigate('/wishlist'),
    },
    {
        text: <div className="font-link">Coming Soon</div>,
        icon: <StarRateIcon />,
        url:'/updates',
        onClick: () => navigate('/updates'),
      },
    {
      text: <div className="font-link">Contact Us</div>,
      icon: <MailIcon />,
      url:'/contact',
      onClick: () => navigate('/contact'), 
    },
    ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let search, setSearch = React.useState('');
  

  const handleDrawerOpen = () => {
    setOpen(true);
  }; 

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCriteria = event => {    
    setSearch = (event.target.value)
  };

  const handleSearch = event => {     
    event.preventDefault();
    // 👇️ value of input field
    console.log('text = ', setSearch);    
    /* navigate('/search') */
    navigate
      ({
        pathname: '/search',
        search:createSearchParams({
        id:setSearch
        }).toString()
      });
  };

  const { pathname } = useLocation();

  const handleContact = () => {    
    navigate
      ({
        pathname: '/contact'
      });
  };

 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx= {{backgroundColor: "#edfff5", color: "black"}}>
        <Toolbar>
        <Box display='flex' flexGrow={1}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div/>
          <div/>    
           <TextField id="outlined-search" type="search" sx={{height:'50px', width: '200px', marginLeft: '2%'}} label={<div className="font-link">Search products...</div>} onChange={handleCriteria} value={search} InputLabelProps={{style : {color : 'black'} }}/>          
          &nbsp;&nbsp;
          <Tooltip title="Search">
          <Fab onClick={handleSearch} aria-label="search" sx= {{backgroundColor: "black", color: "red", height:'50px', width:'55px'}}>
            <SearchIcon />
          </Fab>
          </Tooltip> 
          <Typography style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} variant="h4" noWrap component="div">
            <p className="font-head" >{'wantalot.com'}</p>
          </Typography>
          <Divider/>          
          {/* <img src={logo} className="App-logo" alt="logo" style={{height:'60px', width: '60px'}} />            */}
          </Box>  
          <Tooltip title="View cart">
          <Fab //onClick={handleCartOpen} 
            onClick={() => handleCartOpen(qty)}
           aria-label="search" sx= {{backgroundColor: "black", color: "red", height:'55px', width:'55px'}}>
            <ShoppingCartOutlinedIcon />
          </Fab>  
          </Tooltip>                           
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: "#fab9c5", color: "black" } }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        {/* <List> */}        
        <List>      
            {itemsList.map((item, index) => {
            //const route = itemsList[item];
            const { text, icon, onClick, url } = item;
            return (
            <ListItem
            /* sx= {{backgroundColor: "lightcoral", color: "black"}} */      
            selected={url === pathname } button key={index} onClick={onClick}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
            </ListItem>
            );
            })}
        </List>

         {/*  {['Current Games', 'Current Gadgets', 'Coming Soon', 'Contact Us'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {[<EmojiEmotionsIcon />, <ElectricBoltIcon />, <StarRateIcon />, <MailIcon />][index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider/>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Tooltip title="Contact Support">
    <Fab onClick={handleContact}
    sx={{
      position: "fixed",
      bottom: (theme) => theme.spacing(2),
      right: (theme) => theme.spacing(2)
    }}
    color="primary"
  >
    <ContactSupportIcon fontSize='large' />
  </Fab>   
  </Tooltip>   
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
    {'Product removed from your cart !'}
  </Alert>
</Snackbar> 
  <Snackbar
          onClose={handleAlertClose}
          open={alert}
          autoHideDuration={4000}
          //message="Product added to your wishlist"
          >
    <Alert
    //onClose={handleClose}
    severity="warning"
    variant="filled"
    sx={{ width: '100%'}}>
        <AlertTitle>{'Your cart is empty !'}</AlertTitle>
    {'Continue shopping to add items to your cart.'}
  </Alert>
</Snackbar>

    
 
      <React.Fragment>      
      <Dialog
        open={openCart}
        onClose={handleCartClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true} maxWidth={"xl"}
      >
        <DialogTitle id="alert-dialog-title">
          {"Your cart summary :"}
        </DialogTitle>
        <DialogContent 
        >
          <DialogContentText id="alert-dialog-description">
            {'Product quantity : ' + qty}
            <br/>
            {'Product total amount : R' + total}
            <br/><br/>
          </DialogContentText>
          <TableContainer component={Paper}>
      <Table sx={{width:'100%'}} aria-label="table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Cart details</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right"></TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
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
              {/* <Button //enabled={isEnabled}
               onClick={() => {
                            DecNum(row);
                        }}>
                <RemoveCircleRoundedIcon />
                </Button> */}
                {row.qty}
               {/*  <Button onClick={() => {
                            IncNum(row);
                        }}>
                <AddCircleRoundedIcon />
                </Button> */}
                
                </TableCell>
              <TableCell align="right">                
                <Tooltip title="Remove from cart">      
                    <IconButton onClick={() => {
                            handleRemove(row);
                        }}>
                        <DeleteIcon color="primary" />
                    </IconButton>
          </Tooltip>
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>      
    </TableContainer>
    <DialogContentText id="alert-dialog-description">
    <br/>
    {'Continue shopping to add more items to your cart'}
    </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCartClose}>Continue shopping</Button> 
          <Button variant="contained" onClick={handleClickOpenCheckout}
          >Proceed to checkout</Button>         
        </DialogActions>
      </Dialog>
    </React.Fragment>

    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpenCheckout}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={openCheckout}
        onClose={handleCloseCheckout}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseCheckout}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton> */}
            <Typography sx={{  flex: 1 }} variant="h6" component="div">
              Checkout Summary Details
            </Typography>
            <Button variant="outlined" autoFocus color="inherit" onClick={handleCloseCheckout}>
              Continue shopping
            </Button>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
      <Table sx={{width:'100%'}} aria-label="table"
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Unit Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left"></TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{`R ${row.price}`}</TableCell>
              <TableCell align="left">              
              {/* <Button //enabled={isEnabled}
               onClick={() => {
                            DecNum(row);
                        }}>
                <RemoveCircleRoundedIcon />
                </Button> */}
                {row.qty}
               {/*  <Button onClick={() => {
                            IncNum(row);
                        }}>
                <AddCircleRoundedIcon />
                </Button> */}                
                </TableCell>   
                <TableCell align="right"></TableCell>                        
            </TableRow>
          ))}
        </TableBody>
      </Table>      
    </TableContainer>
  <Divider/>
          <Toolbar style={{backgroundColor:'green'}}>           
            <Typography sx={{  flex: 1 }} variant="h6" component="div">
            <div style={{color: 'white'}}>
            {'Cart quantity : ' + qty}
             <br/>
            {'Cart total amount : R' + total}
            </div>
            </Typography>
            <Button onClick={handleOpenBackdrop} style={{width: 400, borderWidth:1, borderStyle: 'solid', borderColor: 'white', color: 'white'}} variant="contained" color="success">
                {'Place order & pay'}
            </Button>     
          </Toolbar>
          <Divider/>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
        &nbsp;&nbsp;
        {'Processing payment...'}
    </Backdrop>    
      </Dialog>
    </React.Fragment>

    <React.Fragment>      
      <Dialog
        open={openSuccess}
        onClose={handleSuccessClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true} maxWidth={"xl"}
      >
        <DialogTitle id="alert-dialog-title">
          {"Order successful ! - Order No. : 1001234"}
        </DialogTitle>
        <DialogContent 
        >
          <DialogContentText id="alert-dialog-description">            
            {'Your order and payment was successful. Please check your email for order & delivery details.'}            
          </DialogContentText>             
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSuccessClose}>Ok</Button>              
        </DialogActions>
      </Dialog>
    </React.Fragment>


  </Box>
  );
}