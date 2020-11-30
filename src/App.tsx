import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import PopularMovies from './pages/PopularMovies';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/App.css';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="App LightScheme">
      <Router>
        <Header />
        <main className="MainContent">
          <Switch>
            <Route exact path="/" > <Home /> </Route>
            <Route exact path="/populare-movies" > <PopularMovies /> </Route>
            <Route exact path="/about" > <About /> </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />  
      </Router> 
    </div>
  );
}
