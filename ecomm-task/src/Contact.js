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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';

export default function Contact() { 
  
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };
      
      const [name, setName] = React.useState('');
      const [surname, setSurname] = React.useState('');
      const [email, setEmail] = React.useState('');
      const [contact, setContact] = React.useState('');
      const [message, setMessage] = React.useState('');
    
      const handleChange = event => {
        setName(event.target.value);
        
      };
    
      const handleChangeSurname = event => {
        
        setSurname(event.target.value);
       
      };
    
      const handleChangeEmail = event => {
       
        setEmail(event.target.value);
       
      };
    
      const handleChangeContact = event => {
       
        setContact(event.target.value);
        
      };
    
      const handleChangeMessage = event => {
        
        setMessage(event.target.value);
      };
    
      const handleClick = (newState) => () => {    
    /*   // save query to DB  
      push(ref(db, 'Queries'), {
        Name : name,
        Surname : surname,
        Email : email,
        Number : contact,
        Query : message  
      }); */
    
        setName('');
        setSurname('');
        setEmail('');
        setContact('');
        setMessage('');
        setState({ open: true, ...newState });
      };
    
    
     
    return (
    <div className="App">
    <header className="App-header">
        <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              key={vertical + horizontal}
              open={open}
              onClose={handleClose}
              autoHideDuration={6000}
              message="Thanks for contacting us ! We'll get back to you shortly."
          />
        <Box 
          margin='auto'
          justifyContent='center'      
          borderRadius='12px'
          boxShadow='2'
          width='1000px'
          height='700px'
    
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <p>
          <span className='font-contact' style={{color: 'black'}}>Contact us using the form below</span>
          </p>
          
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"          
              //defaultValue=""
              onChange={handleChange}
              value={name}
            />
            <TextField
              required
              id="outlined-required"
              label="Surname"
              //defaultValue=""
              onChange={handleChangeSurname}
              value={surname}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              //defaultValue=""
              onChange={handleChangeEmail}
              value={email}         
            />
            <TextField
              required
              id="outlined-required"
              label="Contact Number"
              //defaultValue=""
              onChange={handleChangeContact}
              value={contact}
              
            />
            <TextField
              id="outlined-textarea"
              label="Query/Complaint"
              placeholder=""
              multiline
              style = {{width: 830, height: 500}}
              onChange={handleChangeMessage}
              value={message}
              rows={5}
            />
                    
          </div>
          <Button sx={{bottom: (theme) => theme.spacing(5)}} variant="contained" endIcon={<SendIcon />} onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'center',
            })}>
            {<div className="font-link">Submit</div>}
          </Button>
        </Box>
        </header>
        </div>
    )
}
