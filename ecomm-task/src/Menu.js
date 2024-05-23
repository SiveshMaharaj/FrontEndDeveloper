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




//const adminOptions = ['Admin Console Login', 'Contact Admin Tech'];

/* function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  
  let navigate = useNavigate();
  const { pathname } = useLocation(); */
  /* const handleClose = () => {
    onClose(selectedValue);
  };
 */
  /* const handleListItemClick = (value) => {
    onClose(value);
  }; */


  /* const handleAdminClick = (value) => {    
    console.log(value)
    if (value === 'Admin Console Login') {
    navigate
      ({
        pathname: '/admin'
      });
      onClose(value);
    } else {
      navigate
      ({
        pathname: '/adminTech'
      });
      onClose(value);
    }
  };

  const handleClickaway = () => {
    onClose(selectedValue);    
  };

  return (
    <Dialog onClose={handleClickaway} open={open}>
      <DialogTitle>Admin Console</DialogTitle>
      <List sx={{ pt: 0 }}>
        {adminOptions.map((admin) => (
          <ListItem key={admin} disableGutters>
            <ListItemButton onClick={() => handleAdminClick(admin)} key={admin}>
              <ListItemAvatar>
                <Avatar>
                  <AdminPanelSettingsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={admin} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}; 
*/




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

    const [openCart, setOpenCart] = React.useState(false);

    const handleCartOpen = () => {
        setOpenCart(true);
    };
  
    const handleCartClose = () => {
        setOpenCart(false);
    };

  //const UserRole = localStorage.getItem("role")
  //console.log('UserRole', UserRole)

  const [openAdmin, setOpenAdmin] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleOpenAdmin = () => {
    setOpenAdmin(true);
  };

  const handleClose = (value) => {
    setOpenAdmin(false);
    setSelectedValue(value);
  };




//   let loggedUser;
//   let loggedStatus;
//   //let Role;

//   loggedUser = localStorage.getItem("user")
//   loggedStatus = localStorage.getItem("status")

//   /* if(UserRole === null && UserRole === 'None' && UserRole !== 'Admin'){
//     Role = false
//   } */
  
//   if(loggedUser === null && loggedStatus === 'None'){         
//   console.log('YAY')
//   loggedUser = localStorage.setItem("user", "Not signed in")
//   }
  
         
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
    // {
    //   text: <div className="font-link">Login/Sign-up</div>,
    //   icon: <LoginIcon />,
    //   url:'/login',
    //   onClick: () => navigate('/login'), 
    // },
    ];
        

//   loggedUser = localStorage.getItem("user")

//   if (UserRole === 'Admin'){
//     loggedUser = 'Admin'
//     console.log('ZZZZZZZZZZZZ',loggedUser)
//   }

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
          <Fab onClick={handleSearch} aria-label="search" sx= {{backgroundColor: "black", color: "red", height:'55px', width:'55px'}}>
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
          <Fab onClick={handleCartOpen} aria-label="search" sx= {{backgroundColor: "black", color: "red", height:'55px', width:'55px'}}>
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
 
      <React.Fragment>      
      <Dialog
        open={openCart}
        onClose={handleCartClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your cart is empty"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Continue shopping to add items to your cart.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCartClose}>Ok</Button>          
        </DialogActions>
      </Dialog>
    </React.Fragment>


  </Box>
  );
}