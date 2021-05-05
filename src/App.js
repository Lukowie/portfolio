import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './components/About';
import Work from './components/Work'; 
import mobileLanding from './img/mobileLanding.jpg';
import { Typography } from '@material-ui/core';

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
            <header className="App-header" style={{backgroundSize: "100vw, auto", backgroundImage: `url(${imgUrl})`}}>
              <p style={{fontSize: "2.5em", maxWidth: "90vw"}}>
                Lucas Vandermaarel
              </p>
              <div style={{display: "inline-block"}}>
                <Button variant="contained" id="workBtn"><Link style={{textDecoration: "none", color: "#ccc"}} to="/work">View Work</Link></Button>
                <Button variant="contained" id="aboutBtn"><Link style={{textDecoration: "none", color: "#ccc"}} to="/about">About Me</Link></Button>
              </div>

            </header>
            </div>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
