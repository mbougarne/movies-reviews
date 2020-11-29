import React from 'react';
import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" > <Home /> </Route>
          <Route exact path="/about" > <About /> </Route>
        </Switch>
      </Router>      
    </div>
  );
}
