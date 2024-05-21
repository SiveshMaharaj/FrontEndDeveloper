import logo from './logo.svg';
import './AppStyle.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function App() {
  return(
    <div className='App-welcome'>

  <div className="font-head">    
    <Card sx={{ width: '100%', borderRadius: 10, borderColor: 'coral', borderWidth: 10, borderStyle:'solid' }}>
      <CardContent>
        <Typography sx={{ fontSize: 150, alignContent: 'center', justifyContent: 'center' }} color="coral" >
        {'wantalot.com'}
        </Typography>      
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

export default App;
