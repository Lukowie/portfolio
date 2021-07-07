import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './components/About';
import Work from './components/Work'; 
import mobileLanding from './img/mobileLanding.jpg';
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';

//TODO: make buttons the same width, resize with same scale
//possible add particle effect
//drawer navigation links 

function App() {
  const imgUrl = window.innerWidth >=650 ? mobileLanding : mobileLanding;
  return (
    <Router>
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">

          
          <div className="App">
         
            <Particles className="App-header"/>
            
              <span style={{zIndex: "4", top: "15%", left:"50%", transform: "translateX(-50%)", position: "absolute", minWidth: "325px", minHeight: "325px", maxWidth: "800px", maxHeight: "800px", width:"30vw", height:"30vw", backgroundColor: "rgba(0, 0, 0, 0.66)", borderRadius:"50%", border: "2px solid white"}}>
              <p style={{color: "white", position: "relative", top: "35%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "calc(26px + 2.3vw)"}}>
                Lucas Vandermaarel
              </p>
              </span>
            </div>
           
          </Route>
        </Switch>
    </Router>
    
  );

  /* 
  <div style={{display: "inline-block"}}>
      <Button variant="contained" id="workBtn"><Link style={{textDecoration: "none", color: "#ccc"}} to="/work">View Work</Link></Button>
      <Button variant="contained" id="aboutBtn"><Link style={{textDecoration: "none", color: "#ccc"}} to="/about">About Me</Link></Button>
  </div>

              */
}

export default App;
