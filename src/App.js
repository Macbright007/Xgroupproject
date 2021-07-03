import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <Router>
      <div className="App">
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color= '255,165,0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
