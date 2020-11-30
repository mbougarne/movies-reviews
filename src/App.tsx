import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import './styles/App.css';

export default function App() {
  return (
    <div className="App LightScheme">
      <Router>
        <Switch>
          <Route exact path="/" > <Home /> </Route>
          <Route exact path="/about" > <About /> </Route>
        </Switch>
      </Router>      
    </div>
  );
}
