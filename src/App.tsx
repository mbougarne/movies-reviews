import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import PopularMovies from './pages/PopularMovies';
import PopularShows from './pages/PopularShows';
import SingleItem from './pages/SingleItem';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

import './styles/App.css';

export default function App() {
  return (
    <div className="App LightScheme">
      <Router>
        <Header />
        <div className="MainContent">
          <Switch>
            <Route exact path="/" > <Home /> </Route>
            <Route exact path="/populare-movies" > <PopularMovies /> </Route>
            <Route exact path="/populare-tvs" > <PopularShows /> </Route>
            <Route exact path="/about" > <About /> </Route>
            <Route exact path="/movies/:id" > <SingleItem type="movie" /> </Route>
            <Route exact path="/shows/:id" > <SingleItem type="show" /> </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />  
      </Router> 
    </div>
  );
}
