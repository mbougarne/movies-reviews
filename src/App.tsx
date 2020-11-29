import React from 'react';
import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={Home}
          />
          <Route 
            exact path="/about"
            component={About}
          />
        </Switch>
      </Router>      
    </div>
  );
}
