import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import Work from './components/Work'; 
import Home from './components/Home';
import Particles from 'react-particles-js';
import LandingBtn from './components/landingBtn';

//TODO: make buttons the same width, resize with same scale
//possible add particle effect -- done
//drawer navigation links  -- removed

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">

          <div className="App">
         
            <Particles className="App-header"/>
              <LandingBtn/>
            
            </div>
          
           
          </Route>
        </Switch>
    </Router>
  );

}

export default App;
