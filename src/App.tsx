import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import About from './pages/About';
import PopularMovies from './pages/PopularMovies';
import PopularShows from './pages/PopularShows';
import SingleItem from './pages/SingleItem';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Search from './components/Search';

import './styles/App.css';

import StateScheme from './types/State';

export default function App() {

  let isSearching = useSelector((state: StateScheme) => state.isSearch)

  return (
    <div className="App LightScheme">
      <Router>
        <Header />
        {isSearching && <Search />}
        <div className="MainContent">
          <Switch>
            <Route exact path="/" > <Home /> </Route>
            <Route exact path="/popular-movies" > <PopularMovies /> </Route>
            <Route exact path="/popular-tvs" > <PopularShows /> </Route>
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
